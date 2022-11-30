import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const href = {
  listGall: document.querySelector(".gallery"),
};

let gallArray = [];
const gallArr = [];
for (const { preview, original, description } of galleryItems) {
  gallArr.push(`<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        onclick="return false"
      />
    </a>
    </div>`);
}
gallArray = gallArr.join("");
console.log(gallArr);

href.listGall.insertAdjacentHTML("beforeend", gallArray);
href.listGall.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
});

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});
