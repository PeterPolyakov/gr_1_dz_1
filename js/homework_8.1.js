// Написать код, который будет выполнять 4 действия на странице index.html:
// 1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
// 2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
// 3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
// 4. Удалить все квадраты, и сделать фон страницы черным.
// Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.
const body = document.body;

let divs = [];
for(let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    body.append(div);
    divs.push(div);
}
function set_style_1() {
    divs.forEach (function(div) {
        div.style.cssText = `
        width: 50px;
        height: 50px;
        background: blue;
        margin: 30px;`;
    });
}
setTimeout(set_style_1, 3000);

function set_style_2() {
    divs.forEach (function(div) {
        div.style.cssText = `
        width: 100px;
        height: 100px;
        background: green;
        margin: 30px;`;
    });
}
setTimeout(set_style_2, 6000);

function set_style_3() {
    divs.forEach (function(div, index) {
        if((index + 1) % 3 === 0) {
            div.style.cssText = `
                width: 100px;
                height: 100px;
                background: red;
                margin: 30px;`;
        } else {
            div.style.cssText = `
                width: 100px;
                height: 100px;
                background: yellow;
                margin: 30px;`;
        }
    })
}
setTimeout(set_style_3, 9000);

function set_style_4() {
    divs.forEach (function(div) {
        div.remove();
    });
    body.style.background = 'black';
}
setTimeout(set_style_4, 12000);
