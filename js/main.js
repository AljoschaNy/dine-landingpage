import getEventInfos from "./utils/events.js";

document.addEventListener("DOMContentLoaded", function () {
  const eventItems = document.querySelectorAll(".event-list__item");
  const eventImage = document.querySelector(".event-image");
  const eventImageTablet = document.querySelector(".event-image-tablet");
  const eventImageMobile = document.querySelector(".event-image-mobile");
  const eventHeading = document.querySelector(".event-info__header");
  const eventdescription = document.querySelector(".event-info__text");

  eventItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      const event = this.getAttribute("data-image-package");
      const infos = getEventInfos(event);

      eventImage.style.opacity = 0;
      eventHeading.style.opacity = 0;
      eventdescription.style.opacity = 0;

      setTimeout(() => {
        eventImage.src = infos.image.desktopSrc;
        eventImageTablet.setAttribute("srcset", infos.image.tabletSrc);
        eventImageMobile.setAttribute("srcset", infos.image.mobileSrc);

        eventImage.alt = infos.image.alt;
        eventHeading.innerText = infos.heading;
        eventdescription.innerText = infos.description;

        eventImage.style.opacity = 1;
        eventHeading.style.opacity = 1;
        eventdescription.style.opacity = 1;
      }, 400);

      eventItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
