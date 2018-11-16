import images from 'assets/images';
import adomisVideoUrl from 'assets/images/adomis.mp4';

export default [
  {
    name: 'Mometum',
    images: [
      { src: images.momentum1, isVideo: false },
      { src: images.momentum2, isVideo: false },
      { src: images.momentum3, isVideo: false }
    ],
    description:
      'I’m product designer in Momentum team. Momentum is a modern reservation booking platform designed to bring happy customers to growing rental business.'
  },
  {
    name: 'UX & UI Design',
    images: [
      { src: images.monthly_budget, isVideo: false },
      { src: images.avax_web, isVideo: false },
      { src: images.cvita, isVideo: false },
      { src: adomisVideoUrl, isVideo: true },
      { src: images.augusta, isVideo: false }
    ],
    description:
      'I designed web pages for  such as restaurant and accommodation Augusta Insula, Hotel Cvita, Astronomical Society of Omiš and Monthly Budget PWA.'
  },
  {
    name: 'Branding',
    link: 'https://adomis.surge.sh/',
    images: [
      { src: images.opnt, isVideo: false },
      { src: images.momentum_logo, isVideo: false },
      { src: images.refuzo, isVideo: false },
      { src: images.rmc, isVideo: false },
      { src: images.avax_logo, isVideo: false }
    ],
    description:
      'I illustrated visual indentity and helped grow a brand for companies like Old Paths New Trails, Royal Marine Croatia, Refužo, Avax rent a car...'
  }
];
