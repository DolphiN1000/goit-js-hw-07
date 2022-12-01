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

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captions: true,
  captionsData: "alt",
  captionAttribute: "title",
  captionDelay: 250,
});
