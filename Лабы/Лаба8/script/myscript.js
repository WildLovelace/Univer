const reverse_res = document.querySelector(".reverse_res");
const btn_2 = document.querySelector("#btn_2");
const reverse_input = document.querySelector("#reverse_input");
const btn_1 = document.querySelector("#btn_1");
const loterea_res = document.querySelector(".loterea_res");
const img_win = document.querySelector("#img_win");
const img_lose = document.querySelector("#img_lose");


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

btn_1.addEventListener("click", function () {
    let randomInt = getRandomInt(100000, 999999);
    let isWin = (randomInt % 10 + Math.floor(randomInt % 100 / 10) + Math.floor(randomInt % 1000 / 100) == Math.floor(randomInt % 10000 / 1000) + Math.floor(randomInt % 100000 / 10000) + Math.floor(randomInt % 1000000 / 100000)) ? true : false;
    loterea_res.classList.remove("invis");
    loterea_res.textContent = "Выпало число: " + randomInt + ", " + Math.floor(randomInt % 1000000 / 100000) + " + " + Math.floor(randomInt % 100000 / 10000) + " + " + Math.floor(randomInt % 10000 / 1000) + (isWin ? " = " : " != ") + Math.floor(randomInt % 1000 / 100) + " + " + Math.floor(randomInt % 100 / 10) + " + " + randomInt % 10 + ".";
    if (isWin) {
        img_win.classList.remove("invis");
        img_lose.classList.add("invis");
    } else {
        img_win.classList.add("invis");
        img_lose.classList.remove("invis");
    }
});

function reverse(num, r = 0) {
    if (!num) return r;
    r = r * 10 + num % 10;
    return reverse(Math.floor(num / 10), r);
}

btn_2.addEventListener("click", function () {
    let reversedNum = reverse(Number(reverse_input.value));
    console.log(reversedNum);
    reverse_res.classList.remove("invis");
    reverse_res.textContent = String(reversedNum);
});