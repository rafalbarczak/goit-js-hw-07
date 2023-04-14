import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const images = galleryItems
  .map(
    (item) => `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`
  )
  .join("");
galleryEl.insertAdjacentHTML("afterbegin", images);

var lightbox = new SimpleLightbox("ul.gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
