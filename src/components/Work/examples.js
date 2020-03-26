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
    description: `Condition report system for vehicle rental businesses. The mobile app automates the reporting process and web app allows an agency to track reports and manage their fleet, users and other business entities. Reel application won the 2nd place at the Get in the Ring startup competition in Split, Croatia. 
    <br><br>
    My role was to help with the idea and design a visual identity, UX and UI for web and mobile apps. I've also implemented a landing page.
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
      'Momentum is a modern booking platform with the goal of growing the rental business. As a product designer, I’ve designed the product visual identity, as well as UI design for the product’s CMS and user-facing web application.'
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
      'I provided a solution for the modern budgeting application "Monthly Budget". In the need for presentational web sites, I also worked for clients such as restaurant and accommodation Augusta Insula, Astronomical Society of Omiš, Avax rent a car, Enduro Perun...<br /> '
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
      "I illustrated visual identity and helped grow a brand for companies like Avax rent a car, TKD Gusar, Refužo, Old Paths New Trails, Royal Marine Croatia... <br /><br />As a personal project, I create social media content for Coast Riders MTB team. I'm helping with the organization of Enduro Perun bike fest which includes digital marketing campaigns, designing graphic materials, creating content for social media, event website design and more.<br />"
  }
];
