import { defineCollection, z } from 'astro:content';

const team = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string(),
    bio: z.string(),
    tags: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    subtitle: z.string(),
    order: z.number().default(0),
  }),
});

const services = defineCollection({
  type: 'data',
  schema: z.object({
    number: z.string(),
    title: z.string(),
    description: z.string(),
    tagline: z.string(),
    items: z.array(z.string()),
    icon: z.enum([
      'land-survey',
      'construction',
      'urban-planning',
      'interior-design',
      'landscaping',
      'real-estate',
    ]),
    order: z.number().default(0),
  }),
});

const faqs = defineCollection({
  type: 'data',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Survey', 'Construction', 'GIS', 'Planning', 'Interior', 'Landscape']),
    location: z.string(),
    lat: z.number(),
    lng: z.number(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    accent: z.enum(['#2E6417', '#0025CC', '#7FBF4D']).default('#2E6417'),
    glow: z.number().min(0).max(1).default(0.55),
    showCoords: z.boolean().default(true),
    cardHoverStyle: z.enum(['Glow', 'Border trace', 'Stroke draw', 'Spotlight']).default('Glow'),
    mapStyle: z.enum(['Streets', 'Minimal', 'Terrain']).default('Streets'),
    cardCover: z.enum(['Gradient', 'Contour', 'Mono']).default('Gradient'),
    email: z.string(),
    phone: z.string(),
    whatsapp: z.string(),
    address: z.string(),
    heroEyebrow: z.string(),
    heroHeadlinePlain: z.string(),
    heroHeadlineGradient: z.string(),
    heroLead: z.string(),
    stats: z.array(z.object({ value: z.number(), suffix: z.string(), label: z.string() })),
    rtkAccuracy: z.string(),
    rtkUnit: z.string(),
    rtkLabel: z.string(),
    missionText: z.string(),
    visionText: z.string(),
    values: z.array(z.object({ title: z.string(), description: z.string() })),
    techStack: z.array(z.string()),
    processSteps: z.array(z.object({ step: z.string(), title: z.string(), description: z.string() })),
    journey: z.array(z.object({ label: z.string(), title: z.string(), description: z.string() })),
    aboutStory1: z.string(),
    aboutStory2: z.string(),
    ctaBadge: z.string(),
    ctaHeadlinePlain: z.string(),
    ctaHeadlineGradient: z.string(),
    ctaSubcopy: z.string(),
    footerBlurb: z.string(),
  }),
});

export const collections = { team, testimonials, services, faqs, projects, settings };
