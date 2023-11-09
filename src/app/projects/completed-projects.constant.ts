import { StoryViewerProps } from "@components/StoryViewer/StoryViewer";

export const getProjectFromSlug = (slug: string) => COMPLETED_PROJECTS.find(project => project.slug === slug)

const IMGIX_URL = process.env?.NEXT_PUBLIC_IMGIX_URL || ''

export const COMPLETED_PROJECTS: StoryViewerProps[] = [
  {
    name: 'Project Omega',
    location: 'Ortigas, Metro Manila',
    slug: 'project-omega',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-omega/omega-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-omega/omega-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-omega/omega-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-omega/omega-4.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-omega/omega-5.jpg`,
      },
    ],
  },
  {
    name: 'Project Atlantis',
    location: 'Batangas city, Batangas',
    slug: 'project-atlantis',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-atlantis/atlantis-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-atlantis/atlantis-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-atlantis/atlantis-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-atlantis/atlantis-4.jpg`,
      },
    ],
  },
  {
    name: 'Project Lumina',
    location: 'Imus, Cavite',
    slug: 'project-lumina',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-lumina/lumina-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-lumina/lumina-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-lumina/lumina-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-lumina/lumina-4.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-lumina/lumina-5.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-lumina/lumina-7.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-lumina/lumina-8.jpg`,
      },
    ],
  },
  {
    name: 'Project SNI',
    location: 'Clark, Pampanga',
    slug: 'project-sni',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-sni/sni-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-sni/sni-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-sni/sni-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-sni/sni-4.jpg`,
      },
    ],
  },
  {
    name: 'Project DHL',
    location: 'Quezon City, Metro Manila',
    slug: 'project-dhl',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-dhl/dhl-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-dhl/dhl-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-dhl/dhl-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-dhl/dhl-4.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-dhl/dhl-5.jpg`,
      },
    ],
  },
  {
    name: 'Project Supima',
    location: 'Meycauayan, Bulacan',
    slug: 'project-supima',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-supima/supima-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-4.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-5.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-6.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-7.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-8.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-9.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-10.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-11.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-12.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-13.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-14.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-15.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-16.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-17.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-18.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-19.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-20.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-supima/supima-21.jpg`,
      },
    ],
  },
  {
    name: 'Project Enshored',
    location: 'Ortigas, Metro Manila',
    slug: 'project-enshored',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-4.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-5.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-6.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-7.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-8.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-9.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-10.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-11.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-12.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-13.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-14.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-enshored/enshored-15.jpg`,
      },
    ],
  },
  {
    name: 'Project Clark',
    location: 'Clark, Pampanga',
    slug: 'project-clark',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-clark/clark-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-4.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-5.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-6.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-7.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-8.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-9.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-10.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-11.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-12.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-13.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-14.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-15.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-16.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-clark/clark-17.jpg`,
      },
    ],
  },
  {
    name: 'Project URC',
    location: 'Quezon City, Metro Manila',
    slug: 'project-urc',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-urc/urc-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-urc/urc-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-urc/urc-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-urc/urc-4.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-urc/urc-5.jpg`,
      },
    ],
  },
  {
    name: 'Project Anonas',
    location: 'Anonas, Quezon City',
    slug: 'project-anonas',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-anonas/anonas-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-anonas/anonas-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-anonas/anonas-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-anonas/anonas-4.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-anonas/anonas-5.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-anonas/anonas-6.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-anonas/anonas-7.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-anonas/anonas-8.jpg`,
      },
    ],
  },
  {
    name: 'Project Play',
    location: 'Tagbilaran, Bohol',
    slug: 'project-play',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-play/play-1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-2.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-3.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-4.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-5.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-6.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-7.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-8.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-9.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-10.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-11.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-12.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-13.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-14.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-15.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-16.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-17.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-18.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-19.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-20.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-21.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-play/play-22.jpg`,
      },
    ],
  },
  {
    name: 'Project Rizal',
    location: 'Antipolo, Rizal',
    slug: 'project-rizal',
    photos: [
      { src: `${IMGIX_URL}/images/project-rizal/22DEB2F2-1D10-4CCD-A556-23EEDAA6A217_1_201_a.jpg`, },
      { src: `${IMGIX_URL}/images/project-rizal/2C01F0DB-7795-4A38-A1E3-F935D6AE0E87_1_201_a.jpg`, },
      { src: `${IMGIX_URL}/images/project-rizal/2D2EC3D4-E625-44E6-A0DF-80FF5CD6828D_1_201_a.jpg`, },
      { src: `${IMGIX_URL}/images/project-rizal/5DE73C14-412B-4288-8C54-538A395F89DA_1_201_a.jpg`, },
      { src: `${IMGIX_URL}/images/project-rizal/76E5A2AA-93DE-4F7E-BC07-130E294EBC73_1_201_a.jpg`, },
      { src: `${IMGIX_URL}/images/project-rizal/9F50EBA5-AA04-4C69-A2C1-678F940D1D16_1_201_a.jpg`, },
      { src: `${IMGIX_URL}/images/project-rizal/IMG_3464.jpg`, },
    ]
  },
  {
    name: 'Project Synergy',
    location: 'Makati, Metro Manila',
    slug: 'project-synergy',
    photos: [
      {
        src: `${IMGIX_URL}/images/project-synergy/Picture1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-synergy/Picture13.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-synergy/Picture14.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/project-synergy/Picture4.jpg`,
      },
    ]
  },
  {
    name: 'Another Project',
    location: 'Makati, Metro Manila',
    slug: 'project-another',
    photos: [
      {
        src: `${IMGIX_URL}/images/another-project/Picture1.jpg`,
      },
      {
        src: `${IMGIX_URL}/images/another-project/Picture13.jpg`,
      },
    ]
  },
]
