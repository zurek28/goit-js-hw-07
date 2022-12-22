import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWrapper = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  const image = document.createElement("div");
  image.classList.add(".gallery__item");

  const imageLink = document.createElement("a");
  imageLink.classList.add("gallery__link");
  imageLink.setAttribute("href", galleryItems[i].original);

  const imgTag = document.createElement("img");
  imgTag.classList.add("gallery__image");
  imgTag.setAttribute("src", galleryItems[i].preview);
  imgTag.setAttribute("data-source", galleryItems[i].original);
  imgTag.setAttribute("alt", galleryItems[i].description);

  image.append(imageLink);
  imageLink.append(imgTag);

  galleryWrapper.append(image);
}

const galleryOnClick = function (event) {
  event.preventDefault();

  const fullImg = event.target.dataset.source;
  const imgAlt = event.target.alt;
  const imgClass = event.target.className;

  if (
    event.target.classList.contains("gallery__link") ||
    event.target.classList.contains("gallery__image")
  ) {
    const instance = basicLightbox.create(
      `
    <div class="modal">
        <img class=${imgClass} src=${fullImg} alt=${imgAlt} />
    </div>`,
      {
        onShow: (instance) => {
          window.addEventListener("keydown", (e) => {
            if (e.keyCode === 27 || e.key === "Escape" || e.code === "Escape") {
              instance.close();
            } else {
              window.removeEventListener;
            }
          });
        },
      }
    );
    instance.show();
  }
};
galleryWrapper.addEventListener("click", galleryOnClick);
