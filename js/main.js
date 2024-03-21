document.addEventListener("DOMContentLoaded", function () {
  const eventItems = document.querySelectorAll(".event-list__item");
  const eventImage = document.querySelector(".event-image");

  eventItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      eventImage.src = this.getAttribute("data-image");
      eventImage.alt = this.getAttribute("data-image-alt");

      eventItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
