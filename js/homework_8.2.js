// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
// При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
// При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.
const body = document.body;

let div_1 = document.createElement('div');
body.append(div_1);

let div_2 = document.createElement('div');
body.append(div_2);

div_1.style.cssText = `
    width: 600px;
    height: 300px;
    background: green;
    margin: 30px;`;

div_2.style.cssText = `
    width: 500px;
    height: 250px;
    background: blue;
    margin: 30px;`;

div_1.onmouseover = function () {
    console.log(
        this.offsetWidth,
        this.offsetHeight
    );
}

div_2.onmouseover = function () {
    console.log(
        this.offsetWidth,
        this.offsetHeight
    );
}

div_1.onclick = function () {
    alert('Зеленый');
}

div_2.onclick = function () {
    alert('Синий');
}


