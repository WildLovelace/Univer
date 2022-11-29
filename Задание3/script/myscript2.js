const courses = document.querySelector("#courses");
const count = document.querySelector("#count");
const type_eye = document.querySelector("#type_eye");
const type_zoom = document.querySelector("#type_zoom");
const price_1 = document.querySelector("#price_1");
const price_button = document.querySelector("#price_button");

let isEye = 0;
let isZoom = 0;
type_eye.addEventListener("click", function () {
    isEye = 1;
    isZoom = 0;
});
type_zoom.addEventListener("click", function () {
    isEye = 0;
    isZoom = 1;
});

price_button.addEventListener("click", function () {
    if (!(isEye || isZoom)) {
        alert("Выберите формат занятий");
        return;
    }
    let priceForLesson = (courses.value == "corse_html") ? 500 : ((courses.value == "corse_js") ? 700 : 900);
    if (isEye) priceForLesson += 100;
    let lessonsOnWeek = (count.value == "count_1") ? 1 : ((count.value == "count_2") ? 2 : 3);
    let monthPrice = priceForLesson * lessonsOnWeek * 4;
    price_1.classList.remove("invis");
    price_1.textContent = "Цена обучения в месяц: " + monthPrice;
});