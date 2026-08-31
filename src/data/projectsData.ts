import { ProjectCaseStudy, ServiceOffering, StudioMember, ClientPortalProject } from '../types';

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'komorebi-sanctuary',
    title: 'Komorebi Sanctuary',
    subtitle: 'Sustainable Timber Pavilion & Tea Architecture',
    client: 'Komorebi Cultural Trust',
    year: '2025',
    category: 'spatial',
    categoryLabel: 'Spatial & Architecture',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A monolithic timber pavilion embedded in the Kyoto foothills, blending traditional Japanese joinery with contemporary carbon-neutral thermal massing.',
    challenge: 'Designing a contemplative public pavilion that withstands seasonal monsoon humidity while leaving zero permanent ground disturbance.',
    solution: 'We engineered a suspended charred cedar post-and-beam lattice, integrated natural rainwater harvesting cascades, and curated bespoke ambient acoustics.',
    outcome: 'Awarded the 2025 World Architecture Festival Sustainability Laureate and visited by over 140,000 visitors in its inaugural season.',
    metrics: [
      { label: 'Embodied Carbon', value: '-42% Net Neg' },
      { label: 'Natural Daylight', value: '94% Daylight Factor' },
      { label: 'International Recognition', value: '3 Design Awards' }
    ],
    deliverables: ['Architectural Schematics', 'Material Sourcing Strategy', 'Lighting & Acoustic Engineering', 'Custom Wayfinding Signage'],
    colorPalette: [
      { name: 'Charred Hinoki', hex: '#1C1A18' },
      { name: 'Warm Bamboo', hex: '#D4AF7A' },
      { name: 'Kyoto Moss', hex: '#3E493A' },
      { name: 'Misty Linen', hex: '#EBE6DF' }
    ],
    typography: [
      { role: 'Display / Signage', family: 'Syne Bold', sample: 'KOMOREBI' },
      { role: 'Editorial Body', family: 'Playfair & Plus Jakarta', sample: 'Harmonious light through leaves' }
    ],
    clientQuote: {
      text: 'Yangla Design translated our centuries-old spiritual reverence into a modern architectural masterpiece that breathes with nature.',
      author: 'Kenji Takahashi',
      role: 'Director of Cultural Heritage, Kyoto',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80'
    },
    featured: true
  },
  {
    id: 'aether-os',
    title: 'Aether OS',
    subtitle: 'Spatial Interface & Design System for Mixed Reality',
    client: 'Aether Technologies',
    year: '2025',
    category: 'digital',
    categoryLabel: 'Digital Products',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A fluid volumetric operating system built for next-generation spatial computing headsets and holographic surfaces.',
    challenge: 'Existing desktop metaphors break in 3D space. Users suffered from cognitive fatigue and inaccurate gaze tracking in complex spatial workflows.',
    solution: 'We crafted a contextual depth-adaptive canvas with dynamic refraction shaders, micro-haptic visual feedback, and zero-gravity workspace clusters.',
    outcome: 'Adopted across 4 enterprise spatial hardware platforms with a 3.4x boost in developer workspace efficiency.',
    metrics: [
      { label: 'Workflow Speedup', value: '+240%' },
      { label: 'Gaze Error Reduction', value: '-68%' },
      { label: 'Series B Raised', value: '$38M' }
    ],
    deliverables: ['3D Volumetric Design System', 'Shader Library & Figma Tokens', 'Motion Interaction Architecture', 'Developer SDK UI Components'],
    colorPalette: [
      { name: 'Deep Nebula', hex: '#0B0D14' },
      { name: 'Hyper Cyan', hex: '#00F0FF' },
      { name: 'Ultraviolet', hex: '#7000FF' },
      { name: 'Phosphor White', hex: '#F0F4FF' }
    ],
    typography: [
      { role: 'Interface Heading', family: 'Syne Medium', sample: 'SPATIAL CANVAS v4' },
      { role: 'Telemetry Monospace', family: 'JetBrains Mono', sample: 'pos: [42.1, -12.4, 88.0]' }
    ],
    clientQuote: {
      text: 'Yangla pushed the boundaries of human-computer interaction. They did not just design UI; they invented the grammar of spatial ergonomics.',
      author: 'Dr. Elena Rostova',
      role: 'Chief Product Officer, Aether',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80'
    },
    featured: true
  },
  {
    id: 'lumina-atelier',
    title: 'Lumina Atelier',
    subtitle: 'High-Jewelry Visual Identity & Digital Flagship',
    client: 'Lumina Haute Joaillerie (Milan)',
    year: '2024',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    heroImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An uncompromising luxury identity system and bespoke digital salon for Milanese master jewelers crafting ethical diamond heirlooms.',
    challenge: 'Reimagining luxury commerce online without losing the tactile intimacy and prestige of high-end private client viewing rooms.',
    solution: 'We engineered an interactive WebGL gemstone refraction viewer, tactile hot-stamped archival packaging, and a custom serif typography family.',
    outcome: 'Record-breaking launch resulting in 4.8x average order value increase and global feature in Vogue and Wallpaper*.',
    metrics: [
      { label: 'E-Commerce AOV', value: '+380%' },
      { label: 'VIP Engagement Time', value: '14.2 min avg' },
      { label: 'Global Press', value: 'Vogue & Wallpaper*' }
    ],
    deliverables: ['Custom Brand Identity & Monogram', 'Archival Packaging Suite', 'Interactive E-Commerce Flagship', 'VIP Private Salon Client App'],
    colorPalette: [
      { name: 'Florentine Gold', hex: '#CBA135' },
      { name: 'Onyx Noir', hex: '#111113' },
      { name: 'Silk Alabaster', hex: '#F7F5F0' },
      { name: 'Emerald Velvet', hex: '#0F2C23' }
    ],
    typography: [
      { role: 'Brand Display', family: 'Playfair Display Italic', sample: 'Lumina di Milano' },
      { role: 'Subtitles & Specs', family: 'Plus Jakarta Sans 600', sample: 'CARAT WEIGHT & CUT CLARITY' }
    ],
    clientQuote: {
      text: 'Every touchpoint Yangla designed radiates the craftsmanship of our master goldsmiths. Our clients are completely spellbound.',
      author: 'Matteo Moretti',
      role: 'Founder & Master Gemologist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80'
    },
    featured: true
  },
  {
    id: 'verdant-living',
    title: 'Verdant Living',
    subtitle: 'Circular Packaging & Editorial Publication',
    client: 'Verdant Bio-Organics (Zurich)',
    year: '2024',
    category: 'editorial',
    categoryLabel: 'Editorial & Print',
    heroImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An eco-systemic packaging identity and quarterly hardcover journal printed on algae-based compostable paper using non-toxic soy inks.',
    challenge: 'Eliminating single-use plastics from premium cosmetic and botanical products without sacrificing shelf prestige.',
    solution: 'Designed structural mycelium and seed-embedded paper cartons that consumers plant directly into soil after unboxing.',
    outcome: 'Won Red Dot Best of the Best 2024 for Sustainable Packaging Design and certified 100% cradle-to-cradle.',
    metrics: [
      { label: 'Plastic Reduction', value: '100% Zero Plastic' },
      { label: 'Journal Circulation', value: '45,000 Copies' },
      { label: 'Award', value: 'Red Dot Best 2024' }
    ],
    deliverables: ['Mycelium Packaging System', 'Quarterly Hardcover Monograph', 'Soy Ink Botanical Illustrations', 'Circular Supply Chain Guidelines'],
    colorPalette: [
      { name: 'Eucalyptus Sage', hex: '#6E8373' },
      { name: 'Raw Ochre', hex: '#C28D56' },
      { name: 'Seed Pulp', hex: '#F3EFEA' },
      { name: 'Forest Charcoal', hex: '#232824' }
    ],
    typography: [
      { role: 'Headline', family: 'Syne Semibold', sample: 'REGENERATIVE BOTANICA' },
      { role: 'Monograph Narrative', family: 'Playfair Display', sample: 'Cultivating the soil of tomorrow' }
    ],
    clientQuote: {
      text: 'Yangla solved the hardest equation in modern design: pairing zero-waste environmental science with pure tactile desire.',
      author: 'Astrid Lindqvist',
      role: 'Chief Sustainability Officer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80'
    },
    featured: false
  },
  {
    id: 'nexus-robotics',
    title: 'Nexus Autonomous Systems',
    subtitle: 'Robotics Brand Identity & Motion Design Language',
    client: 'Nexus Robotics Labs (Tokyo)',
    year: '2025',
    category: 'motion',
    categoryLabel: 'Motion & 3D',
    heroImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A hyper-kinetic brand system and real-time CGI telemetry visualization suite for high-precision autonomous warehouse androids.',
    challenge: 'Demystifying complex lidar sensor arrays and robotic swarm mathematics for enterprise industrial buyers and global press.',
    solution: 'Crafted a parametric visual grammar based on robotic motion vectors, generative telemetry dashboards, and 3D kinetic reels.',
    outcome: 'Positioned Nexus as the premier industrial automation partner for Fortune 50 supply chain logistics.',
    metrics: [
      { label: 'Contract Volume', value: '$120M Signed' },
      { label: 'Engagement Rate', value: '+310%' },
      { label: 'CES Innovation Award', value: 'Grand Honoree' }
    ],
    deliverables: ['Generative Vector Brand System', 'Kinetic 3D Motion Reel', 'Telemetry Dashboard UI', 'Trade Show Pavilion Staging'],
    colorPalette: [
      { name: 'Cyber Crimson', hex: '#FF2E5B' },
      { name: 'Titanium Slate', hex: '#1E2229' },
      { name: 'Lidar Emerald', hex: '#00E676' },
      { name: 'Pure Quartz', hex: '#FFFFFF' }
    ],
    typography: [
      { role: 'Logotype', family: 'Syne 800 ExtraBold', sample: 'NEXUS AUTOMATA' },
      { role: 'Data Matrix', family: 'JetBrains Mono', sample: 'SWARM_STATE: OPTIMAL [OK]' }
    ],
    clientQuote: {
      text: 'The kinetic visual system Yangla created makes our robotic swarms feel alive, precise, and irresistible to enterprise leaders.',
      author: 'Hiroshi Tanaka',
      role: 'CEO & Head of Robotics',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80'
    },
    featured: true
  },
  {
    id: 'himalaya-artisan-guild',
    title: 'Himalayan Heritage Archive',
    subtitle: 'Cultural Visual Identity & Sacred Craft Exhibition',
    client: 'Himalayan Craft Council (Kathmandu)',
    year: '2024',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A reverent digital archive and physical traveling gallery honoring 800 years of Newari bronze sculpture and thangka iconography.',
    challenge: 'Preserving endangered Himalayan artisan techniques and connecting indigenous sculptors directly to international museums and patrons.',
    solution: 'Designed an archival book series, bilingual Tibetan-Nepali typographic identity, and 4K photogrammetry 3D relief scanner archive.',
    outcome: 'Preserved over 1,200 endangered manuscripts and raised $2.4M in direct artisan micro-endowments.',
    metrics: [
      { label: 'Artisans Supported', value: '450+ Masters' },
      { label: 'Archived Relics', value: '1,200 Works' },
      { label: 'UNESCO Partnership', value: 'Official Partner' }
    ],
    deliverables: ['Bilingual Sacred Typography', 'Hardcover Archival Compendium', 'Interactive 3D Photogrammetry Portal', 'Museum Exhibition Design'],
    colorPalette: [
      { name: 'Vermilion Terra', hex: '#B83A24' },
      { name: 'Patina Bronze', hex: '#8B7355' },
      { name: 'Lapis Indigo', hex: '#1C2951' },
      { name: 'Handmade Lokta', hex: '#EAE1D2' }
    ],
    typography: [
      { role: 'Title Display', family: 'Playfair Display Bold', sample: 'SACRED RELICS' },
      { role: 'Script Archive', family: 'Syne & Plus Jakarta', sample: 'Preserving living craftsmanship' }
    ],
    clientQuote: {
      text: 'Yangla treated our sacred artistic traditions with utmost spiritual dignity, creating a bridge between ancestral wisdom and the modern world.',
      author: 'Sunil Shakya',
      role: 'Master Sculptor & Council Chair',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80'
    },
    featured: false
  }
];

