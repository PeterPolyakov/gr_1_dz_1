// Ч1
// С помощью функции-конструктора, написать создание объекта Калькулятор. 
// Функция конструктор принимает в качестве единственного параметра название калькулятора.

// Ч2
// Объект калькулятор должен уметь выполнять такие действия: сложение, вычитаение, умножение и деление.
// В действия сложение/умножение возможно передать произвольное количество слогаемых/множителей.
// Действия вычитаение/деление принимают только 2 аргумента. Первый параметр вычитаемое/делимое, второй параметр вычитатель/делитель.

// Ч3
// Калькулятор должен хранить историю действий в виде строки в таком формате: Имя калькулятора (Дата Время): действие, результат, (параметры).
// Например после действия сумма в истории должна появится такая запись: "Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"
// Калькулятор должен уметь вывести историю действий в консоль и уметь очищать историю действий.
function get_date(date) {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let h = date.getHours();
    let min = date.getMinutes();
    let res = '(' + d + '.' + m + '.' + y + ' ' + h + ':' + min + ')';
    return res;
}
let dd = new Date()

function Calc(title) {

    this.title = title;

    this.history = [];

    this.data_sub = function () {
        this.num_1 = +prompt('Из числа:');
        this.num_2 = +prompt('Отнимаем:');
    };
    this.sub = function () {
        return this.num_1 - this.num_2;
    }

    this.data_div = function () {
        this.num_1 = +prompt('Число:');
        this.num_2 = +prompt('Делим на:');
    };
    this.div = function () {
        return this.num_1 / this.num_2;
    };

    this.data_add = function () {
        this.num_add = [];
        for (let i = 0; i < 500; i++) {
            let n = +prompt('Слогаемое: ');
            if ((n == '') || (isNaN(n))) {
                break
            } else {
                this.num_add.push(n);
            }
        };
    }
    this.add = function () {
        return this.num_add.reduce((a, b) => a + b);
    };

    this.data_mul = function () {
        this.num_mul = [];
        for (let i = 0; i < 500; i++) {
            let n = +prompt('Множитель: ');
            if ((n == '') || (isNaN(n))) {
                break
            } else {
                this.num_mul.push(n);
            }
        };
    }
    this.mul = function () {
        return this.num_mul.reduce((a, b) => a * b);
    };
}
const calculator = new Calc('Калькулятор');
calculator.data_add();
let sum_add = alert('Результат: ' + calculator.add());

calculator.data_sub();
let sum_sub = alert('Результат: ' + calculator.sub());

calculator.data_mul();
let sum_mul = alert('Результат: ' + calculator.mul());

calculator.data_div();
let sum_div = alert('Результат: ' + calculator.div());



