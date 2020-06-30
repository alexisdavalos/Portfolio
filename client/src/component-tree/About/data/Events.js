//import images
import gritMatters from "../../../assetts/logos/grit-matters-logo.png";
import herbalHealers from "../../../assetts/logos/herbal-healers-logo.png";
import lambdaSchool from "../../../assetts/logos/lambda-school-logo.png";
//events data
export const events = [
  {
    type: "dark",
    date: "June 2017",
    role: "Grit Matters - Research Consultant",
    markerClass: "timeline-marker is-dark is-image is-32x32", //classname of marker
    img: gritMatters,
  },
  {
    type: "color",
    date: "September 2017",
    role: "Freelance Web & Graphic Design",
    markerClass: "timeline-marker is-primary", //classname of marker
    img: "fa fa-plus",
  },
  {
    type: "dark",
    date: "December 2017",
    role: "Herbal Healers - FrontEnd Developer/Graphic Designer",
    markerClass: "timeline-marker is-primary", //classname of marker
    img: herbalHealers,
  },
  {
    type: "color",
    date: "February 2019",
    role: "Ecom Educational - Ecommerce Mentor",
    markerClass: "timeline-marker is-dark is-image is-32x32", //classname of marker
    img: "fa fa-flag",
  },
  {
    type: "dark",
    date: "October 2019",
    role: "Lambda School - Full Stack Curriculum",
    markerClass: "timeline-marker is-dark is-image is-32x32", //classname of marker
    img: lambdaSchool,
  },
];
