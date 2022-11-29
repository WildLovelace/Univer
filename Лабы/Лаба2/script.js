/*btn1 = document.createElement('BUTTON');
btn2 = document.createElement('BUTTON');

btn1.id = 'btn1';  
btn2.id = 'btn2';   

btn1.textContent = 'Посчитать площадь круга'; 
btn2.textContent = 'Посчитать гипотенузу треугольника';

document.body.appendChild(btn1);
document.body.appendChild(btn2);
*/
        function btn1_onclick() {
            let r = prompt("Введите радиус круга");
            let S = 3.14 * Math.pow(r, 2);
            alert(S);
        }
        function  btn2_onclick() {
            let a = prompt("Ввведите первый катет");
            let b = prompt("Введите второй катет");
            let c = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));
            alert(c);
        }

//btn1.onclick = btn1_onclick;
//btn2.onclick = btn2_onclick;