//Створіть функцію для обчислення площі прямокутника.
// Функція має приймати два параметри: довжини сторін прямокутника, а повертати - значення площі.
// Якщо передано лише один параметр - функція має обчислювати площу квадрата.
// function calculateArea(a, b) {
//     if (b === undefined) {
//         return a * a;
//     }
//     return a * b;
// }
// console.log(calculateArea(5, 6));


//Створіть функцію для підрахунку вартості товару з урахуванням знижки.
// Функція має приймати 2 параметри, а саме: вартість товару без знижки (number) та відсоток знижки (number).
// Функція має повертати вартість товару зі знижкою. Якщо відсоток знижки в функцію не передано - має використовуватись стандартне значення в 10%.
// function calculateDiscountPrice(price, discount = 10) {
//     return price - (price / 100 * discount);
// }
//
// console.log(calculateDiscountPrice(100));


//Створіть функцію для визначення, чи є число додатним (більше 0).
// Функція має приймати як параметр число, і повертати true(bool), якщо число додатне, або false(bool) - якщо від'ємне, або 0.
// function isPositiveOrNegative(x){
//     return x > 0 || false;
// }
//
// console.log(isPositiveOrNegative(-5));


//Створіть функцію для визначення, чи є число парним.
// Функція має приймати як вхідний параметр число, і повертати true(bool), якщо число парне, або false(bool) - якщо непарне.
// function isOddOrEven(x) {
//     return !(x % 2);
// }
//
// console.log(isOddOrEven(8));
// let b = !(8%2);
// console.log(typeof b);

//Створіть функцію, що буде розраховувати вартість поїздки на таксі.
// Функція має приймати як вхідний параметр відстань в кілометрах (number), а повертати вартість поїздки в гривнях (number).
// Вартість поїздки розраховується за такими правилами:
// подача авто: 30 грн;
// перші 10 км: 8 грн/км;
// вартість кожного км поїздки після 10 км: 5 грн/км
// function calculateTaxiFare(kilometers){
//     let kilometrPrice,
//         baseFare = 30,
//         sum = 0;
//     for (let j = 1; j <= 10 && j <= kilometers; j++){
//         kilometrPrice = 8;
//         sum += kilometrPrice;
//     }
//     for (let i = 11; i <= kilometers; i++){
//         kilometrPrice = 5;
//         sum += kilometrPrice;
//     }
//     return sum + baseFare;
// }
//
// console.log(calculateTaxiFare(12));

//Просте рішення з використання математичних функцій
// function getTaxPrice(distance){
//     return 30 + Math.min(10, distance) * 8 + Math.max(0, distance - 10) * 5;
// }
//
// console.log(getTaxPrice(20));

//Створіть функцію для обчислення індексу маси тіла людини (BMI).
// Функція має приймати два параметри: масу тіла в кілограмах (float) та зріст в метрах (float), а повертати індекс маси тіла (float).
// Щоб підрахувати індекс маси тіла, треба масу тіла в кілограмах поділити на квадрат зросту в метрах.
// function calculateBMI(bodyWeight, bodyHeight){
//     return +(bodyWeight / (bodyHeight ** 2)).toFixed(5);
// }
//
// console.log(calculateBMI(70.8, 178.0));

//Створіть функцію, яка з набору вхідних даних буде генерувати певний текст за шаблоном.
// Функція має приймати два параметри: назву міста (string) та кількість населення (integer), а повертати рядок "Населення міста ... становить ... осіб."
// Замість "..." функція має підставити назву міста і кількість населення.
// function createMessage(cityName, population) {
//     return console.log(`Населення міста ${cityName} становить ${population} осіб.`);
// }
//
// console.log(createMessage('Одеса', 3000000));

//Створіть функцію, яка з набору вхідних даних буде генерувати певний текст за шаблоном.
// Функція має приймати два, або три параметри: ім'я (string), місто (string) та (опціонально) адресу (string),
// а повертати (залежно від того чи передано третій параметр) рядок "... проживає в місті ... .", або "... проживає в місті ... за адресою: ... ."
// Замість "..." функція має підставити ім'я, місто та адресу.
// function createMessage (name, city, address){
//     return (address === undefined) ? console.log(`${name} проживає в місті ${city}.`) : console.log(`${name} проживає в місті ${city} за адресою ${address}.`);
// }
// createMessage('Roman', 'Odessa');


//Створіть функцію, яка повертає кількість переданих в неї параметрів.
// function returnParametrsCount( num1, num2, num3, num4, num5){
//     return returnParametrsCount.length;
// }
//
// console.log(returnParametrsCount(2, 4, 5));

