import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const images = galleryItems
  .map(
    (item) => `<li><div class="gallery__item">
 <a class="gallery__link" href="${item.original}">
   <img
     class="gallery__image"
     src="${item.preview}"
     data-source="${item.original}"
     alt="${item.description}"
   />
 </a>
</div></li>`
  )
  .join("");
galleryEl.insertAdjacentHTML("afterbegin", images);

galleryEl.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedImage = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <div class="modal">
      <img  src="${selectedImage}">
    </div>
`,
    {
      onShow: (instance) => {
        instance.element().querySelector("img").onclick = instance.close;
        document.onkeydown = function (event) {
          event = event || window.event;
          let isEscape = false;
          if ("key" in event) {
            isEscape = event.key === "Escape" || event.key === "Esc";
          } else {
            isEscape = event.keyCode === 27;
          }
          if (isEscape) {
            instance.close();
          }
        };
      },
    }
  );

  instance.show();
}
