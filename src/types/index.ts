export type ProjectCategory = 
  | 'all'
  | 'branding'
  | 'digital'
  | 'spatial'
  | 'editorial'
  | 'motion';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  category: 'branding' | 'digital' | 'spatial' | 'editorial' | 'motion';
  categoryLabel: string;
  heroImage: string;
  gallery: string[];
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics?: { label: string; value: string }[];
  deliverables: string[];
  colorPalette: { name: string; hex: string }[];
  typography: { role: string; family: string; sample: string }[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
    avatar?: string;
  };
  liveUrl?: string;
  featured?: boolean;
}

export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  toolsAndTech: string[];
  startingPrice: string;
  timeline: string;
  iconName: string;
}

export interface StudioMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
  awards?: string;
}

export interface ProjectInquiry {
  id?: string;
  name: string;
  email: string;
  company: string;
  serviceTypes: string[];
  budgetRange: string;
  timeline: string;
  projectDescription: string;
  hearAboutUs?: string;
  createdAt?: string;
  status?: 'received' | 'reviewing' | 'contacted';
}

export interface ProjectMilestone {
  id: string;
  phase: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  date: string;
  details: string;
  deliverables?: string[];
}

export interface ClientPortalProject {
  projectCode: string;
  clientName: string;
  projectName: string;
  category: string;
  status: 'In Progress' | 'Review Phase' | 'Final Polish' | 'Delivered';
  progressPercentage: number;
  startDate: string;
  targetLaunch: string;
  leadDesigner: string;
  nextMilestone: string;
  milestones: ProjectMilestone[];
  assets: { name: string; type: string; size: string; date: string }[];
}
