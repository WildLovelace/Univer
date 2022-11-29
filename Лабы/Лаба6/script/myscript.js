const line = document.querySelector(".linia");
const linewidth = document.querySelector("#linewidth");
const linemargin = document.querySelector("#linemargin");
const lineweight = document.querySelector("#lineweight");


linewidth.addEventListener("blur", function () {
    line.style.width = linewidth.value + "px";
});

linemargin.addEventListener("blur", function () {
    line.style.marginTop = linemargin.value + "px";
});

lineweight.addEventListener("blur", function () {
    line.style.height = lineweight.value + "px";
});


const Name = document.querySelector("#Name");
const Age = document.querySelector("#Age");
const Male = document.querySelector("#Male");
const Female = document.querySelector("#Female");
const btn = document.querySelector(".btn");

let isMale = false;
let isFemale = false;

Male.addEventListener("click", function () {
    isMale = true;
    isFemale = false;
});

Female.addEventListener("click", function () {
    isMale = false;
    isFemale = true;
});

btn.addEventListener("click", function () {
    if (!(isMale || isFemale))
        alert("Немогу определить пол");
    else {
        let pol = isMale ? "Мужчина" : "Женщина";
        alert("Ваше имя - " + Name.value + "\nВаш возраст - " + Age.value + "\nВаш пол - " + pol);
    }
});
