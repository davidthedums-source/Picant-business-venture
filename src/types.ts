export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  features: string[];
  popular?: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  details: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  location?: string;
  verified?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'hardware' | 'upgrades' | 'software';
  categoryLabel: string;
  device: string;
  symptom: string;
  resolution: string;
  turnaround: string;
  badgeColor: string;
  stats: string;
  iconName: string;
}

export interface RepairBookingData {
  fullName: string;
  phoneNumber: string;
  email: string;
  deviceType: string;
  serviceNeeded: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  message: string;
}