export const STUDIO_SERVICES: ServiceOffering[] = [
  {
    id: 'brand-strategy',
    number: '01',
    title: 'Brand Strategy & Identity',
    tagline: 'Definitive visual systems that establish enduring cultural presence.',
    description: 'We distill the essence of your vision into indelible visual identities. From strategic positioning and bespoke typography to comprehensive guidelines and physical touchpoints.',
    deliverables: [
      'Visual Identity System & Logo Suite',
      'Custom Brand Typography & Color Theory',
      'Comprehensive Brand Guidelines (Digital + PDF)',
      'Tone of Voice & Narrative Messaging',
      'Stationery, Packaging & Physical Ephemera'
    ],
    toolsAndTech: ['Figma', 'Illustrator', 'Glyphs', 'Cinema 4D', 'Material Lab'],
    startingPrice: '$12,000',
    timeline: '4 – 8 Weeks',
    iconName: 'Compass'
  },
  {
    id: 'digital-experiences',
    number: '02',
    title: 'Digital Products & Web Experiences',
    tagline: 'High-performance digital flagships, apps, and interactive web applications.',
    description: 'We architect responsive web experiences, spatial applications, and bespoke web platforms that captivate audiences and deliver uncompromising speed and conversion.',
    deliverables: [
      'UI/UX Design Architecture & Wireframing',
      'Interactive WebGL & Motion Prototyping',
      'Full-Stack Web & Mobile Development',
      'Design Systems & Component Libraries',
      'Conversion Optimization & Analytics Setup'
    ],
    toolsAndTech: ['React', 'TypeScript', 'Tailwind', 'Three.js / WebGL', 'Node.js / Express', 'Next.js'],
    startingPrice: '$16,000',
    timeline: '6 – 12 Weeks',
    iconName: 'Layers'
  },
  {
    id: 'spatial-design',
    number: '03',
    title: 'Spatial & Environmental Design',
    tagline: 'Atmospheric physical environments, retail flagships, and exhibition pavilions.',
    description: 'Translating brand soul into three-dimensional reality. We collaborate with architects and fabricators to craft spaces that stimulate the senses and inspire profound presence.',
    deliverables: [
      'Experiential Concept Development & 3D Renders',
      'Architectural Finishes & Lighting Schematics',
      'Custom Furniture & Fixture Specifications',
      'Wayfinding & Environmental Graphics',
      'On-Site Curation & Installation Oversight'
    ],
    toolsAndTech: ['Rhino 3D', 'Blender', 'AutoCAD', 'V-Ray', 'Sustainable Material Sourcing'],
    startingPrice: '$20,000',
    timeline: '8 – 16 Weeks',
    iconName: 'Building2'
  },
  {
    id: 'art-direction',
    number: '04',
    title: 'Art Direction & Editorial Production',
    tagline: 'Captivating visual storytelling, photography curation, and luxury print.',
    description: 'From editorial monographs to CGI advertising campaigns, we curate visual worlds that provoke emotion and elevate brand desirability.',
    deliverables: [
      'Photo & Film Campaign Direction',
      '3D Product CGI & Motion Simulations',
      'Hardcover Book & Editorial Layouts',
      'Specialty Printing & Hot Foil Stamping Specs',
      'Digital Asset Toolkits for Social & Media'
    ],
    toolsAndTech: ['Houdini', 'Octane Render', 'InDesign', 'Photoshop', 'Specialty Print Presses'],
    startingPrice: '$9,500',
    timeline: '3 – 6 Weeks',
    iconName: 'Sparkles'
  }
];

