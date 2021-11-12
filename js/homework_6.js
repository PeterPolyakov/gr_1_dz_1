// Напишите функцию get_count_work_days(date1, date2), 
//которая будет считать количество рабочих дней между двумя заданными датами.
const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_count_work_days(date1, date2) {

    if (date1 instanceof Date && date2 instanceof Date) {
        date1 = new Date(2021, 0);
        date2 = new Date(2021, 0, 7);
        let works_days = 0;

        while (date1 <= date2) {
            let day = date1.getDay();

            if (!((day === 6) || (day === 0)))
                works_days++;
            date1.setDate(date1.getDate() + 1);
        }

        return works_days;
    }

    return null;
}
console.log(get_count_work_days())

// Напишите функцию get_count_days(date) ,
// которая будет считать количество дней до Нового года от date, 
// если оно задано, иначе посчитать количество дней от текущей даты

function get_count_days(date = new Date()) {

    if (date instanceof Date) {
        let date_of_new_year = new Date(2022, 0, 1);

        let result = Math.round((date_of_new_year - date) / MS_DAY);

        return result;
    }

    return null
}
console.log(get_count_days())


// Напишите функцию get_day(date), которая возвращает день недели от задан-ной даты. 
// Например: get_day(’27-11-1988’) должно вернуть «воскресенье»

function get_day(date = new Date()) {

    if (date instanceof Date) {

        let days = ['воскресение', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

        let result = days[date.getDay()];

        return result;
    }
    return null;

}
console.log(get_day())