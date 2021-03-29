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
  Live bookings and occupancy calendars, price lists and seasons, channel managers for rentals, units and tours is just a part of functionalities that Rentistic is growing. My role is come up with ideas that meet product requirements, provide a good UX and can compete on the market. I’m collaborating on daily basis with stakeholders, project and product managers and team lead to reach the product goals. Also, I’m presenting  business logic through design to the rest of the team as well as collaborating with developers on the design handoff.
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
  description: `Sugestio is free tourist guidebook application that provides all the local highlights that accommodation host want to provide.
My biggest challenge was to define concept for new version functionalities with payment options.  In two months I come up with concepts and solutions that aim to reach the product goals, define specification, prototype and present the design to the stakeholders. I continued working as needed on the improvements for the mobile and web application, building a style guide and redesigning components.`
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
  description: `Condition report system for vehicle rental businesses. The mobile app automates the reporting process and web app allows an agency to track reports and manage their fleet, users and other business entities. Reel application won the 2nd place at the Get in the Ring startup competition in Split, Croatia.
    <br><br>
    My role was to help with the idea and design a visual identity, UX and UI for web and mobile apps. I've also implemented a landing page.
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
    "I illustrated visual identity and helped grow a brand for companies like Avax rent a car, TKD Gusar, Refužo, Old Paths New Trails, Royal Marine Croatia... <br /><br />As a personal project, I create social media content for Coast Riders MTB team. I'm helping with the organization of Enduro Perun bike fest which includes digital marketing campaigns, designing graphic materials, creating content for social media, event website design and more.<br />"
};

export default [rentistic, sugestio, reel, branding];
