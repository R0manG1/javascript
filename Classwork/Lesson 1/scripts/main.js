// {
//     let a = 'Hello, world!';
//     var b = 'Hello, world!';
// }
//
// console.log(b);
//
// const PI = 3.14;
// console.log(PI);

// let age = 25;
// let price = 29.99;
// console.log(typeof age, typeof price, age, price);
//
// let city = 'Kiev';
// let country = `${city} is a capital of Ukraine.`;
// console.log(typeof country, country);
//
// let isOnline = true;
// let isAdmin = false;
// console.log(isOnline, isAdmin);
//
// let phone = null;
// console.log(phone);
//
// let user;
// console.log(user);
// let id = Symbol("id");
// console.log(id);
//
// let user2 = {
//     name: 'Roman',
//     age: 25,
//     city: 'Kiev',
//     country: 'Ukraine',
//     gender: 'male',
// };
// console.log(user2);
//
// let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits);
//
// let car = 'Toyota';
// let model = 'Corolla';
// let total = `${car} ${model}`;
// console.log(total);
// let total2 = car + ' ' + model;
// console.log(total2);
//
// console.log(10 + 33);
// console.log(10 - 33);
// console.log(10 * 33);
// console.log(10 / 33);
// console.log(11 % 4);
//
// let big = BigInt(13142125389534795802538902359082359253);
// console.log(typeof big, big);

//Числовий тип змінних
let a = 2025;
console.log(a);
let b = 25.654;
console.log(b);

console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log(11 % 3);

console.log(0.2 + 0.1);

let big = BigInt(13142125389534795802538902359082359253);
console.log(typeof big, big);

let c = 10;
let d = 20;
console.log(c - d);

//Булевий тип змінних true/false ( > < >= <= == === != !==)
console.log(5 > 6);
console.log(3 < 7);
console.log(3 >= 3);
console.log(3 <= 2);
console.log(5 == '5');
console.log(5 === '5');
console.log('asd' !== 'qwer');
console.log(5 !== '5');

//Приведення, конвертація типів
// int > string
console.log(100 + '100');
console.log('400' + 100 + 200);

//string > int
console.log(+'300400');
console.log(parseInt('300400rty'));
console.log(parseFloat('300400.994'));

//int > boolean
console.log(!!100);
console.log(!!0);

//string > boolean
console.log(!!'100');
console.log(!!'');
console.log(!!'0');

//boolean > int, string
console.log(+true);
console.log(+false);
console.log(false + '');
console.log('roman' + true);
console.log(100 - true);
console.log(100 / false);
