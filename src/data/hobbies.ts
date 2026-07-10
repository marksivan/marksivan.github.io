import type { Hobby } from '@/types'

export const hobbies: Hobby[] = [
  {
    id: 'photography',
    name: 'Photography',
    description:
      'I enjoy capturing moments around campus, in nature, and during travel — exploring light, composition, and the quiet details between destinations.',
    photos: [
      {
        id: 'photo-1',
        src: '/images/photography/placeholder-1.jpg',
        alt: 'Photography placeholder — replace with your own image',
        caption: 'Add your photograph here',
      },
      {
        id: 'photo-2',
        src: '/images/photography/placeholder-2.jpg',
        alt: 'Photography placeholder — replace with your own image',
        caption: 'Add your photograph here',
      },
      {
        id: 'photo-3',
        src: '/images/photography/placeholder-3.jpg',
        alt: 'Photography placeholder — replace with your own image',
        caption: 'Add your photograph here',
      },
      {
        id: 'photo-4',
        src: '/images/photography/placeholder-4.jpg',
        alt: 'Photography placeholder — replace with your own image',
        caption: 'Add your photograph here',
      },
    ],
  },
  {
    id: 'basketball',
    name: 'Basketball',
    description:
      'Playing and following basketball — on the court and as a way to unwind from long coding sessions.',
    photos: [],
  },
]
