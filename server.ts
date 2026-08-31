import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { FEATURED_PROJECTS, STUDIO_SERVICES, DEMO_CLIENT_PROJECTS } from './src/data/projectsData.ts';
import { ProjectInquiry } from './src/types/index.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory persistent storage for inquiries
const inquiriesStore: (ProjectInquiry & { id: string; createdAt: string; status: 'received' | 'reviewing' | 'contacted' })[] = [
  {
    id: 'INQ-101',
    name: 'Eleanor Vance',
    email: 'e.vance@solarcity.ch',
    company: 'Solaris Architecture Zurich',
    serviceTypes: ['Spatial & Environmental Design', 'Brand Strategy & Identity'],
    budgetRange: '$25,000 – $50,000',
    timeline: '2 – 3 Months',
    projectDescription: 'We are developing a net-zero alpine cultural pavilion and need end-to-end brand identity and architectural exhibition curation.',
    hearAboutUs: 'Awwwards Feature',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: 'reviewing'
  },
  {
    id: 'INQ-102',
    name: 'Marcus Sterling',
    email: 'marcus@hyperion-ventures.co',
    company: 'Hyperion Quantum',
    serviceTypes: ['Digital Products & Web Experiences', 'Motion & 3D'],
    budgetRange: '$50,000+',
    timeline: 'Immediate (1 – 2 Months)',
    projectDescription: 'Interactive 3D WebGL platform showcasing quantum computing hardware simulators for our global developer community.',
    hearAboutUs: 'Design Referral',
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    status: 'contacted'
  }
];

// Lazy initialize Gemini API client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// ----------------- API ENDPOINTS -----------------

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'online',
    studio: 'Yangla Design',
    timestamp: new Date().toISOString(),
    version: '2.4.0'
  });
});

// GET all projects (with optional filter)
app.get('/api/projects', (req: Request, res: Response) => {
  const { category, search } = req.query;
  let results = [...FEATURED_PROJECTS];

  if (category && category !== 'all') {
    results = results.filter((p) => p.category === category);
  }

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.deliverables.some((d) => d.toLowerCase().includes(q))
    );
  }

  res.json({
    total: results.length,
    projects: results
  });
});

// GET single project by ID
app.get('/api/projects/:id', (req: Request, res: Response) => {
  const project = FEATURED_PROJECTS.find((p) => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project);
});

// GET services
app.get('/api/services', (_req: Request, res: Response) => {
  res.json({
    services: STUDIO_SERVICES
  });
});

// POST new project inquiry / brief
app.post('/api/inquiries', (req: Request, res: Response) => {
  const { name, email, company, serviceTypes, budgetRange, timeline, projectDescription, hearAboutUs } = req.body;

  if (!name || !email || !projectDescription) {
    return res.status(400).json({ error: 'Name, email, and project description are required.' });
  }

  const newInquiry = {
    id: `INQ-${Math.floor(100 + Math.random() * 900)}`,
    name,
    email,
    company: company || 'Independent / Confidential',
    serviceTypes: Array.isArray(serviceTypes) && serviceTypes.length > 0 ? serviceTypes : ['Brand Strategy & Identity'],
    budgetRange: budgetRange || 'Flexible',
    timeline: timeline || 'Standard (2 – 3 Months)',
    projectDescription,
    hearAboutUs: hearAboutUs || 'Direct Search',
    createdAt: new Date().toISOString(),
    status: 'received' as const
  };

  inquiriesStore.unshift(newInquiry);

  res.status(201).json({
    success: true,
    message: 'Thank you. Your project brief has been received by Yangla Design leadership.',
    inquiry: newInquiry
  });
});

// GET all inquiries (for studio admin / dashboard preview)
app.get('/api/inquiries', (_req: Request, res: Response) => {
  res.json({
    total: inquiriesStore.length,
    inquiries: inquiriesStore
  });
});

