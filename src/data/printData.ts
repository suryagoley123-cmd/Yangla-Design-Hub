export interface PrintProduct {
  id: string;
  name: string;
  category: 'stationery' | 'marketing' | 'packaging' | 'signage' | 'merchandise' | 'editorial';
  image: string;
  minQty: number;
  popularQty: number;
  startingPrice: number; // in USD or NPR equivalent
  turnaroundDays: string;
  paperOptions: string[];
  finishOptions: string[];
  description: string;
  features: string[];
}

export interface PrintService {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  image: string;
  equipment: string;
  turnaround: string;
  bestFor: string;
  capabilities: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'packaging' | 'branding' | 'editorial' | 'signage' | 'merchandise';
  client: string;
  image: string;
  specs: {
    paper: string;
    finishing: string;
    dimensions: string;
    runSize: string;
    turnaround: string;
  };
  description: string;
  gallery: string[];
}

export const PRINT_SERVICES: PrintService[] = [
  {
    id: 'commercial-offset',
    title: 'Commercial Offset Printing',
    tagline: 'High-volume production with flawless color consistency and microscopic dot fidelity.',
    iconName: 'Printer',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    equipment: 'Heidelberg Speedmaster CD 102 (5-Color + Coater)',
    turnaround: '3 – 5 Business Days',
    bestFor: 'Books, Annual Reports, Bulk Product Packaging, Magazine Runs (1,000+ units)',
    capabilities: [
      'True CMYK + 2 Spot Pantone (PMS) channels',
      'Inline aqueous & UV coating in single pass',
      'Stock range from 60 GSM Bible paper to 450 GSM Art Board',
      'Automated spectrophotometer color calibration'
    ]
  },
  {
    id: 'digital-quick-print',
    title: 'High-Speed Digital Quick-Print',
    tagline: 'Same-day and 24-hour turnaround for low to medium volume commercial collateral.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1000&q=80',
    equipment: 'HP Indigo 12000 & Konica Minolta AccurioPress',
    turnaround: 'Same Day to 24 Hours',
    bestFor: 'Urgent Business Cards, Event Flyers, Brochures, Personalized Certificates',
    capabilities: [
      'Variable Data Printing (VDP) with personalized barcodes & QR',
      'Zero setup plate cost for runs from 10 to 1,000 units',
      'White ink, Metallic silver, and Clear gloss digital toners',
      'Synthetic waterproof and tear-resistant substrates'
    ]
  },
  {
    id: 'large-format-signage',
    title: 'Large Format & Signage Hub',
    tagline: 'Architectural banners, exhibition booths, vehicle vinyls, and illuminated 3D signage.',
    iconName: 'Maximize',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80',
    equipment: 'Roland TrueVIS Eco-Solvent & Mimaki UV Flatbed 3.2m',
    turnaround: '24 – 48 Hours',
    bestFor: 'Rollup Standees, Frontlit & Backlit Flex, Acrylic 3D Letters, Trade Show Booths',
    capabilities: [
      'Seamless printing up to 3.2 meters (10.5 ft) wide',
      'Direct-to-substrate printing on Acrylic, Wood, Foam Board, Aluminum',
      'Outdoor UV-resistant, weatherproof inks guaranteed for 3+ years',
      'Complete onsite mounting and metal frame fabrication'
    ]
  },
  {
    id: 'packaging-boxes',
    title: 'Custom Packaging & Box Engineering',
    tagline: 'Luxury rigid boxes, folding cartons, corrugated shippers, and custom die-lines.',
    iconName: 'Package',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1000&q=80',
    equipment: 'Kongsberg CAD CNC Table & Auto Die-Punching Lines',
    turnaround: '5 – 8 Business Days',
    bestFor: 'E-commerce Mailers, Luxury Cosmetics, Gourmet Tea & Coffee, Tech Hardware',
    capabilities: [
      'Structural box engineering with custom foam/EVA inserts',
      'Magnetic closure rigid boxes, drawer slipcases, tuck-top cartons',
      'Food-grade certified paperboard and biodegradable laminations',
      'Hot foil stamping, multi-level blind embossing, raised Spot UV'
    ]
  },
  {
    id: 'graphic-prepress',
    title: 'Graphic Design & Pre-Press Mastery',
    tagline: 'Expert file preparation, CMYK color separation, trapping, and bespoke vector design.',
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80',
    equipment: 'Esko Pre-Press Workflow & High-Res GMG Proofing',
    turnaround: '4 – 12 Hours',
    bestFor: 'Packaging Die-lines, Brand Identity Systems, PDF Print Optimization',
    capabilities: [
      'Comprehensive pre-flight file check (Bleed, Trim, 300+ DPI)',
      'Certified ISO 12647-2 digital contract color proofs',
      'Bespoke layout design for brochures, catalogs, and logos',
      'Custom cutter guide & embossing die vector generation'
    ]
  },
  {
    id: 'merchandise-uniforms',
    title: 'UV DTF & Corporate Merchandise',
    tagline: 'Direct-to-Film (UV DTF) transfers, staff apparel, engraved executive gifts, and custom promotional items.',
    iconName: 'Shirt',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    equipment: 'Industrial UV DTF Printer & Automatic Heat Press Lines',
    turnaround: '24 – 48 Hours',
    bestFor: 'UV DTF Stickers for Glass/Metal/Plastic, Company Polo Shirts, Ceramic Mugs, Lanyards, Leather Diaries, Tote Bags',
    capabilities: [
      'Industrial UV DTF 3D transfer prints for curved bottles, tumblers & electronics',
      'High-definition Direct-to-Film (DTF) & Screen printing on cotton apparel',
      'Precision laser engraving on metal pens, timber, and thermal flasks',
      'Sublimation on ceramic mugs, mousepads, and stainless steel bottles',
      'Custom curated welcome onboarding boxes with tissue wrap'
    ]
  }
];

