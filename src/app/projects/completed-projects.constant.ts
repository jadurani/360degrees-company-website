import { StoryViewerProps } from "@components/StoryViewer/StoryViewer";

export const getProjectFromSlug = (slug: string) => COMPLETED_PROJECTS.find(project => project.slug === slug)

export const COMPLETED_PROJECTS: StoryViewerProps[] = [
  {
    name: 'Project Omega',
    location: 'Ortigas, Metro Manila',
    slug: 'project-omega',
    photoUrls: [
      '/images/project-omega/omega-1.png',
      '/images/project-omega/omega-2.png',
      '/images/project-omega/omega-3.png',
      '/images/project-omega/omega-4.png',
      '/images/project-omega/omega-5.png',
    ],
  },
  {
    name: 'Project Atlantis',
    location: 'Batangas city, Batangas',
    slug: 'project-atlantis',
    photoUrls: [
      '/images/project-atlantis/atlantis-1.png',
      '/images/project-atlantis/atlantis-2.png',
      '/images/project-atlantis/atlantis-3.png',
      '/images/project-atlantis/atlantis-4.png',
    ],
  },
  {
    name: 'Project Lumina',
    location: 'Imus, Cavite',
    slug: 'project-lumina',
    photoUrls: [
      '/images/project-lumina/lumina-1.png',
      '/images/project-lumina/lumina-2.png',
      '/images/project-lumina/lumina-3.png',
    ],
  },
  {
    name: 'Project SNI',
    location: 'Clark, Pampanga',
    slug: 'project-sni',
    photoUrls: [
      '/images/project-sni/sni-1.png',
      '/images/project-sni/sni-2.png',
      '/images/project-sni/sni-3.png',
      '/images/project-sni/sni-4.png',
    ],
  },
  {
    name: 'Project DHL',
    location: 'Quezon City, Metro Manila',
    slug: 'project-dhl',
    photoUrls: [
      '/images/project-dhl/dhl-1.png',
      '/images/project-dhl/dhl-2.png',
      '/images/project-dhl/dhl-3.png',
      '/images/project-dhl/dhl-4.png',
      '/images/project-dhl/dhl-5.png',
    ],
  },
  {
    name: 'Project Supima',
    location: 'Meycauayan, Bulacan',
    slug: 'project-supima',
    photoUrls: [
      '/images/project-supima/supima-1.png',
      '/images/project-supima/supima-2.png',
      '/images/project-supima/supima-3.png',
      '/images/project-supima/supima-4.png',
      '/images/project-supima/supima-5.png',
      '/images/project-supima/supima-6.png',
      '/images/project-supima/supima-7.png',
      '/images/project-supima/supima-8.png',
    ],
  },
  {
    name: 'Project Enshored',
    location: 'Ortigas, Metro Manila',
    slug: 'project-enshored',
    photoUrls: [
      '/images/project-enshored/enshored-1.png',
      '/images/project-enshored/enshored-2.png',
      '/images/project-enshored/enshored-3.png',
      '/images/project-enshored/enshored-4.png',
      '/images/project-enshored/enshored-5.png',
    ],
  },
  {
    name: 'Project Clark',
    location: 'Clark, Pampanga',
    slug: 'project-clark',
    photoUrls: [
      '/images/project-clark/clark-1.png',
      '/images/project-clark/clark-2.png',
      '/images/project-clark/clark-3.png',
      '/images/project-clark/clark-4.png',
      '/images/project-clark/clark-5.png',
      '/images/project-clark/clark-6.png',
    ],
  },
  {
    name: 'Project URC',
    location: 'Quezon City, Metro Manila',
    slug: 'project-urc',
    photoUrls: [
      '/images/project-urc/urc-1.png',
      '/images/project-urc/urc-2.png',
      '/images/project-urc/urc-3.png',
      '/images/project-urc/urc-4.png',
      '/images/project-urc/urc-5.png',
    ],
  },
  {
    name: 'Project Anonas',
    location: 'Anonas, Quezon City',
    slug: 'project-anonas',
    photoUrls: [
      '/images/project-anonas/anonas-1.png',
      '/images/project-anonas/anonas-2.png',
      '/images/project-anonas/anonas-3.png',
      '/images/project-anonas/anonas-4.png',
      '/images/project-anonas/anonas-5.png',
      '/images/project-anonas/anonas-6.png',
    ],
  },
  {
    name: 'Project Play',
    location: 'Tagbilaran, Bohol',
    slug: 'project-play',
    photoUrls: [
      '/images/project-play/play-1.png',
      '/images/project-play/play-2.png',
      '/images/project-play/play-3.png',
      '/images/project-play/play-4.png',
      '/images/project-play/play-5.png',
      '/images/project-play/play-6.png',
    ],
  },
]