// Створіть функцію, яка приймає число як параметр, а повертає рядок. Функція має повертати різний рядок за такими правилами:
// якщо число менше, або дорівнює 0, функція має повертати рядок "" (порожній рядок);
// якщо число більше 0, але менше 10, функція має повертати рядок "одиниці";
// якщо число від 10 до 100, функція має повертати рядок "десятки";
// якщо число від 100 до 1000, функція має повертати рядок "сотні";
// якщо число 1000 і більше, функція має повертати рядок "дуже багато";
// якщо параметр у функцію не передано, або передано не число, функція має повертати рядок "" (порожній рядок)
// function getMessageFromNumber(n){
//     switch (n){
//         case n <= 0:
//             console.log('Порожній рядок');
//             break;
//         case n > 0 && n < 10:
//             console.log('Одиниці');
//             break;
//         case n >= 10 && n < 100:
//             console.log('Десятки');
//             break;
//         case n >= 100 && n < 1000:
//             console.log('Сотні');
//             break;
//         case n >= 1000:
//             console.log('Дуже багато');
//             break;
//         case n === undefined || n !== Number:
//             console.log('Порожній рядок');
//             break;
//     }
// }
// getMessageFromNumber(10);
//
// Створіть функцію, яка буде приймати один параметр і якщо цей параметр число - буде друкувати його в консоль (за допомогою console.log()).
// Якщо переданий параметр це не число - нічого не робити.
// let nothing = function (number) {
//     if (typeof number === 'number') {
//         console.log(number);
//     } else {
//         console.log('Нічого не робити!');
//     }
// }
// nothing(10);
//
// Перетворіть анонімну функцію (anonymous function) в стрілкову функцію (arrow function):
// let myFunc = (a = [0,1,2]) => a.length;
// console.log(myFunc());
//
// Перетворіть анонімну функцію (anonymous function) в стрілкову функцію (arrow function):
// let myFunc = d => d * 2;
// console.log(myFunc(5));
//
// Перетворіть анонімну функцію (anonymous function) в стрілкову функцію (arrow function):
// let myFunc = () => alert('Hello!!!');
// myFunc();
//
// Перетворіть анонімну функцію (anonymous function) в стрілкову функцію (arrow function):
// let myFunc = (name) => alert(`Hello, ${name} !!!`);
// myFunc('Roman');
//
//
// Перетворіть анонімну функцію (anonymous function) в стрілкову функцію (arrow function):
// let myFunc = function(){
//     console.log ('Max safe number allowed in JS:' + Number.MAX_SAFE_INTEGER.toLocaleString());
//     console.log ('Min safe number allowed in JS:' + Number.MIN_SAFE_INTEGER.toLocaleString());
// };
//
// myFunc();
//
// let myFunc = () => {
//     console.log ('Max safe number allowed in JS:' + Number.MAX_SAFE_INTEGER);
//     console.log ('Min safe number allowed in JS:' + Number.MIN_SAFE_INTEGER);
// };
//
// myFunc();
//
// Створіть функцію, яка отримує на вхід номер місяця (ціле число від 1 до 12) і повертає назву пори року ("Winter", "Spring", "Summer", "Autumn").
// Якщо передано неправильний номер місяця - функція має повертати рядок "Error".
// let getSeasonByMonth = function (monthNumber) {
//     if (monthNumber >= 1 && monthNumber <= 3) {
//         console.log('Season Winter!');
//     } else if (monthNumber >= 4 && monthNumber <= 6) {
//         console.log('Season Spring!');
//     } else if (monthNumber >= 7 && monthNumber <= 9){
//         console.log('Season Summer!');
//     } else if (monthNumber >= 10 && monthNumber <= 12){
//         console.log('Season Autumn!');
//     } else {
//         console.log('Error!');
//     }
// }
//
// getSeasonByMonth(10);
//
//
// Створіть функцію, яка отримує на вхід рядок (string) з назвою дня тижня англійською, або українською мовою, а повертає номер дня в тижні (число від 1 до 7).
// Якщо передано неправильну назву дня - функція має повертати 0.
// const getDayName = function (dayName) {
//     switch (dayName) {
//         case 'Monday':
//             return 1;
//         case 'Tuesday':
//             return 2;
//         case 'Wednesday':
//             return 3;
//         case 'Thursday':
//             return 4;
//         case 'Friday':
//             return 5;
//         case 'Saturday':
//             return 6;
//         case 'Sunday':
//             return 7;
//         default:
//             return 0;
//     }
// }
// console.log(getDayName('Saturday'));
//
// Створіть функцію для обчислення віку людини. Функція має приймати на вхід рік народження (integer), а повертати вік (integer).
// let getAgeByBirthday = function (birthdayYear) {
//     return new Date().getFullYear() - birthdayYear;
// }
//
// console.log(getAgeByBirthday(1990));
//
//
// function ask(question, yes, no){
//     if (confirm(question)) yes()
//     else no();
// }
//
// function showOk(){
//     alert('You clicked OK!');
// }
// function showCancel(){
//     alert('You clicked Cancel!');
// }
//
// ask('Do you love anime?', showOk, showCancel);
//
//
// let ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask(
//     'Do you love anime?',
//     () => alert('You clicked OK!'),
//     () => alert('You clicked Cancel!')
// );
