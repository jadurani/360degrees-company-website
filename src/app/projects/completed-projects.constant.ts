import { StoryViewerProps } from "@components/StoryViewer/StoryViewer";

export const getProjectFromSlug = (slug: string) => COMPLETED_PROJECTS.find(project => project.slug === slug)

export let COMPLETED_PROJECTS: StoryViewerProps[] = [
  {
    name: 'Project Omega',
    location: 'Ortigas, Metro Manila',
    slug: 'project-omega',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-omega/omega-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-omega/omega-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-omega/omega-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-omega/omega-4.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-omega/omega-5.png',
      },
    ],
  },
  {
    name: 'Project Atlantis',
    location: 'Batangas city, Batangas',
    slug: 'project-atlantis',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-atlantis/atlantis-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-atlantis/atlantis-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-atlantis/atlantis-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-atlantis/atlantis-4.png',
      },
    ],
  },
  {
    name: 'Project Lumina',
    location: 'Imus, Cavite',
    slug: 'project-lumina',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-lumina/lumina-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-lumina/lumina-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-lumina/lumina-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-lumina/lumina-4.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-lumina/lumina-5.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-lumina/lumina-6.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-lumina/lumina-7.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-lumina/lumina-8.jpg',
      },
    ],
  },
  {
    name: 'Project SNI',
    location: 'Clark, Pampanga',
    slug: 'project-sni',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-sni/sni-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-sni/sni-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-sni/sni-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-sni/sni-4.png',
      },
    ],
  },
  {
    name: 'Project DHL',
    location: 'Quezon City, Metro Manila',
    slug: 'project-dhl',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-dhl/dhl-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-dhl/dhl-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-dhl/dhl-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-dhl/dhl-4.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-dhl/dhl-5.png',
      },
    ],
  },
  {
    name: 'Project Supima',
    location: 'Meycauayan, Bulacan',
    slug: 'project-supima',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-4.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-5.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-6.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-7.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-8.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-9.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-10.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-11.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-12.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-13.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-14.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-15.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-16.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-17.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-18.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-19.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-20.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-supima/supima-21.jpg',
      },
    ],
  },
  {
    name: 'Project Enshored',
    location: 'Ortigas, Metro Manila',
    slug: 'project-enshored',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-4.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-5.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-6.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-7.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-8.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-9.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-10.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-11.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-12.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-13.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-14.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-enshored/enshored-15.jpg',
      },
    ],
  },
  {
    name: 'Project Clark',
    location: 'Clark, Pampanga',
    slug: 'project-clark',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-4.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-5.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-6.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-7.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-8.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-9.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-10.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-11.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-12.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-13.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-14.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-15.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-16.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-clark/clark-17.jpg',
      },
    ],
  },
  {
    name: 'Project URC',
    location: 'Quezon City, Metro Manila',
    slug: 'project-urc',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-urc/urc-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-urc/urc-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-urc/urc-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-urc/urc-4.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-urc/urc-5.png',
      },
    ],
  },
  {
    name: 'Project Anonas',
    location: 'Anonas, Quezon City',
    slug: 'project-anonas',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-anonas/anonas-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-anonas/anonas-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-anonas/anonas-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-anonas/anonas-4.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-anonas/anonas-5.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-anonas/anonas-6.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-anonas/anonas-7.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-anonas/anonas-8.jpg',
      },
    ],
  },
  {
    name: 'Project Play',
    location: 'Tagbilaran, Bohol',
    slug: 'project-play',
    photos: [
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-1.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-2.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-3.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-4.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-5.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-6.png',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-7.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-8.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-9.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-10.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-11.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-12.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-13.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-14.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-15.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-16.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-17.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-18.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-19.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-20.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-21.jpg',
      },
      {
        src: 'https://360degreessystemscorporation-25102023.imgix.net/images/project-play/play-22.jpg',
      },
    ],
  },
]