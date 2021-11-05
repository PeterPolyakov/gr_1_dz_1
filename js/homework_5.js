// Напишите функцию get_order(string), которая отсортирует все слова в заданном предложении string в алфавитном порядке. 
// Например: get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"
function get_order(string) {
    return string.split(' ').sort().join(' ');
}
console.log(get_order('ноты акустика гитара барабан'))

// Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.
function get_random(arr) {
    return Math.round(100 * Math.random());
}
console.log(get_random());

// Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.
function get_max(arr) {
    return Math.max(...arr)
}
console.log(get_max([1, 3, 4, 2, 5, 4]));

// Есть объект points с оценками. Напишите код, который выведет сумму всех оценок. 
// Найти имена тех, кто получает минимальную и максимальную оценку.
let points = {
    "Вася": 200,
    "Петя": 300,
    "Даша": 250,
    "Андрей": 150,
    "Сергей": 450,
};

let sum = 0;
let min = Infinity;
let max = -Infinity;
let maxPointName;
let minPointName;

for (let key in points) {
    let value = points[key];

    sum += value;

    if (max < value) {
        max = value;
        maxPointName = key;
    }
    if (min > value) {
        min = value;
        minPointName = key;
    }
}
console.log(sum);

console.log({
    max,
    maxPointName,
});
console.log({
    min,
    minPointName,
});