export const PRINT_PRODUCTS: PrintProduct[] = [
  {
    id: 'prod-business-cards',
    name: 'Executive Business Cards',
    category: 'stationery',
    image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&w=800&q=80',
    minQty: 100,
    popularQty: 500,
    startingPrice: 15,
    turnaroundDays: 'Same Day – 24 Hrs',
    paperOptions: ['350 GSM Art Card', '400 GSM Velvet Soft-Touch', '300 GSM Textured Cotton', '700 GSM Triplex Sandwich'],
    finishOptions: ['Matte Lamination', 'Raised Spot UV', 'Metallic Gold / Copper Foil', 'Die-Cut Rounded Corners', 'Painted Gilt Edges'],
    description: 'Ultra-premium business cards crafted with precision registration, tactile coatings, and vibrant foil accents.',
    features: ['Double-sided CMYK', '3.5" x 2" standard or 85x55mm EU size', 'Heavyweight unbending cardstock']
  },
  {
    id: 'prod-brochures-flyers',
    name: 'Corporate Brochures & Flyers',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    minQty: 250,
    popularQty: 1000,
    startingPrice: 35,
    turnaroundDays: '24 – 48 Hrs',
    paperOptions: ['130 GSM Gloss Art', '170 GSM Matte Art', '250 GSM Heavy Card', 'Kraft Eco Paper'],
    finishOptions: ['Bi-Fold (4pp)', 'Tri-Fold / Z-Fold (6pp)', 'Gloss Varnish', 'Matte Celloglaze'],
    description: 'High-impact marketing flyers, company profile booklets, and multi-fold promotional brochures.',
    features: ['High-definition offset fidelity', 'Machine creased for razor-sharp folding', 'Vibrant photo reproduction']
  },
  {
    id: 'prod-custom-boxes',
    name: 'Rigid & Folding Packaging Boxes',
    category: 'packaging',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
    minQty: 100,
    popularQty: 500,
    startingPrice: 120,
    turnaroundDays: '5 – 7 Days',
    paperOptions: ['350 GSM Duplex / SBS Board', '1200 GSM Greyboard (Rigid)', 'E-Flute Corrugated Shippers', 'Kraft Board'],
    finishOptions: ['Soft-Touch Lamination', 'Spot UV Logos', 'Gold / Silver Stamping', 'Custom Foam / Velvet Inserts'],
    description: 'Custom-engineered product packaging for retail, beauty, electronics, food, and e-commerce unboxing.',
    features: ['Tailored 3D CAD dielines', 'Drop-tested structural durability', 'Food-safe certified coatings']
  },
  {
    id: 'prod-standees-banners',
    name: 'Roll-Up Standees & Flex Banners',
    category: 'signage',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    minQty: 1,
    popularQty: 4,
    startingPrice: 22,
    turnaroundDays: 'Same Day / 24 Hrs',
    paperOptions: ['Non-Tearable Pet Film (No-Curl)', 'Heavyweight Star Flex (380 GSM)', 'Backlit Translucent Vinyl', 'Fabric Banner'],
    finishOptions: ['Aluminum Luxury Wide Base Stand', 'Eyelets & Hemming', 'Gloss / Matte UV Shield', 'Carrying Bag Included'],
    description: 'Portable display standees and giant outdoor flex banners for exhibitions, conferences, and retail storefronts.',
    features: ['Instant retracting mechanism', 'Fade-resistant UV cured inks', 'Lightweight aluminum hardware']
  },
  {
    id: 'prod-stickers-labels',
    name: 'Die-Cut Stickers & Product Labels',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80',
    minQty: 100,
    popularQty: 1000,
    startingPrice: 18,
    turnaroundDays: '24 – 48 Hrs',
    paperOptions: ['Waterproof White Vinyl', 'Clear Transparent Vinyl', 'Metallic Gold / Chrome', 'Holographic Rainbow', 'Kraft Paper'],
    finishOptions: ['Individual Die-Cut (Kiss Cut)', 'Sheets', 'Rolls for Machine Applicators', 'Gloss / Matte Overlaminate'],
    description: 'Durable custom stickers and roll labels for bottles, jars, retail merchandise, and brand giveaways.',
    features: ['Scratchproof & waterproof', 'Residue-free adhesive backing', 'Any custom shape contour cut']
  },
  {
    id: 'prod-stationery-books',
    name: 'Letterheads, Envelopes & Bill Books',
    category: 'stationery',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80',
    minQty: 500,
    popularQty: 2000,
    startingPrice: 30,
    turnaroundDays: '2 – 3 Days',
    paperOptions: ['100 GSM Executive Bond Paper', '120 GSM Sunshine Superprint', 'Carbonless NCR Paper (2-Part / 3-Part)'],
    finishOptions: ['Gummed Peel & Seal Envelopes', 'Consecutive Numbering & Perforation', 'Hardcover Binding', 'Watermark Emulation'],
    description: 'Essential corporate stationery suites and serialized invoice/receipt voucher books.',
    features: ['Inkjet & laser printer friendly', 'Clean carbonless duplicates', 'Official brand color accuracy']
  },
  {
    id: 'prod-corporate-gifts',
    name: 'Branded Corporate Gifts & Apparel',
    category: 'merchandise',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    minQty: 20,
    popularQty: 100,
    startingPrice: 45,
    turnaroundDays: '3 – 5 Days',
    paperOptions: ['Cotton Pique Polo Shirts (220 GSM)', 'Matte Black Ceramic Mugs', 'PU Leatherette Executive Diaries', 'Metal Stylus Pens'],
    finishOptions: ['High-Density Embroidery', 'Laser Engraving', 'Full-Color DTF Heat Transfer', 'Debossed Monograms'],
    description: 'Custom company uniforms, premium employee onboarding gift hampers, and client appreciation sets.',
    features: ['Wash-proof durable prints', 'Executive gift box packaging', 'Bulk volume wholesale tier']
  },
  {
    id: 'prod-books-magazines',
    name: 'Books, Catalogs & Annual Reports',
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    minQty: 50,
    popularQty: 500,
    startingPrice: 85,
    turnaroundDays: '3 – 5 Days',
    paperOptions: ['115 GSM Interior Art / Maplitho', '150 GSM Matte Text', '300 GSM Cover with Lamination', 'Hardcover Cloth Board'],
    finishOptions: ['Perfect Glue Binding', 'Saddle Stitching (Stapled)', 'Hardcover Case Bound with Ribbon', 'Wire-O Spiral Binding'],
    description: 'Immaculately bound publications, exhibition catalogs, and government/NGO annual reports.',
    features: ['Lay-flat binding options', 'Gold foil spine lettering', 'Flawless photographic reproduction']
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-himalayan-spirits',
    title: 'Himalayan Reserve Spirits • Rigid Gift Packaging',
    category: 'packaging',
    client: 'Himalayan Artisanal Distillery',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1000&q=80',
    specs: {
      paper: '1400 GSM Rigid Board wrapped in 150 GSM Soft-Touch Kraft',
      finishing: 'Sculptured Gold Foil Stamping + Velvet Die-Cut Foam Insert',
      dimensions: '320mm x 120mm x 110mm',
      runSize: '5,000 Luxury Gift Boxes',
      turnaround: '7 Business Days'
    },
    description: 'A bespoke double-door magnetic rigid box engineered for ultra-premium Himalayan single malt whiskey, featuring intricate mountain line art foiled in satin gold.',
    gallery: [
      'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'port-lumina-identity',
    title: 'Lumina Haute Joaillerie • Identity Suite',
    category: 'branding',
    client: 'Lumina Milano',
    image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&w=1000&q=80',
    specs: {
      paper: '450 GSM G.F Smith Colorplan + 300 GSM Cotton Paper',
      finishing: 'Deep Letterpress Deboss + 3D Micro-Embossed Copper Foil',
      dimensions: '85mm x 55mm Cards & C5 Lined Envelopes',
      runSize: '2,500 Full Sets',
      turnaround: '4 Business Days'
    },
    description: 'Tactile corporate stationery suite for an Italian luxury jewelry house. Features deep blind letterpress debossing and hand-gilded copper foil edging.',
    gallery: [
      'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'port-waf-monograph',
    title: 'Kyoto Pavilion Heritage Monograph Book',
    category: 'editorial',
    client: 'Kyoto Cultural Preservation Society',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    specs: {
      paper: '170 GSM Fedrigoni Tatami White + 3mm Bookbinding Board',
      finishing: 'Hardcover Case Binding + Gold Hot Stamping on Linen Spine',
      dimensions: '240mm x 300mm (280 Pages)',
      runSize: '1,200 Collector Editions',
      turnaround: '6 Business Days'
    },
    description: 'An architectural coffee table monograph printed using 5-color offset technology to capture the deep shadows and natural timber textures of Japanese temple architecture.',
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'port-summit-signage',
    title: 'Global Tech Summit 2026 • Mega Signage & Booths',
    category: 'signage',
    client: 'FinTech Asia Congress',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80',
    specs: {
      paper: 'Heavyweight Star Flex (440 GSM) + 10mm Direct UV Printed Acrylic',
      finishing: 'Edge-lit LED 3D Channel Letters + Matte Anti-Glare Banners',
      dimensions: '18m x 5m Main Stage Backdrop + 40 Rollups',
      runSize: 'Complete Venue Package',
      turnaround: '48 Hours Express'
    },
    description: 'Complete environmental branding and directional signage across a 10,000 sq. meter convention hall, fabricated and installed within an urgent 48-hour window.',
    gallery: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'port-organic-tea',
    title: 'Everest Bio-Organic Tea • Kraft Tin Boxes & Foil Bags',
    category: 'packaging',
    client: 'Everest Highlands Tea Estate',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1000&q=80',
    specs: {
      paper: '300 GSM Unbleached Virgin Kraft + Food-grade Aluminum Barrier',
      finishing: 'Matte Varnish + Spot Gloss Embossing + Tear-Notch Zip Lock',
      dimensions: '150mm x 220mm Stand-Up Pouches',
      runSize: '20,000 Pouches',
      turnaround: '5 Business Days'
    },
    description: 'Eco-conscious barrier packaging for export-grade organic loose leaf teas, combining rustic unbleached paper textures with modern barrier freshness preservation.',
    gallery: [
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'port-onboarding-kits',
    title: 'Aether OS • Executive Employee Welcome Hampers',
    category: 'merchandise',
    client: 'Aether Spatial Computing Inc.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    specs: {
      paper: 'Custom Rigid Box + 240 GSM Organic Cotton Polos + Matte Metal Flasks',
      finishing: 'Laser Engraving + High-Density Micro-Embroidery + Custom Tissue Wrap',
      dimensions: '360mm x 280mm x 90mm Gift Kit Box',
      runSize: '800 Custom Kits',
      turnaround: '4 Business Days'
    },
    description: 'End-to-end designed and packed employee onboarding kit containing branded hoodies, engraved vacuum insulated bottles, leather notebooks, and welcome letters.',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const PRINT_MACHINERY = [
  {
    name: 'Heidelberg Speedmaster CD 102',
    origin: 'Heidelberg, Germany',
    speed: '15,000 Sheets / Hour',
    type: '5-Color Offset + Inline Coater',
    purpose: 'High-Volume Commercial, Books & Packaging'
  },
  {
    name: 'HP Indigo 12000 Digital Press',
    origin: 'California, USA / Israel',
    speed: '4,600 B2 Sheets / Hour',
    type: '7-Color ElectroInk Liquid Toner',
    purpose: 'On-Demand Rapid Runs & Variable Data'
  },
  {
    name: 'Roland TrueVIS VG3-640',
    origin: 'Hamamatsu, Japan',
    speed: 'Industrial Outdoor Precision',
    type: 'Eco-Solvent Large Format 64"',
    purpose: 'Flex Banners, Vehicle Wraps & Standees'
  },
  {
    name: 'Kongsberg X24 Digital Finishing Table',
    origin: 'Kongsberg, Norway',
    speed: 'High-Velocity Multi-Tool Cutting',
    type: 'CNC Oscillating Knife & Creasing Wheel',
    purpose: 'Custom Packaging Box Prototyping & Rigid Boards'
  }
];
