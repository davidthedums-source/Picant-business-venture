import { ServiceItem, WhyChooseItem, ProcessStep, ReviewItem, FaqItem, PortfolioItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Picant Business Venture',
  tagline: '“We Fix It. We Make It Work.”',
  industry: 'Computer Repair & Technology Services',
  phone: '0808 132 2738',
  phoneRaw: '+2348081322738',
  whatsappNumber: '2348081322738',
  email: 'info@picantbusiness.ng',
  address: '5 Elmes Street, off Edmund Crescent, Yaba, Lagos, Nigeria',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=5+Elmes+Street+off+Edmund+Crescent+Yaba+Lagos+Nigeria',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=5%20Elmes%20Street%20off%20Edmund%20Crescent%20Yaba%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed',
  operatingHours: 'Monday – Saturday: 8:30 AM – 6:30 PM (Sunday: Closed / Urgent Enquiries)',
  locationArea: 'Yaba, Lagos, Nigeria'
};

export const KEY_METRICS = [
  { value: '1,400+', label: 'Devices Serviced', sub: 'Across Lagos Mainland' },
  { value: '24–48h', label: 'Average Turnaround', sub: 'For standard repairs' },
  { value: '99.2%', label: 'Diagnostic Accuracy', sub: 'Root-cause isolation' },
  { value: '5.0 ★', label: 'Customer Trust', sub: 'Verified client reviews' },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'computer-repair',
    title: 'Computer Repair',
    shortDesc: 'Diagnose and repair hardware and software problems.',
    detailedDesc: 'Comprehensive diagnostics and repairs for desktop computers, workstations, and custom rigs. We resolve motherboards, power supplies, RAM, storage, and graphics issues efficiently.',
    iconName: 'MonitorCheck',
    features: ['Hardware component testing', 'Power & motherboard fixes', 'Storage & RAM upgrades', 'OS recovery & stability'],
    popular: true
  },
  {
    id: 'laptop-repair',
    title: 'Laptop Repair',
    shortDesc: 'Troubleshooting, maintenance, upgrades and general laptop repairs.',
    detailedDesc: 'Expert repair services for all laptop brands (HP, Dell, Lenovo, Apple MacBook, Asus, Acer, Toshiba). Screen replacement, keyboard fixes, hinge repair, charging port resolution, and thermal servicing.',
    iconName: 'Laptop',
    features: ['Screen & battery replacement', 'Keyboard & trackpad repairs', 'Hinge & casing restoration', 'Thermal paste & fan cleaning'],
    popular: true
  },
  {
    id: 'software-installation',
    title: 'Software Installation',
    shortDesc: 'Operating system installation, software setup and configuration.',
    detailedDesc: 'Clean installations of Windows, macOS, and Linux systems. Installation of essential productivity suites, accounting software, engineering tools, graphic design packages, antivirus solutions, and driver updates.',
    iconName: 'Download',
    features: ['Windows & macOS setup', 'Antivirus & security tools', 'Office & productivity suites', 'Driver & firmware updates']
  },
  {
    id: 'computer-troubleshooting',
    title: 'Computer Troubleshooting',
    shortDesc: 'Identify and resolve performance, startup, connectivity and system issues.',
    detailedDesc: 'Precision diagnostic testing to solve slow boot times, sudden freezing, blue screen of death (BSOD), Wi-Fi drops, peripheral failures, and overheating anomalies.',
    iconName: 'Cpu',
    features: ['Blue Screen (BSOD) fixes', 'Boot loop & startup issues', 'Wi-Fi & LAN connectivity', 'Performance lag eradication']
  },
  {
    id: 'computer-maintenance',
    title: 'Computer Maintenance',
    shortDesc: 'Cleaning, optimization and preventive maintenance.',
    detailedDesc: 'Prevent sudden hardware breakdowns with our thorough physical dust cleaning, fan lubrication, thermal repasting, junk file purging, disk health check, and system optimization routines.',
    iconName: 'Wrench',
    features: ['Internal dust & lint removal', 'Thermal repaste application', 'Disk defrag & speed boost', 'Preventive hardware checks']
  },
  {
    id: 'technology-support',
    title: 'Technology Support',
    shortDesc: 'Professional assistance with computer-related technical problems.',
    detailedDesc: 'End-to-end technical assistance for home users, remote workers, students, and small businesses in Yaba and Lagos Mainland. Data backup, printer setup, email config, and setup guidance.',
    iconName: 'Headphones',
    features: ['Small business IT guidance', 'Data backup & restoration', 'Printer & network sharing', 'Remote & in-person support']
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'professional-service',
    title: 'Professional Service',
    description: 'Trained technical expertise and transparent communication from the moment you drop off your device.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'reliable-support',
    title: 'Reliable Technical Support',
    description: 'Dependable guidance and lasting repair solutions that keep your systems operating smoothly without recurring faults.',
    iconName: 'Activity'
  },
  {
    id: 'fast-diagnosis',
    title: 'Fast Diagnosis',
    description: 'Quick turnaround testing to pinpoint the exact root cause of your hardware or software problem without delay.',
    iconName: 'Zap'
  },
  {
    id: 'customer-focused',
    title: 'Customer-Focused Approach',
    description: 'We listen attentively to your issue, provide straightforward recommendations, and keep you informed throughout.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'quality-workmanship',
    title: 'Quality Workmanship',
    description: 'Precision repairs carried out using proper tools, quality components, and meticulous care for your equipment.',
    iconName: 'Award'
  },
  {
    id: 'convenient-location',
    title: 'Convenient Location in Yaba',
    description: 'Easily accessible at 5 Elmes Street, off Edmund Crescent, Yaba — right in the heart of Lagos Mainland.',
    iconName: 'MapPin'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Contact Us',
    description: 'Tell us what is wrong with your computer.',
    details: 'Call 0808 132 2738, send a WhatsApp message, or fill our quick online repair form with your device details.'
  },
  {
    stepNumber: '02',
    title: 'Diagnosis',
    description: 'Our technician identifies the problem.',
    details: 'We carefully examine hardware and software subsystems to isolate the precise fault and explain the repair scope.'
  },
  {
    stepNumber: '03',
    title: 'Repair',
    description: 'The required repair or service is carried out.',
    details: 'Our skilled technician executes the repair, component replacement, or software installation with high precision.'
  },
  {
    stepNumber: '04',
    title: 'Ready to Go',
    description: 'Your device is checked and returned ready for use.',
    details: 'Comprehensive quality assurance check is completed before handing back your fully restored, tested device.'
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'John Chibueze Nwosu',
    rating: 5,
    comment: 'Good',
    date: 'Verified Client',
    location: 'Yaba, Lagos',
    verified: true
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Where is Picant Business Venture located in Lagos?',
    answer: 'We are conveniently located at 5 Elmes Street, off Edmund Crescent, Yaba, Lagos, Nigeria. You can visit us directly or contact 0808 132 2738 for directions.',
    category: 'Location'
  },
  {
    question: 'How do I book a computer or laptop repair?',
    answer: 'You can easily click the "Book a Repair" button on our website to send an online request, reach us via WhatsApp at +234 808 132 2738, or bring your device directly to our shop in Yaba.',
    category: 'Booking'
  },
  {
    question: 'What types of laptops and computers do you repair?',
    answer: 'We service all major brands of desktop computers, gaming rigs, and laptops including HP, Dell, Lenovo, Apple MacBook, Asus, Acer, Toshiba, and custom-built PCs.',
    category: 'Services'
  },
  {
    question: 'How fast is the diagnostic process?',
    answer: 'We prioritize fast diagnosis to ensure you understand what is wrong with your machine promptly. Most standard issues are diagnosed rapidly once received.',
    category: 'Turnaround'
  },
  {
    question: 'Do you offer software and Operating System installations?',
    answer: 'Yes, we provide clean installations and upgrades for Windows OS, macOS, office applications, antivirus solutions, graphics software, and device drivers.',
    category: 'Software'
  },
  {
    question: 'Can I call or chat on WhatsApp before coming?',
    answer: 'Absolutely! You can call us directly on 0808 132 2738 or click our WhatsApp button to chat with our technician before bringing your device in.',
    category: 'Contact'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'macbook-liquid-damage',
    title: 'Apple MacBook Pro Liquid Damage & Logic Board Recovery',
    category: 'hardware',
    categoryLabel: 'Hardware & Micro-Soldering',
    device: 'Apple MacBook Pro 14" (M-Series)',
    symptom: 'Complete power failure following coffee spill, short-circuit on 5V rail.',
    resolution: 'Ultrasonic board decontamination, capacitor micro-soldering, and backlight fuse restoration.',
    turnaround: '24 Hours',
    badgeColor: 'badge-purple',
    stats: '100% Data Preserved',
    iconName: 'Laptop'
  },
  {
    id: 'nvme-speed-overhaul',
    title: 'High-Speed Gen4 NVMe SSD & 32GB RAM Performance Overhaul',
    category: 'upgrades',
    categoryLabel: 'Speed & Storage Upgrades',
    device: 'Dell XPS 15 Workstation Laptop',
    symptom: 'Extremely sluggish boot times (over 3 mins) and thermal throttling under heavy multi-tasking.',
    resolution: 'Cloned system drive to 1TB NVMe Gen4 SSD, expanded DDR4 RAM to 32GB, thermal repaste with Arctic MX-6.',
    turnaround: 'Same Day (4 Hours)',
    badgeColor: 'badge-cyan',
    stats: '12x Boot Acceleration',
    iconName: 'Zap'
  },
  {
    id: 'custom-rig-thermal-rework',
    title: 'Architectural Rendering Rig GPU Diagnostics & Thermal Rework',
    category: 'hardware',
    categoryLabel: 'Workstation & Hardware',
    device: 'Custom Intel Core i9 / RTX 4080 Tower',
    symptom: 'Random shutdowns during AutoCAD & Blender 3D rendering with CPU temps peaking at 98°C.',
    resolution: 'AIO liquid cooler flush, high-conductivity thermal pads replacement, GPU BIOS flash, and airflow optimization.',
    turnaround: '24 Hours',
    badgeColor: 'badge-rose',
    stats: 'Temp drop from 98°C to 68°C',
    iconName: 'Cpu'
  },
  {
    id: 'enterprise-win11-migration',
    title: 'Corporate Multi-Seat Windows 11 Pro Migration & Security Hardening',
    category: 'software',
    categoryLabel: 'Software & Data Systems',
    device: '8x HP ProDesk Desktop Fleet (Yaba Tech Firm)',
    symptom: 'Outdated, corrupted Windows installations vulnerable to ransomware and recurrent network dropouts.',
    resolution: 'Clean Enterprise Win11 deployment, encrypted local backup protocol, printer server sharing, and malware shield.',
    turnaround: '48 Hours',
    badgeColor: 'badge-emerald',
    stats: 'Zero Workflow Downtime',
    iconName: 'ShieldCheck'
  },
  {
    id: 'hp-envy-hinge-screen',
    title: 'HP Envy 360 Broken Hinge Reconstruction & 4K Display Replacement',
    category: 'hardware',
    categoryLabel: 'Hardware & Chassis Repair',
    device: 'HP Envy x360 Convertible',
    symptom: 'Snapping hinge tore through chassis, cracking the touchscreen digitizer and pinching the display cable.',
    resolution: 'Precision metal hinge bracket anchoring, replacement OEM digitizer panel, and internal cable re-routing.',
    turnaround: '24 Hours',
    badgeColor: 'badge-amber',
    stats: 'Factory Rigidity Restored',
    iconName: 'Wrench'
  },
  {
    id: 'ransomware-recovery-backup',
    title: 'Accidental Partition Loss & Critical Accounting File Recovery',
    category: 'software',
    categoryLabel: 'Data Recovery & Software',
    device: 'Lenovo ThinkPad T490',
    symptom: 'Formatted drive partition during failed DIY OS upgrade containing 4 years of client financial books.',
    resolution: 'Deep bit-level sector scan, MBR reconstruction, full forensic file extraction, and dual-backup drive setup.',
    turnaround: '18 Hours',
    badgeColor: 'badge-blue',
    stats: '99.8% Files Salvaged',
    iconName: 'HardDrive'
  }
];

