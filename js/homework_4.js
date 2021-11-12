// Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.

function get_min(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
    let result = Math.min(...arr);

    return result;
    }
    return null;
    
}
console.log(get_min([1, 33, -44, 7, 99]));

// Создайте массив с четными числами в диапазоне от 500 до 888 включительно.
const minNumInArr = 500;
const maxNumInArr = 888;
let arr = [];

for (let i = minNumInArr; i <= maxNumInArr; i++) {
    if (i % 2 === 0) {
        arr.push(i)
    }
}
console.log(arr)

// Необходимо написать функцию, которая принимает слово в виде строки, 
// функция будет возвращать слово с буквами в обратном порядке, 
// например в функцию передаем слово “ТЕЛЕФОН”, на выходе имеем слово «НОФЕЛЕТ».

function get_reverse(string) {
    if (typeof(string) !== 'string') {
        return null;
    }

    let result = string.split('').reverse().join('');

    return result;
}
console.log(get_reverse('ТЕЛЕФОН,КОМПЬЮТЕР'));

// Необходимо написать мини-игру «Города». Нужно запрашивать у пользователя ввод города. 
// Проверять если последняя буква предыдущего слова совпадает с первой буквой следующего слова – засчитываем +1 очко. 
// Если не совпадает выдаем сообщение «Игра окончена. Ваши очки: {кол-во очков}».

const maxAttempts = 10;
const cities = [];
let points = 0;

for (let i = 0; i < maxAttempts; i++) {
    const currentCity = prompt('Введите город').trim();

    if (cities.length === 0) {
        cities.push(currentCity);
        continue;
    }
    const lastCity = cities.slice(-1).pop().toLowerCase();

    const currentCityLastLetter = lastCity.slice(-1);

    const currentCityFirstLetter = currentCity.toLowerCase().charAt(0);
    cities.push(currentCity);

    if (currentCityLastLetter === currentCityFirstLetter) {
        points++;
    } else {
        break;
    }
}
alert(`Игра окончена. Ваши очки: ${points}`);




