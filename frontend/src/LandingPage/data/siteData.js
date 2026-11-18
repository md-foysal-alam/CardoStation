// src/LandingPage/data/siteData.js

import { Code2, Cloud, Cpu, Globe, Layers, ShieldCheck } from "lucide-react";

export const PRODUCTS_DATA = [
  {
    id: 'exodrive',
    name: 'ExoDrive VFS',
    tagline: 'High-Performance Enterprise Virtual File System',
    category: 'Enterprise SaaS',
    status: 'Active Live',
    metrics: '10M+ Files/Sec',
    description: 'Ultra-low latency virtual file management & distributed storage platform with zero-knowledge encryption and seamless enterprise cloud synchronization.',
    tech: ['Fastify', 'TypeScript', 'PostgreSQL', 'MinIO', 'Docker'],
    highlights: ['End-to-end Encryption', 'Role-Based Access Control', 'S3 Native API Support', 'Multi-region Redundancy'],
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'univitalon',
    name: 'UniVitalon Health',
    tagline: 'AI-Powered Smart Hospital & Telehealth Ecosystem',
    category: 'Consumer Apps',
    status: 'Enterprise Active',
    metrics: '500K Patients Managed',
    description: 'Comprehensive digital healthcare engine linking electronic health records (EHR), automated doctor dispatching, and predictive AI patient diagnostics.',
    tech: ['React Native', 'Node.js', 'Python AI', 'Redis', 'AWS'],
    highlights: ['Real-time Vitals Monitoring', 'HIPAA Compliant Vault', 'HL7/FHIR Data Protocol', 'Instant Teleconsultation'],
    color: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'anyride',
    name: 'AnyRide Logistics',
    tagline: 'Real-Time Telematics & Fleet Tracking Engine',
    category: 'Cloud Tools',
    status: 'Scale Phase',
    metrics: '25,000 Vehicles Tracked',
    description: 'Next-gen IoT fleet dispatch, automated route optimization, and real-time fuel usage analytics platform for global enterprise logistics.',
    tech: ['Go', 'WebSockets', 'PostGIS', 'Kafka', 'React'],
    highlights: ['Sub-second GPS Tracing', 'AI Route Optimization', 'Automated Driver Scoring', 'Geofencing Alerts'],
    color: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'aicommerce',
    name: 'OmniAI Commerce',
    tagline: 'Hyper-Personalized AI Recommendations for Retail',
    category: 'Enterprise SaaS',
    status: 'Beta v2.4',
    metrics: '+38% Conversion Boost',
    description: 'Autonomous machine learning commerce plugin that predicts customer purchase behavior and dynamically tailors storefront pricing & offers.',
    tech: ['Python', 'PyTorch', 'Next.js', 'GraphQL', 'Kubernetes'],
    highlights: ['Real-time Behavioral Tracking', 'Automated Dynamic Pricing', 'A/B Testing Framework', 'Multi-Storefront Sync'],
    color: 'from-rose-600 to-pink-600'
  }
];

