let str = 'Hello World!';
console.log(str);
let s = str.concat(' My name Roman.');
console.log(s);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(str.startsWith('Hel'));
console.log(str.endsWith('ld!'));
console.log(str.substring(0,5));
console.log(str.indexOf('W'));
console.log(str.lastIndexOf('l'));
console.log(str.indexOf('l', 6));

// let name = prompt('Enter your name');
// if (!name.startsWith('R')){
//     alert('Incorrect name!');
//     name = prompt('Enter your name, must start with R');
// }
// console.log(name);


let gmail = prompt('Please, enter a valid gmail address');
//roman99@gmail.com//
let nickname = gmail.slice(0,7);
alert('Your nickname is ' + nickname);
