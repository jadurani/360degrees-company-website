import { OfferingGalleryProps } from "@components/OfferingGallery/OfferingGallery";

const IMGIX_URL = process.env?.NEXT_PUBLIC_IMGIX_URL || ''

export const OFFERINGS: OfferingGalleryProps[] = [
  {
    slug: 'offering-acoustic',
    photos: [
      {
        src: `${IMGIX_URL}/images/offering-acoustic/acoustic-1.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-acoustic/acoustic-2.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-acoustic/acoustic-3.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-acoustic/acoustic-4.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-acoustic/acoustic-5.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-acoustic/acoustic-6.jpg`,
        blurDataURL: ''
      },
    ]
  },
  {
    slug: 'offering-carpets',
    photos: [
      {
        src: `${IMGIX_URL}/images/offering-carpets/carpets-1.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-carpets/carpets-2.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-carpets/carpets-3.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-carpets/carpets-4.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-carpets/carpets-5.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-carpets/carpets-6.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-carpets/carpets-7.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-carpets/carpets-8.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-carpets/carpets-9.jpg`,
        blurDataURL: ''
      },
    ]
  },
  {
    slug: 'offering-seating',
    photos: [
      {
        src: `${IMGIX_URL}/images/offering-seating/seating-1.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-seating/seating-2.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-seating/seating-3.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-seating/seating-4.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-seating/seating-5.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-seating/seating-6.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-seating/seating-7.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-seating/seating-8.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-seating/seating-9.jpg`,
        blurDataURL: ''
      },
    ],
  },
  {
    slug: 'offering-furniture',
    photos: [
      {
        src: `${IMGIX_URL}/images/offering-furniture/30.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-furniture/366-015.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-furniture/366-028.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-furniture/366-035.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-furniture/366-042.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-furniture/366-05.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-furniture/DHL2.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-furniture/MT-GAEA-Z-F008A-OK-C.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-furniture/PT-H6-09.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-furniture/Picture13.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-furniture/raffles27f12.jpg`,
        blurDataURL: ''
      },
    ]
  },
  {
    slug: 'offering-specialized',
    photos: [
      {
        src: `${IMGIX_URL}/images/offering-specialized/specialized-1.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-specialized/specialized-2.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-specialized/specialized-3.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-specialized/specialized-4.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-specialized/specialized-5.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-specialized/specialized-6.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-specialized/specialized-7.jpg`,
        blurDataURL: ''
      },
      {
        src: `${IMGIX_URL}/images/offering-specialized/specialized-8.jpg`,
        blurDataURL: ''
      },
    ],
  }
]