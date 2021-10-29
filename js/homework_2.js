alert('Задача № 1')

let N = prompt('Сколько километров проехала машина?')
let D = prompt('Какой диаметр колёс у машины?')
let numberOfWheels = prompt('Сколько колес у машины?')

if (isNaN(parseInt(N))) console.log('Введите пожалуйста цифровое значение километров')
if (isNaN(parseInt(D))) console.log('Введите пожалуйста цифровое значение диаметра колес')
if (isNaN(parseInt(numberOfWheels))) console.log('Введите пожалуйста цифровое значение количества колес')


N = N * 39370.1
let oneWheel = Math.round (N / (D * 3.14))
let allWheels = Math.round(oneWheel * numberOfWheels)

oneWheel = alert('Одно колесо делает ' + oneWheel + ' оборотов.')
allWheels = alert('Все колеса делают ' + allWheels + ' оборотов.')


alert('Задача № 2')

let days = prompt('Введите числовое значение: ')
let lastNumer = days % 10
let exceptions = Math.floor((days / 10) % 10)

if (exceptions == 1) {
    alert(days + ' дней')
} else if (lastNumer == 1) {
    alert(days + ' день')
} else if ((lastNumer == 2) || (lastNumer == 3) || (lastNumer == 4)) {
    alert(days + ' дня')
} else if ((lastNumer) || (lastNumer === 0)) {
    alert(days + ' дней')
}

if (isNaN(parseInt(days))) console.log('Введите пожалуйста цифровое значение')






