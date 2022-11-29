let a = prompt("Введите a");
let b = prompt("Введите b");
let c = prompt("Введите c");

if ((Number(a) + Number(b) > Number(c)) || (Number(a) + Number(c) > Number(b)) || (Number(b) + Number(c) > Number(a))) {
    alert(true);
}
else alert(false); 