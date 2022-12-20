import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryWrapper = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  const imageLink = document.createElement("a");
  imageLink.classList.add("gallery__item");
  imageLink.setAttribute("href", galleryItems[i].original);

  const imgTag = document.createElement("img");
  imgTag.classList.add("gallery__image");
  imgTag.setAttribute("src", galleryItems[i].preview);
  imgTag.setAttribute("alt", galleryItems[i].description);

  imageLink.append(imgTag);

  galleryWrapper.append(imageLink);
}

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
