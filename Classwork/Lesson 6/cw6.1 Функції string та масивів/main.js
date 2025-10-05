//Базові функції стрінгів

let str = 'Hello World!';
console.log(str);
let s = str.concat(' My name Roman.');
console.log(s);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(str.startsWith('Hel'));
console.log(str.endsWith('ld!'));
console.log(str.substring(0, 5));
console.log(str.substring(5));
console.log(str.indexOf('W'));
console.log(str.lastIndexOf('l'));
console.log(str.indexOf('l', 6));
console.log(str.charAt(6));
console.log(str.replace('l', '!'));
console.log(str.replaceAll('Hello', '!'));
let split = str.split(' ');
console.log(split);
console.log(str.includes('Hello'));

// let name = prompt('Enter your name');
// if (!name.startsWith('R')){
//     alert('Incorrect name!');
//     name = prompt('Enter your name, must start with R');
// }
// console.log(name);
console.log('-------------------------------------');

//Базові функції масивів

let arr = [];
console.log(Array.isArray(arr));
console.log(arr.push('new element - 1'));
arr.push('new element - 2');
arr.push('new element - 3');
arr.push('new element - 4');
arr.push('new element - 5');
console.log(arr);
console.log(arr.pop());
console.log(arr);
arr.unshift('!!!');
arr.unshift('example for arr.shift()');
console.log(arr.shift());
console.log(arr);
let arrJoin = arr.join(' | ');
console.log(arrJoin);
console.log(arr);
let arrNumbers = [11, 22, 33];
let arrConcat = arr.concat(arrNumbers);
console.log(arrConcat);
console.log(arr);
console.log(arrNumbers);

let slice = arrConcat.slice(0, 4);
console.log(slice);
console.log(arrConcat);
let splice = arrConcat.splice(5, 3, 'new element - 5', 'new element - 6', 'new element - 7');
console.log(splice);
console.log(arrConcat);
console.log(splice.indexOf(33));
console.log(splice.includes(33));
