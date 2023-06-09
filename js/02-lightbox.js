
import { galleryItems } from "./gallery-items.js";

const imgEl = (image) => {
  const { original, preview, description } = image;
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const ulEl = document.querySelector(".gallery");
const imageMarkup = galleryItems.map(imgEl).join("");
ulEl.insertAdjacentHTML("beforeend", imageMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
