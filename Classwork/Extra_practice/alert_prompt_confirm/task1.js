// let age = +prompt('Enter your age:');
// if (!(age > 14) || !(age < 90)) {
//     alert('Age is in range (0 - 14) or (90 - 100)');
// } else
// {
//     alert('Age is in range (15 - 89)');
// }


// let age2 = +prompt('Enter your age:');
// if (age2 <= 14 || age2 >= 90) {
//     alert('Age is in range (0 - 14) or (90 - 100)');
// } else
// {
//     alert('Age is in range (15 - 89)');
// }

// let login = prompt('Enter login:', '');
// if (login === 'admin') {
//
//     let password = prompt('Enter password:', '');
//
//     if(password === 'admin') {
//         alert('Welcome!');
//     } else if (password === '' || password === null) {
//         alert('Access denied!');
//     } else {
//         alert('Wrong password!');
//     }
//
// } else if (login === '' || login === null) {
//     alert('Access denied!');
// } else {
//     alert('I don\'t know you.');
// }

// let a = prompt('Enter something:', '');
// let b = 'text';
// // let result = (a !== null && a !== undefined) ? a : b;
// let result = a ?? b;
// console.log(result);


// let userName = prompt('Enter your name:', '');
// console.log(userName ||= 'Anonymous');

// let height = null;
// let width = null;
//
// alert((height ?? 100) * (width ?? 50));

// let num1 = null,
//     num2 = 20,
//     result;
//
// result ??= num1 ?? num2;
// console.log(result);

//1. Логическое «ИЛИ» (||) Условие: напиши выражение, которое вернёт первое «правдивое» значение из переменных.
// let a = '',
//     b = 0,
//     c = 'hello',
//     result;
// result = a || b || c;
// console.log(result);

//Чему будет равно result?
let a = 0,
    b = 'Hi',
    c = null,
    result;
result = (a || b) && (c ?? 'default');
console.log(result);

//Какое значение примет x?
let x = null,
    y = '',
    z = 'Done';
x ??= y || z;
console.log(x);

//Что будет в user?
let user = 'admin',
    isActive = false;
user &&= isActive || 'Guest';
console.log(user);

//Какое значение примет score?
let score = 0,
    bonus = null;
score ||= bonus ?? 10;
console.log(score);

//Чему равно displayName?
let name = '',
    nickname = null,
    displayName;
displayName = (name || nickname) ?? 'Anonymous';
console.log(displayName);

//Какое значение примет a?
let q = undefined,
    w = false,
    e = 'JS';
q ??= w && e || 'Default';
console.log(q);

// let loggedIn = false,
//     role = null,
//     access = 'user';
// access &&= (loggedIn || role) ?? 'guest';
// console.log(access);
//
// for(let i = 0; i < 3;){
//     alert(i++);
// }

// let sum = 0;
// while (true){
//     let value = +prompt('Enter value:', '');
//     if (!value) break;
//     sum += value;
// }
// console.log('Сумма = ' + sum);


// let i = 0;
// while (i < 3){
//     alert(`number: ${i}`);
//     i++;
// }

// let number;
// do {
//     number = +prompt('Enter number: (100 - ...)', '');
// } while (number < 100 && number);
//
// console.log(number);

let n = +prompt('Enter number:', '');
console.log('Prime numbers:');
nextIter:
for (let i = 2; i <= n; i++){
    for (let j = 2; j < i; j++){
        if (i % j === 0) continue nextIter;
    }
    console.log(i);
}
