import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const href = {
  listGall: document.querySelector(".gallery"),
};
let gallArray = galleryItems
  .map(({ preview, original, description } = galleryItem) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          // class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          onclick="return false"
        />
      </a>
      </div>`;
  })
  .join("");

href.listGall.insertAdjacentHTML("beforeend", gallArray);
href.listGall.addEventListener("click", addEvent);
function addEvent(event) {
  console.log("event.target: ", event.target);

  //  import * as basicLightbox from 'basiclightbox'
  const { src, alt } = event.target;
  window.instance = basicLightbox.create(
    `
    <div class="modal">
    <img src="${src}"
    alt="${alt}"
    width="800" height="600">
    </div>
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", keyLoger);
      },
    },
    {
      onClose: (instance) => {
        document.removeEventListener("keydown", keyLoger);
      },
    }
  );

  instance.show();
}
function keyLoger({ key }) {
  if (key === "Escape") {
    instance.close();
  }
}
