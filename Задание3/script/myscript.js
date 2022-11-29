const but__res = document.querySelector("#but_res");
const but__link = document.querySelector("#but_link");
const but__teach = document.querySelector("#but_teach");
const frame__res = document.querySelector("#frame_res");
const frame__link = document.querySelector("#frame_link");
const frame__teach = document.querySelector("#frame_teach");



but__res.addEventListener("click", function () {
    frame__res.classList.remove("invis");
    frame__link.classList.add("invis");
    frame__teach.classList.add("invis");
    but__res.classList.add("button_1-active");
    but__link.classList.remove("button_1-active");
    but__teach.classList.remove("button_1-active");
});

but__link.addEventListener("click", function () {
    frame__res.classList.add("invis");
    frame__link.classList.remove("invis");
    frame__teach.classList.add("invis");
    but__res.classList.remove("button_1-active");
    but__link.classList.add("button_1-active");
    but__teach.classList.remove("button_1-active");
});

but__teach.addEventListener("click", function () {
    frame__res.classList.add("invis");
    frame__link.classList.add("invis");
    frame__teach.classList.remove("invis");
    but__res.classList.remove("button_1-active");
    but__link.classList.remove("button_1-active");
    but__teach.classList.add("button_1-active");
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}