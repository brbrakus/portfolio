import images from 'assets/images';
import adomisVideoUrl from 'assets/images/adomis.mp4';
import opntVideoUrl from 'assets/images/opnt.mp4';
import momentumVideoUrl from 'assets/images/momenutm2.mp4';

export default [
  {
    name: 'Momentum',
    images: [
      { src: images.momentum1, isVideo: false },
      { src: momentumVideoUrl, isVideo: true },
      { src: images.momentum3, isVideo: false }
    ],
    description:
      'At the moment I’m working as a product designer in the Momentum team. Momentum is a modern booking platform with the goal of growing rental business. I’ve designed product brand, as well as UI/UX in the product’s CMS and user facing application.'
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
      'I provided solution for the modern budgeting application "Monthly Budget". In the need for presentational web sites, I also worked for the clients such as restaurant and accommodation Augusta Insula, Hotel Cvita and Astronomical Society of Omiš.'
  },
  {
    name: 'Branding',
    images: [
      { src: opntVideoUrl, isVideo: true },
      { src: images.momentum_logo, isVideo: false },
      { src: images.refuzo, isVideo: false },
      { src: images.rmc, isVideo: false },
      { src: images.avax_logo, isVideo: false }
    ],
    description:
      'I illustrated visual indentity and helped grow a brand for companies like Old Paths New Trails, Royal Marine Croatia, Refužo, Avax rent a car.'
  }
];
