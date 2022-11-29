const count_words_input = document.querySelector("#count_words_input");
const count_words_result = document.querySelector("#count_words_result");
const count_words_btn = document.querySelector("#count_words_btn");
const change_words_input = document.querySelector("#change_words_input");
const change_words_1 = document.querySelector("#change_words_1");
const change_words_2 = document.querySelector("#change_words_2");
const change_words_result = document.querySelector("#change_words_result");
const change_words_btn = document.querySelector("#change_words_btn");
const minim_input = document.querySelector("#minim_input");
const minim_result = document.querySelector("#minim_result");
const minim_btn = document.querySelector("#minim_btn");

function countWords(text) {
    let textlen = text.split(" ");
    let s = 0;
    for (let i = 0; i < textlen.length; i++) {
        if (textlen[i] != '') s++;
    }
    return s;
}

count_words_btn.addEventListener("click", function () {
    let text = count_words_input.value;
    count_words_result.classList.remove("invis");
    count_words_result.textContent = String(countWords(text));
});


change_words_btn.addEventListener("click", function () {
    let text = change_words_input.value;
    let res = text.replace(change_words_1.value, change_words_2.value);
    change_words_result.classList.remove("invis");
    change_words_result.textContent = res;
});

function deletetext(text) {
    return text.replace(/ +/g, ' ');
}

minim_btn.addEventListener("click", function () {
    let text = minim_input.value;
    minim_result.classList.remove("invis");
    minim_result.textContent = deletetext(text);
});