export const STUDIO_TEAM: StudioMember[] = [
  {
    name: 'Aarya Bajracharya',
    role: 'Co-Founder & Executive Creative Director',
    bio: 'Former design partner at Pentagram and Studio Dumbar. Pioneer in fusing Himalayan geometry with brutalist modernist typography.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    location: 'Kathmandu / London',
    awards: 'ADC Young Guns 20 • Red Dot Grand Prix'
  },
  {
    name: 'Soren Vance',
    role: 'Head of Spatial Architecture & 3D',
    bio: 'Architectural theorist trained at ETH Zurich. Obsessed with regenerative timber massing, acoustic psychology, and daylighting.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    location: 'Zurich / Tokyo',
    awards: 'Mies Crown Hall Finalist • WAF 2025'
  },
  {
    name: 'Kavita Shrestha',
    role: 'Director of Digital Products & Technology',
    bio: 'Ex-creative technologist at Apple & Stripe. Architecting high-framerate interactive spatial UI and accessible web systems.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    location: 'New York / Kathmandu',
    awards: 'Awwwards Judge • FWA Jury 2024'
  },
  {
    name: 'Julian Thorne',
    role: 'Principal Brand Strategist',
    bio: 'Brand positioning advisor to venture-backed unicorns and heritage luxury houses across Paris, Milan, and San Francisco.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    location: 'London / New York',
    awards: 'D&AD Yellow Pencil • Brand New Award'
  }
];