export const SERVICES_DATA = [
  {
    id: 'custom-dev',
    title: 'Custom Enterprise Software',
    icon: Code2,
    badge: 'Core Service',
    description: 'Tailor-made web, desktop, and multi-tenant platforms designed to solve complex business operations with high maintainability.',
    features: ['Microservices Architecture', 'Legacy Code Modernization', 'API Gateway Development', 'High-Throughput Backends'],
    stack: ['React', 'Next.js', 'Node.js', 'Go', 'PostgreSQL']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineering',
    icon: Cloud,
    badge: 'Infrastructure',
    description: 'Automated CI/CD pipelines, Kubernetes orchestration, infrastructure as code, and zero-downtime cloud migration.',
    features: ['Kubernetes Cluster Setup', 'Terraform Provisioning', 'Multi-Cloud Architecture', 'AWS/GCP/Azure Management'],
    stack: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions']
  },
  {
    id: 'ai-ml',
    title: 'AI, ML & Data Engineering',
    icon: Cpu,
    badge: 'Next-Gen',
    description: 'Custom AI model training, predictive analytics pipelines, Natural Language Processing, and LLM integrations.',
    features: ['Generative AI Agents', 'Predictive Maintenance Models', 'Data Warehouse Setup', 'Custom Fine-Tuned Models'],
    stack: ['Python', 'PyTorch', 'LangChain', 'FastAPI', 'Pinecone']
  },
  {
    id: 'mobile-engineering',
    title: 'Cross-Platform Mobile Apps',
    icon: Globe,
    badge: 'Mobile First',
    description: 'Fluid iOS and Android applications built with native performance, offline support, and biometrics integration.',
    features: ['React Native & Flutter', 'Offline First Architecture', 'Push Notification Engines', 'Payment Gateway Integration'],
    stack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: 'ui-ux',
    title: 'Product Design & UI/UX',
    icon: Layers,
    badge: 'Design System',
    description: 'Human-centric UI design, interactive clickable prototypes, design system design, and rigorous usability testing.',
    features: ['User Journey Mapping', 'Design Systems & Tokens', 'Micro-Interactions', 'Interactive Prototypes'],
    stack: ['Figma', 'Framer', 'Tailwind CSS', 'Storybook']
  },
  {
    id: 'security-qa',
    title: 'Cybersecurity & QA Automation',
    icon: ShieldCheck,
    badge: 'Compliance',
    description: 'Penetration testing, automated end-to-end testing, security code audits, and SOC2 / GDPR compliance setup.',
    features: ['Automated Cypress/Playwright Tests', 'OWASP Top 10 Security Audit', 'SOC2 Readiness Check', 'Vulnerability Assessments'],
    stack: ['Playwright', 'Jest', 'OWASP ZAP', 'Snyk', 'K6 Load Testing']
  }
];

export const TECH_STACK_DATA = {
  'Frontend': [
    { name: 'React', level: 'Expert', icon: '⚛️' },
    { name: 'Next.js', level: 'Expert', icon: '▲' },
    { name: 'TypeScript', level: 'Core Standard', icon: 'TS' },
    { name: 'Tailwind CSS', level: 'Master', icon: '🎨' },
    { name: 'Vue.js / Nuxt', level: 'Proficient', icon: '💚' },
    { name: 'Redux / Zustand', level: 'Master', icon: '🐻' }
  ],
  'Backend': [
    { name: 'Node.js / Express', level: 'Expert', icon: '🟢' },
    { name: 'Fastify', level: 'High Performance', icon: '🚀' },
    { name: 'Go (Golang)', level: 'Enterprise', icon: '🦫' },
    { name: 'Python / FastAPI', level: 'AI Integration', icon: '🐍' },
    { name: 'NestJS', level: 'Enterprise Arch', icon: '🦁' },
    { name: 'GraphQL / REST', level: 'Master', icon: '📡' }
  ],
  'Database & Cloud': [
    { name: 'PostgreSQL', level: 'Primary RDBMS', icon: '🐘' },
    { name: 'Redis', level: 'Cache & Queue', icon: '🔴' },
    { name: 'AWS Cloud', level: 'Certified Partner', icon: '☁️' },
    { name: 'Docker & K8s', level: 'Container Core', icon: '🐳' },
    { name: 'MongoDB', level: 'NoSQL Engine', icon: '🍃' },
    { name: 'MinIO / S3', level: 'Object Storage', icon: '📦' }
  ]
};

export const CASE_STUDIES = [
  {
    title: 'Fintech Core Banking Modernization',
    client: 'Southeast Asia Commercial Bank',
    metrics: '+300% Scale Capacity',
    latency: '35ms API Response',
    summary: 'Architected a microservices infrastructure replacing legacy monolithic core system with high security and zero downtime.',
    tags: ['Fintech', 'Microservices', 'Kubernetes', 'Go']
  },
  {
    title: 'Global Supply Chain IoT Dispatch Engine',
    client: 'TransGlobal Logistics Corp',
    metrics: '$2.4M Fuel Cost Saved',
    latency: 'Sub-second Vehicle Sync',
    summary: 'Built real-time telemetry pipeline receiving 50k events/sec to optimize vehicle routing and preventive maintenance.',
    tags: ['IoT', 'Kafka', 'PostGIS', 'React']
  },
  {
    title: 'E-Commerce AI Dynamic Personalization',
    client: 'Apex Retail Network',
    metrics: '+42% Sales Uplift',
    latency: '15ms Prediction Window',
    summary: 'Integrated real-time machine learning recommendation engine serving over 4 million active monthly shoppers.',
    tags: ['AI/ML', 'PyTorch', 'FastAPI', 'Next.js']
  }
];