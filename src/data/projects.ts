import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'pix-sync',
    slug: 'whatsapp-pix-sync',
    category: 'Internship · WhatsApp Payments',
    title: 'Keeping PIX keys in sync across linked phones',
    description:
      'On the WhatsApp Payments team, I helped build the sync layer that keeps PIX payment keys consistent when someone links a second Android device — so the same payment identity shows up everywhere it should.',
    highlights: [
      'Real-time sync across companion devices',
      'Kotlin & Java on Android',
      'XMPP + SyncD under the hood',
      'Payments in production at scale',
    ],
    technologies: ['Kotlin', 'Java', 'XMPP', 'SyncD', 'Android'],
    links: [{ type: 'professional', label: 'Professional experience' }],
    visual: 'pix-sync',
    layout: 'right',
    brands: ['whatsapp', 'meta'],
    caseStudy: {
      overview:
        'During my internship on WhatsApp Payments, I worked on keeping PIX payment keys in sync across linked Android devices — the kind of problem where a small mismatch between phones can break trust in a payment flow.',
      problem:
        'When people link multiple Android devices to WhatsApp, their PIX payment identity needs to stay the same on each one. If devices drift out of sync, users see inconsistent information and the experience falls apart.',
      role:
        'Software Engineering Intern on the WhatsApp Payments team, working with senior engineers on synchronization infrastructure.',
      approach:
        'Built sync logic in Kotlin and Java within WhatsApp\'s companion-device setup, using XMPP messaging and SyncD to propagate state between linked devices.',
      challenges:
        'Handling devices with different connectivity patterns while working inside a large production codebase with thorough design reviews.',
      outcome:
        'Contributed to reliable PIX key synchronization for linked devices in WhatsApp\'s Brazil market.',
    },
  },
  {
    id: 'storystack',
    slug: 'storystack',
    category: 'Full-Stack · Social Platform',
    title: 'StoryStack — collaborative book discovery',
    description:
      'A collaborative social platform that helps readers discover books through activity-driven recommendations and community discussion.',
    highlights: [
      'Recommendation logic',
      'Book discovery',
      'User profiles and following',
      'Nested discussions',
      'Real-time messaging',
      'PostgreSQL-backed architecture',
      'Team collaboration',
    ],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'REST API'],
    links: [
      { type: 'github', label: 'Repository', href: 'https://github.com/Story-Stack/story-stack' },
    ],
    visual: 'storystack',
    layout: 'left',
    caseStudy: {
      overview:
        'StoryStack is a collaborative social platform where readers discover books through activity-driven recommendations, follow other readers, and engage in nested community discussions.',
      problem:
        'Book discovery is often passive — readers rely on generic lists rather than signals from people whose taste they trust.',
      role:
        'Full-stack developer collaborating with a team to design and build the platform\'s core features.',
      approach:
        'Built a React frontend with a Node.js/Express REST API backed by PostgreSQL via Supabase, implementing recommendation paths, user profiles, following, nested discussions, and real-time messaging.',
      challenges:
        'Designing recommendation logic that surfaces relevant books without overwhelming users, and structuring nested discussions that remain navigable as threads grow.',
      outcome:
        'A functional social reading platform with user profiles, activity feeds, recommendation paths, and community discussion — deployed as a collaborative team project.',
    },
  },
  {
    id: 'smart-clerk',
    slug: 'smart-clerking-assistant',
    category: 'Clinical Workflow · Prototype',
    title: 'Smart Clerking Assistant — structured clinical encounters',
    description:
      'A clinician-facing workspace that captures structured symptoms, generates adaptive follow-up questions, surfaces relevant clinical considerations, and helps clinicians draft editable encounter plans.',
    highlights: [
      'Adaptive interfaces',
      'Structured information capture',
      'Explainable recommendations',
      'Safety-conscious product design',
      'Clinician-editable outputs',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS'],
    links: [
      { type: 'github', label: 'Repository', href: 'https://github.com/marksivan/smart-clerk' },
      { type: 'live', label: 'Live demo', href: 'https://marksivan.github.io/smart-clerk/' },
    ],
    visual: 'smart-clerk',
    layout: 'right',
    caseStudy: {
      overview:
        'Smart Clerking Assistant is an administrative, clinician-facing prototype that structures symptom capture and generates adaptive follow-up questions to support encounter planning.',
      problem:
        'Clinical encounters generate large amounts of unstructured information. Clinicians need tools that organize intake without replacing clinical judgment.',
      role:
        'Sole developer — designed and built the prototype interface and adaptive question logic.',
      approach:
        'Built a workspace where clinicians enter structured symptoms, which branch into contextual follow-up questions. Relevant clinical considerations surface alongside an editable encounter plan draft.',
      challenges:
        'Designing an interface that feels helpful without appearing diagnostic. The tool must clearly position itself as a clinician aid, not a patient-facing or decision-replacement system.',
      outcome:
        'A working prototype demonstrating structured information capture, adaptive questioning, and safety-conscious product design — with all outputs remaining clinician-editable.',
    },
  },
  {
    id: 'trivia',
    slug: 'adaptive-trivia',
    category: 'Desktop Application · Data Structures',
    title: 'Adaptive Trivia — difficulty that responds to performance',
    description:
      'Collaboratively developed a desktop trivia game that adjusts question difficulty based on player performance using heap-based data structures.',
    highlights: [
      'Heap-based adaptive difficulty',
      'Data structures in product behavior',
      'Desktop UI engineering',
      'Team collaboration',
      'Java application architecture',
    ],
    technologies: ['Java', 'AWT', 'Swing', 'Min-heaps', 'Max-heaps'],
    links: [
      { type: 'github', label: 'Repository', href: 'https://github.com/marksivan/trivia-application' },
    ],
    visual: 'trivia',
    layout: 'left',
    caseStudy: {
      overview:
        'A desktop trivia game that dynamically adjusts question difficulty based on player performance, using min-heaps and max-heaps to manage question tiers.',
      problem:
        'Static difficulty in trivia games leads to either boredom or frustration. The game needed to respond to how well a player was performing.',
      role:
        'Collaborative developer — contributed to game logic, data structure implementation, and desktop UI.',
      approach:
        'Used heap data structures to organize questions by difficulty tier. Player performance determines which tier the next question is drawn from, creating a responsive gameplay loop.',
      challenges:
        'Translating abstract data structure concepts into tangible gameplay behavior, and building a responsive desktop UI with Java AWT/Swing.',
      outcome:
        'A functional desktop trivia application where question difficulty adapts in real time, demonstrating practical application of heap-based data structures.',
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
