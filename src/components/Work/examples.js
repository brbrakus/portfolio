import images from 'assets/images';
import adomisVideoUrl from 'assets/images/adomis.mp4';
import opntVideoUrl from 'assets/images/opnt.mp4';
import momentumVideoUrl from 'assets/images/momenutm2.mp4';
import reelVideoUrl from 'assets/images/reel-app.mp4';

export default [
  {
    name: 'Reel - vehicle rental manager',
    images: [
      { src: reelVideoUrl, isVideo: true },
      { src: images.reel_back_office, isVideo: false },
      { src: images.reel_landing_page, isVideo: false },
      { src: images.reel_app, isVideo: false },
      { src: images.reel_logo, isVideo: false }
    ],
    description: `Condition report system for vehicle rental businesses. Mobile app automates the report process and web app allows agency to track reports and manage their fleet, users and other business entities.
    <br><br>
    My role was to help with idea and design a visual identity, UX and UI for apps and landing page. I've also implemented landing page.
    <br>`
  },
  {
    name: 'Momentum',
    images: [
      { src: images.momentum1, isVideo: false },
      { src: momentumVideoUrl, isVideo: true },
      { src: images.momentum3, isVideo: false }
    ],
    description:
      'Momentum is a modern booking platform with the goal of growing rental business. As a product designer, I’ve designed the product brand, as well as UI/UX for the product’s CMS and user-facing web application.'
  },
  {
    name: 'UX & UI Design',
    images: [
      { src: images.monthly_budget, isVideo: false },
      { src: images.avax_web, isVideo: false },
      { src: images.enduro_perun, isVideo: false },
      { src: adomisVideoUrl, isVideo: true },
      { src: images.augusta, isVideo: false }
    ],
    description:
      'I provided solution for the modern budgeting application "Monthly Budget". In the need for presentational web sites, I also worked for the clients such as restaurant and accommodation Augusta Insula and Astronomical Society of Omiš and Avax rent a car. <br /><br /> With Coast Riders MTB team I help with idea and realise design for Enduro Perun bike fest website and helped with organisation of the event.<br /> '
  },
  {
    name: 'Branding and digital marketing',
    images: [
      { src: opntVideoUrl, isVideo: true },
      { src: images.gusar, isVideo: false },
      { src: images.refuzo, isVideo: false },
      { src: images.rmc, isVideo: false },
      { src: images.avax_logo, isVideo: false }
    ],
    description:
      'I illustrated visual indentity and helped grow a brand for companies like Avax rent a car, TKD Gusar, Refužo, Old Paths New Trails, Royal Marine Croatia... <br /><br />As personal projects, I create Social Media content for Coast Riders and Enduro Perun.<br />'
  }
];
