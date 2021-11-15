// Написать код, который будет выполнять 5 действия на странице index.html:
// 1. Создать 1000 квадратов голубого цвета размером 70*70 пикселей, и распологает их горизонтально.
// 2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
// 3. Вывести на каждом квадрате его порядковый номер.
// 4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки.
// 5. Удалить все красные квадраты.
// Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.
// сделать с помощью jQuery
$(document).ready(function () {

    $('body').css({ 'display': 'flex', 'width': 'fit-content' });

    let divs = [];

    for (let i = 0; i <= 399; i++) {
        let div = $('<div>');
        divs.push(div);
        $('body').append(divs[i]);
    }

    function set_style_1() {
        $.each(divs, function (div) {
            $('div').css({
                'width': '70px',
                'height': '70px',
                'margin': '10px',
                'background': 'deepskyblue',
            });
        });
    }
    setTimeout(set_style_1, 2000);

    function set_style_2() {
        $.each(divs, function (div) {
            $('div').css({
                'width': '100px',
                'height': '100px',
                'background': 'violet',
            });
        });
    }
    setTimeout(set_style_2, 4000);

    function set_style_3() {
        for (let i = 0; i < divs.length; i++) {
            $(divs[i]).text([i + 1]);
            divs[i].css({
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'font-size': '30px',
                'color': 'white'
            });
        }
    }
    setTimeout(set_style_3, 8000);

    function set_style_4() {
        for (let i = 0; i <= divs.length; i++) {
            if ((i + 1) % 3 === 0) {
                divs[i].css({
                    'background': 'red'
                });
            }
            if ((i + 1) % 15 === 0) {
                divs[i].css({
                    'border-left': '50px solid white',
                    'border-right': '50px solid white',
                    'border-bottom': '100px solid rgb(195, 176, 145)',
                    'width': '0px',
                    'height': '0px',
                });
            }
        }
    }
    setTimeout(set_style_4, 10000);

    function set_style_5() {
        for (let i = 0; i <= divs.length; i++) {
            if ((i + 1) % 15 === 0) {
                divs[i].css({
                    'border-left': '50px solid white',
                    'border-right': '50px solid white',
                    'border-bottom': '100px solid rgb(195, 176, 145)',
                    'width': '0px',
                    'height': '0px',
                });
            } else if ((i + 1) % 3 === 0) {
                divs[i].remove();
            }
        }
    }
    setTimeout(set_style_5, 12000);
});