// GET Client portal project status
app.get('/api/project-status/:code', (req: Request, res: Response) => {
  const code = (req.params.code || '').toUpperCase().trim();
  const project = DEMO_CLIENT_PROJECTS[code];

  if (!project) {
    return res.status(404).json({
      error: `No active project found with code "${code}". Try demo codes: YANGLA-8821 or YANGLA-9402.`
    });
  }

  res.json({
    success: true,
    project
  });
});

// POST Calculate Estimate
app.post('/api/calculate-estimate', (req: Request, res: Response) => {
  const { selectedServices = [], timelineSpeed = 'standard', scale = 'medium', customAddons = [] } = req.body;

  let baseCost = 0;
  let totalWeeks = 0;

  const servicePricing: Record<string, { cost: number; weeks: number }> = {
    'brand-strategy': { cost: 12000, weeks: 6 },
    'digital-experiences': { cost: 16000, weeks: 8 },
    'spatial-design': { cost: 20000, weeks: 10 },
    'art-direction': { cost: 9500, weeks: 4 }
  };

  selectedServices.forEach((serviceId: string) => {
    if (servicePricing[serviceId]) {
      baseCost += servicePricing[serviceId].cost;
      totalWeeks = Math.max(totalWeeks, servicePricing[serviceId].weeks);
    }
  });

  if (baseCost === 0) {
    baseCost = 12000;
    totalWeeks = 6;
  }

  // Multipliers
  let scaleMultiplier = 1.0;
  if (scale === 'startup') scaleMultiplier = 0.85;
  if (scale === 'enterprise') scaleMultiplier = 1.45;

  let speedMultiplier = 1.0;
  if (timelineSpeed === 'rush') {
    speedMultiplier = 1.25;
    totalWeeks = Math.max(3, Math.round(totalWeeks * 0.65));
  } else if (timelineSpeed === 'relaxed') {
    speedMultiplier = 0.95;
    totalWeeks = Math.round(totalWeeks * 1.2);
  }

  let addonsCost = 0;
  const addonPricing: Record<string, number> = {
    '3d-webgl': 4500,
    'custom-typography': 3800,
    'motion-guidelines': 3200,
    'physical-prototypes': 4000,
    'express-deployment': 2500
  };

  customAddons.forEach((addon: string) => {
    if (addonPricing[addon]) {
      addonsCost += addonPricing[addon];
    }
  });

  const estimatedTotal = Math.round((baseCost * scaleMultiplier * speedMultiplier) + addonsCost);
  const lowRange = Math.round(estimatedTotal * 0.9);
  const highRange = Math.round(estimatedTotal * 1.15);

  res.json({
    success: true,
    estimatedTotal,
    lowRange,
    highRange,
    estimatedWeeks: totalWeeks,
    currency: 'USD',
    teamAllocation: [
      { role: 'Executive Creative Director', allocation: '25%' },
      { role: 'Lead Visual / UI Designer', allocation: '100%' },
      { role: 'Senior Creative Technologist', allocation: '75%' },
      { role: 'Strategic Producer', allocation: '35%' }
    ]
  });
});

