const events = {
  family: {
    heading: "Family Gathering",
    description:
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
    image: {
      desktopSrc: "./assets/images/events/family-gathering-desktop.jpg",
      tabletSrc: "./assets/images/events/family-gathering-tablet.jpg",
      mobileSrc: "./assets/images/events/family-gathering-mobile.jpg",
      alt: "family eating",
    },
  },
  special: {
    heading: "Special Events",
    description:
      "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.",
    image: {
      desktopSrc: "./assets/images/events/special-events-desktop.jpg",
      tabletSrc: "./assets/images/events/special-events-tablet.jpg",
      mobileSrc: "./assets/images/events/special-events-mobile.jpg",
      alt: "special",
    },
  },
  social: {
    heading: "Social Events",
    description:
      "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.",
    image: {
      desktopSrc: "./assets/images/events/social-events-desktop.jpg",
      tabletSrc: "./assets/images/events/social-events-tablet.jpg",
      mobileSrc: "./assets/images/events/social-events-mobile.jpg",
      alt: "social",
    },
  },
};

export default function getEventInfos(type) {
  switch (type) {
    case "family":
      return events.family;
    case "special":
      return events.special;
    case "social":
      return events.social;
  }
}
