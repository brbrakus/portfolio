import images from 'assets/images';
import opntVideoUrl from 'assets/images/opnt.mp4';
import reelVideoUrl from 'assets/images/reel-app.mp4';

const rentistic = {
  name: 'Rentistic - vacation rental and tours business’s software',
  tools: 'Figma, Zeplin, Miro, Airtable',
  role: 'Discovery / Product design',
  time: '6 months - ongoing',
  images: [
    { src: images.rentistic_web_app, isVideo: false },
    { src: images.rentistic_component_library, isVideo: false },
    { src: images.rentistic_responsive_reservations, isVideo: false }
  ],
  description: `
  With Rentistic, users can manage live bookings with the help of occupancy calendars, create price lists and connect their businesses through channel managers for rentals, units and tours.<br><br>
  My role is to come up with concepts that meet product requirements, provide a good UX and can compete with the market. I’m collaborating daily with stakeholders, product managers and team leads to reach the product goals. I’m also responsible for presenting the business logic through the design to the delivery team and providing developers with the design handoff.
  `
};

const sugestio = {
  name: 'Sugestio - guidebook and welcome book',
  tools: 'Figma, Zeplin, Miro, Airtable',
  role: 'Discovery / Product design',
  time: '2 months + ongoing per need',
  images: [
    { src: images.sugestio_mobile_booking, isVideo: false },
    { src: images.sugestio_mobile_app, isVideo: false },
    { src: images.sugestio_web_app, isVideo: false }
  ],
  description: `Sugestio is a free tourist guidebook that enables accommodation host to reveal all the local highlights to the guest.
  <br><br>My biggest challenge was to come up with the concepts for the new features that would enable the application to bring in the profit.
  In two months I came up with solutions, defined specification, prototyped and presented the design to the stakeholders. I continued working as needed on the improvements for the mobile and web application, creating a style guide and redesigning components.`
};

const reel = {
  name: 'Reel - vehicle condition manager',
  tools:
    'Sketch, InVision Freehand, InVision Studio, Marvel, Adobe Illustrator',
  role: 'Branding / Research / Product design / Landing page implementation',
  time: '8 months',
  images: [
    { src: reelVideoUrl, isVideo: true },
    { src: images.reel_back_office, isVideo: false },
    { src: images.reel_landing_page, isVideo: false },
    { src: images.reel_app, isVideo: false },
    { src: images.reel_logo, isVideo: false }
  ],
  description: `Condition report system for vehicle rental businesses. The mobile app automates the reporting process and web app allows an agency to track reports and manage their fleet, users and other business entities.
  <br><br>
  Reel application won the 2nd place at the Get in the Ring startup competition in Split, Croatia.
  I helped with the idea and designed a visual identity, UX and UI for web and mobile apps. I've also implemented the landing page.
  <br>`
};

const branding = {
  name: 'Branding and digital marketing',
  images: [
    { src: opntVideoUrl, isVideo: true },
    { src: images.gusar, isVideo: false },
    { src: images.refuzo, isVideo: false },
    { src: images.rmc, isVideo: false },
    { src: images.avax_logo, isVideo: false }
  ],
  description:
    "I illustrated visual identity and helped grow a brand for companies like Avax rent a car, TKD Gusar, Refužo, Old Paths New Trails and Royal Marine Croatia. <br /><br />As a personal project, I'm helping with the organization of the Enduro Perun bike fest which includes creating digital marketing campaigns, designing graphic materials, creating content for social media, event website design and more.<br />"
};

export default [rentistic, sugestio, reel, branding];
