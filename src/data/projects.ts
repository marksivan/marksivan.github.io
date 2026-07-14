import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'pix-sync',
    slug: 'whatsapp-pix-sync',
    category: 'Internship · WhatsApp Payments',
    title: 'PIX payment sync across Android and WhatsApp Web',
    description:
      'Built synchronization for PIX payment keys across linked Android devices and a React-based Payments Home for WhatsApp Web.',
    highlights: [
      'Kotlin/Java synchronization using XMPP and SyncD',
      'React experience for viewing and managing PIX keys',
      'Architecture investigation and design reviews',
    ],
    featured: true,
    technologies: ['Kotlin', 'Java', 'React', 'XMPP', 'SyncD', 'Android'],
    links: [{ type: 'professional', label: 'Professional experience' }],
    visual: 'pix-sync',
    layout: 'right',
    brands: ['whatsapp', 'meta'],
    caseStudy: {
      overview:
        'During my internship on WhatsApp Payments, I worked across Android companion sync and WhatsApp Web, keeping PIX payment keys consistent when users link additional devices.',
      problem:
        'When people link multiple devices to WhatsApp, their PIX payment identity needs to stay the same on each one. Companion Android devices and WhatsApp Web both need a reliable way to view and manage keys without drifting out of sync.',
      role:
        'Software Engineering Intern on the WhatsApp Payments team, working with senior engineers on synchronization infrastructure and web payments UI.',
      approach:
        'Built sync logic in Kotlin and Java using XMPP messaging and SyncD for companion devices, and shipped the Payments Home for WhatsApp Web in React so users could manage PIX keys from linked devices. Contributed to architecture investigations and design reviews, including a hybrid code-sharing model adopted for implementation.',
      challenges:
        'Coordinating real-time state across platforms with different connectivity patterns while working inside a large production codebase with thorough design reviews.',
      outcome:
        'Contributed to reliable PIX key synchronization and web-based key management for linked devices in WhatsApp\'s Brazil market.',
    },
  },
  {
    id: 'visual-trace',
    slug: 'visual-trace',
    category: 'Developer Tools · Algorithm Visualizer',
    title: 'VisualTrace: step-by-step algorithm visualization',
    description:
      'A multi-language algorithm visualizer with step-by-step execution tracing, variable inspection, interactive data structure views, and automatic pattern detection.',
    highlights: [
      'Runs Python, JavaScript, Java, and C++ in the browser',
      'Scrub through execution and inspect state at each step',
      'Detects common algorithm patterns as you run code',
    ],
    featured: true,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Monaco Editor', 'Pyodide'],
    links: [
      { type: 'github', label: 'Repository', href: 'https://github.com/marksivan/VisualTrace' },
      { type: 'live', label: 'Live demo', href: 'https://marksivan.github.io/VisualTrace/' },
    ],
    visual: 'trivia',
    screenshot: '/images/projects/visual-trace.jpg',
    imageHref: 'https://marksivan.github.io/VisualTrace/',
    layout: 'left',
    caseStudy: {
      overview:
        'VisualTrace is a browser-based algorithm visualizer that lets users write code, run it step by step, and inspect how variables and data structures change over time.',
      problem:
        'Understanding algorithms from static code alone is hard. Learners need to see execution unfold and inspect state at each step.',
      role: 'Sole developer: designed and built the editor, tracer, and visualization UI.',
      approach:
        'Built a Next.js app with Monaco for editing, Pyodide for in-browser Python execution, and custom inspectors for console output, variables, and stack frames.',
      challenges:
        'Coordinating step-by-step tracing with responsive visualizations while keeping the editor and inspector panels usable on one screen.',
      outcome:
        'A deployed visualizer where users can run scripts, step through execution, and explore algorithm behavior interactively.',
    },
  },
  {
    id: 'smart-clerk',
    slug: 'smart-clerking-assistant',
    category: 'Clinical Workflow · Prototype',
    title: 'Smart Clerking Assistant: structured clinical encounters',
    description:
      'Developed a clinician-facing patient assessment platform that generates adaptive symptom questionnaires and structured clinical documentation.',
    highlights: [
      'Adaptive symptom questionnaires',
      'Structured clinical documentation',
      'Safety-conscious product design',
    ],
    featured: true,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    links: [
      { type: 'github', label: 'Repository', href: 'https://github.com/marksivan/smart-clerk' },
      { type: 'live', label: 'Live demo', href: 'https://marksivan.github.io/smart-clerk/' },
    ],
    visual: 'smart-clerk',
    screenshot: '/images/projects/smart-clerk.jpg',
    imageHref: 'https://marksivan.github.io/smart-clerk/',
    layout: 'right',
    caseStudy: {
      overview:
        'Smart Clerking Assistant is an administrative, clinician-facing prototype that structures symptom capture and generates adaptive follow-up questions to support encounter planning.',
      problem:
        'Clinical encounters generate large amounts of unstructured information. Clinicians need tools that organize intake without replacing clinical judgment.',
      role:
        'Sole developer: designed and built the prototype interface and adaptive question logic.',
      approach:
        'Built a workspace where clinicians enter structured symptoms, which branch into contextual follow-up questions. Relevant clinical considerations surface alongside an editable encounter plan draft.',
      challenges:
        'Designing an interface that feels helpful without appearing diagnostic. The tool must clearly position itself as a clinician aid, not a patient-facing or decision-replacement system.',
      outcome:
        'A working prototype demonstrating structured information capture, adaptive questioning, and safety-conscious product design, with all outputs remaining clinician-editable.',
    },
  },
  {
    id: 'trivia',
    slug: 'adaptive-trivia',
    category: 'Desktop Application · Data Structures',
    title: 'Adaptive Trivia: difficulty that responds to performance',
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
      { type: 'live', label: 'Live demo', href: 'https://marksivan.github.io/trivia-application/' },
    ],
    visual: 'trivia',
    screenshot: '/images/projects/trivia.jpg',
    imageHref: 'https://marksivan.github.io/trivia-application/',
    layout: 'left',
    caseStudy: {
      overview:
        'A desktop trivia game that dynamically adjusts question difficulty based on player performance, using min-heaps and max-heaps to manage question tiers.',
      problem:
        'Static difficulty in trivia games leads to either boredom or frustration. The game needed to respond to how well a player was performing.',
      role:
        'Collaborative developer: contributed to game logic, data structure implementation, and desktop UI.',
      approach:
        'Used heap data structures to organize questions by difficulty tier. Player performance determines which tier the next question is drawn from, creating a responsive gameplay loop.',
      challenges:
        'Translating abstract data structure concepts into tangible gameplay behavior, and building a responsive desktop UI with Java AWT/Swing.',
      outcome:
        'A functional desktop trivia application where question difficulty adapts in real time, demonstrating practical application of heap-based data structures.',
    },
  },
  {
    id: 'flixster',
    slug: 'flixster',
    category: 'Full-Stack · Movie Discovery',
    title: 'Flixster: browse and track movies',
    description:
      'A movie discovery web app powered by the TMDB API. Search popular films, sort by rating or release date, save favorites and watched lists, and watch trailers without leaving the page.',
    highlights: [
      'TMDB API integration',
      'Search, sort, and pagination',
      'Favorites and watched lists',
      'Movie detail modals with trailers',
      'Responsive sidebar navigation',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'TMDB API', 'Render'],
    links: [
      { type: 'github', label: 'Repository', href: 'https://github.com/marksivan/flixster' },
      { type: 'live', label: 'Live demo', href: 'https://flixster-starter-ck7v.onrender.com/' },
    ],
    visual: 'flixster',
    screenshot: '/images/projects/flixster.jpg',
    imageHref: 'https://flixster-starter-ck7v.onrender.com/',
    layout: 'right',
    caseStudy: {
      overview:
        'Flixster is a movie discovery web application that lets users browse, search, and explore current films using data from The Movie Database (TMDB) API.',
      problem:
        'Finding what to watch is easier when you can search, compare ratings, and keep track of what you have already seen, without jumping between disconnected pages.',
      role: 'Sole developer: designed and built the frontend, API integration, and list management features.',
      approach:
        'Built a JavaScript web app that fetches movie data from TMDB, renders searchable and sortable results, and stores favorites and watched movies in local state with modal detail views and embedded trailers.',
      challenges:
        'Keeping pagination and sorting responsive while loading poster-heavy results, and making list management feel instant across Home, Favorites, and Watched views.',
      outcome:
        'A deployed movie browsing app with search, sorting, personal lists, detail modals, and trailer playback, live on Render.',
    },
  },
  {
    id: 'storystack',
    slug: 'storystack',
    category: 'Full-Stack · Social Platform',
    title: 'StoryStack: collaborative book discovery',
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
    screenshot: '/images/projects/storystack.jpg',
    imageHref: 'https://github.com/Story-Stack/story-stack',
    layout: 'left',
    caseStudy: {
      overview:
        'StoryStack is a collaborative social platform where readers discover books through activity-driven recommendations, follow other readers, and engage in nested community discussions.',
      problem:
        'Book discovery is often passive. Readers rely on generic lists rather than signals from people whose taste they trust.',
      role:
        'Full-stack developer collaborating with a team to design and build the platform\'s core features.',
      approach:
        'Built a React frontend with a Node.js/Express REST API backed by PostgreSQL via Supabase, implementing recommendation paths, user profiles, following, nested discussions, and real-time messaging.',
      challenges:
        'Designing recommendation logic that surfaces relevant books without overwhelming users, and structuring nested discussions that remain navigable as threads grow.',
      outcome:
        'A functional social reading platform with user profiles, activity feeds, recommendation paths, and community discussion, deployed as a collaborative team project.',
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
