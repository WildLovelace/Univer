const photos = ["img/pug1.jpg", "img/pug3.jpg", "img/pug2.jpg"];
const image = document.querySelectorAll(".img");
const card = document.querySelector(".card_img");

const addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener("click", function () { card.src = photo; });
}

for (let i = 0; i < image.length; i++) {
  addThumbnailClickHandler(image[i], photos[i]);
}
