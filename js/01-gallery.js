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

  //  import * as basicLightbox from 'basiclightbox'
  const { src, alt } = event.target;
  let instance = basicLightbox.create(`
    <div class="modal">
    <img src="${src}"
    alt="${alt}"
    width="800" height="600">
    </div>
`);

  instance.show();
  document.addEventListener("keydown", (key) => {
    console.log(key);
    if ((key = "Escape")) {
      instance.close();
      document.removeEventListener("keydown", () => {});
    }
  });
});
