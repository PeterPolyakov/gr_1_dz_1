alert('Задача №1')

let first = prompt('Введите число №1');
let second = prompt('Введите число №2');

first = Number(first);
second = Number(second);

const segment = [];

if (!isNaN(first) && !isNaN(second) && second > first) {
    for (let i = first; i <= second; i++) {
        if (i % 6 === 0 && i > 0) {
            segment.push(i);
        }
    }
    let sum = 0;

    segment.forEach(number => sum += number);

    alert(`Количество чисел кратных 6 на отрезке равна ${segment.length}. Сумма чисел кратных 6 на отрезке равна ${sum}`);
} else {
    alert('Введённые данные некорректны');
}

alert('Задача №2')

let min = 0;
let max = 100;

do {
    number = min + (max - min) / 2;
    let answer = confirm(`Ваше число больше числа ${number} ?`);
    if (answer) {
        min = number;
    } else {
        max = number;
    }
} while (max - min > 1);

alert('Ваше число : ' + ~~(max));