export const DEMO_CLIENT_PROJECTS: Record<string, ClientPortalProject> = {
  'YANGLA-8821': {
    projectCode: 'YANGLA-8821',
    clientName: 'Lumina Haute Joaillerie',
    projectName: 'Digital Flagship & E-Commerce V2',
    category: 'Digital Product & Brand System',
    status: 'Final Polish',
    progressPercentage: 88,
    startDate: 'Nov 12, 2025',
    targetLaunch: 'Mar 15, 2026',
    leadDesigner: 'Kavita Shrestha',
    nextMilestone: 'Production QA & 3D Gemstone Refraction Stress Test',
    milestones: [
      {
        id: 'm1',
        phase: 'Phase 01',
        title: 'Brand Archetype & Discovery Sprint',
        status: 'completed',
        date: 'Nov 26, 2025',
        details: 'Stakeholder interviews, Milan atelier audit, competitive luxury benchmark and art direction moodboards.',
        deliverables: ['Discovery Synthesis Deck', '3 Creative Direction Concept Boards']
      },
      {
        id: 'm2',
        phase: 'Phase 02',
        title: 'Design System & 3D Gemstone Shaders',
        status: 'completed',
        date: 'Jan 14, 2026',
        details: 'Custom typography pairings, WebGL diamond light refraction engine, responsive component library in Figma.',
        deliverables: ['Figma Design Token Kit v2.4', 'Three.js Shader Prototype']
      },
      {
        id: 'm3',
        phase: 'Phase 03',
        title: 'Full-Stack Flagship Development',
        status: 'in-progress',
        date: 'Feb 28, 2026',
        details: 'Express API microservices, Stripe checkout flow, VIP private client appointment booking portal integration.',
        deliverables: ['Staging Server URL', 'API Documentation']
      },
      {
        id: 'm4',
        phase: 'Phase 04',
        title: 'Global Launch & Performance Optimization',
        status: 'upcoming',
        date: 'Mar 15, 2026',
        details: 'Sub-second edge caching deployment, press kit distribution, and 60-day hypercare support.',
        deliverables: ['Production Release v1.0', 'Brand Asset Archive']
      }
    ],
    assets: [
      { name: 'Lumina_Brand_Tokens_v2.4.fig', type: 'Figma System', size: '42.8 MB', date: 'Feb 18, 2026' },
      { name: 'Typography_Specimen_Milano.pdf', type: 'Design Spec', size: '14.2 MB', date: 'Jan 22, 2026' },
      { name: 'Atelier_3D_Gemstone_Renders.zip', type: 'CGI Asset Suite', size: '184 MB', date: 'Feb 05, 2026' }
    ]
  },
  'YANGLA-9402': {
    projectCode: 'YANGLA-9402',
    clientName: 'Aether Technologies',
    projectName: 'Spatial OS Developer Documentation',
    category: 'Spatial Design & Product UI',
    status: 'In Progress',
    progressPercentage: 64,
    startDate: 'Jan 05, 2026',
    targetLaunch: 'Apr 20, 2026',
    leadDesigner: 'Aarya Bajracharya',
    nextMilestone: 'Gaze-Adaptive Component Testing',
    milestones: [
      {
        id: 'm1',
        phase: 'Phase 01',
        title: 'Volumetric Typography Research',
        status: 'completed',
        date: 'Jan 20, 2026',
        details: 'Analysis of legibility at various depth angles and focal distances.',
        deliverables: ['Depth Legibility Whitepaper']
      },
      {
        id: 'm2',
        phase: 'Phase 02',
        title: 'Interactive 3D Workspace Components',
        status: 'in-progress',
        date: 'Mar 02, 2026',
        details: 'Building drag-and-snap floating volumetric windows.',
        deliverables: ['WebXR Interactive Playground']
      }
    ],
    assets: [
      { name: 'Spatial_Component_Library_Alpha.zip', type: 'Code + Assets', size: '78.4 MB', date: 'Feb 12, 2026' }
    ]
  }
};