// POST Gemini AI Creative Brief & Strategy Generator
app.post('/api/generate-brief', async (req: Request, res: Response) => {
  const { industry, brandName, targetAudience, coreValues, aestheticPreference, requestedServices } = req.body;

  const gemini = getGeminiClient();

  if (!gemini) {
    // Elegant deterministic fallback if Gemini key is not configured
    const mockBrief = {
      creativeConcept: `${brandName || 'The Project'} embodies understated architectural luxury with intentional minimalist precision.`,
      tagline: `Essential Form, Enduring Presence.`,
      brandArchetype: `The Creator & Sage (Architectural Modernism)`,
      colorRecommendation: [
        { name: 'Obsidian Basalt', hex: '#141416', meaning: 'Grounding authority and timeless weight' },
        { name: 'Warm Travertine', hex: '#E8E1D5', meaning: 'Organic tactile authenticity and light' },
        { name: 'Raw Ochre', hex: '#B8860B', meaning: 'Himalayan mineral heritage accent' }
      ],
      typographyPairing: {
        display: 'Syne or Playfair Display (Commanding structural serif/geometric)',
        body: 'Plus Jakarta Sans or JetBrains Mono (Technical clarity & high legibility)'
      },
      keyDeliverables: [
        'Modular Visual Identity Matrix with responsive digital logo tokens',
        'Immersive Digital Flagship with sub-second page transitions',
        'Tactile Editorial Print Guidelines & Material Specifications'
      ],
      strategicAdvice: `Position ${brandName || 'your brand'} by emphasizing tactile material honesty and digital fluidity rather than hyper-commercial noise. Lean into whitespace, deep contrast, and bespoke kinetic motion.`
    };

    return res.json({
      success: true,
      mode: 'curated_studio_engine',
      brief: mockBrief
    });
  }

  try {
    const prompt = `You are the Executive Creative Director of Yangla Design, an internationally acclaimed avant-garde design studio known for sublime brand identities, architectural spatial design, and high-performance digital experiences.

Generate a comprehensive, bespoke Creative Strategy & Brand Direction for this prospective client:
- Brand Name: ${brandName || 'Untitled Venture'}
- Industry / Domain: ${industry || 'Contemporary Luxury & Technology'}
- Target Audience: ${targetAudience || 'Discerning global tastemakers & enterprise leaders'}
- Core Values: ${coreValues || 'Craftsmanship, innovation, sustainability, timeless elegance'}
- Aesthetic Preference: ${aestheticPreference || 'Brutalist minimalism with organic warmth'}
- Requested Services: ${requestedServices || 'Brand Strategy, Digital Flagship, Spatial Identity'}

Return ONLY a valid JSON object with the following schema:
{
  "creativeConcept": "A captivating 2-sentence creative thesis for this brand",
  "tagline": "A powerful, memorable 3-6 word slogan/manifesto hook",
  "brandArchetype": "The specific brand archetype and aesthetic movement",
  "colorRecommendation": [
    { "name": "Color Name", "hex": "#HEXCODE", "meaning": "Strategic psychological rationale" }
  ],
  "typographyPairing": {
    "display": "Display font recommendation and rationale",
    "body": "Body font recommendation and rationale"
  },
  "keyDeliverables": [
    "Deliverable item 1 with studio detail",
    "Deliverable item 2 with studio detail",
    "Deliverable item 3 with studio detail"
  ],
  "strategicAdvice": "A paragraph of high-level creative direction advice from Yangla Design studio leaders."
}`;

    const response = await gemini.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const responseText = response.text || '';
    const parsedData = JSON.parse(responseText);

    res.json({
      success: true,
      mode: 'gemini_intelligence',
      brief: parsedData
    });
  } catch (error: any) {
    console.error('Error with Gemini brief generation:', error);
    // Graceful fallback
    res.json({
      success: true,
      mode: 'curated_studio_fallback',
      brief: {
        creativeConcept: `Harmonizing structural geometry with organic tactile presence for ${brandName || 'this vision'}.`,
        tagline: 'Crafted with Intent. Built for Generations.',
        brandArchetype: 'The Visionary Craftsman',
        colorRecommendation: [
          { name: 'Graphite Stone', hex: '#1C1D21', meaning: 'Modern architectural foundation' },
          { name: 'Sand Linen', hex: '#F0ECE1', meaning: 'Pristine negative space & warmth' },
          { name: 'Bronze Ochre', hex: '#C59B27', meaning: 'Prestige & artisanal heritage' }
        ],
        typographyPairing: {
          display: 'Syne & Playfair Display',
          body: 'Plus Jakarta Sans'
        },
        keyDeliverables: [
          'Full-scale Visual Identity & Design System',
          'Interactive Web Flagship with Custom 3D Shaders',
          'Editorial Brand Guidelines & Physical Collateral'
        ],
        strategicAdvice: 'Focus on high-contrast typography, generous negative space, and sensory material qualities to distinguish your brand in saturated markets.'
      }
    });
  }
});

// Setup Vite in development or serve static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the built dist directory
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Yangla Design Server] Running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
