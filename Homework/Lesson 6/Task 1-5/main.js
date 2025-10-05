//#dFeorS3m7u – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
let s1 = 'hello world';
let s2 = 'lorem ipsum';
let s3 = 'javascript is cool';

const strings = [s1, s2, s3];
console.log('Довжина стрінгових значень: ');
for (const item of strings) {
    console.log(item + ' - ' + item.length);
}

//#8lld9HMxXWB – Перевести до великого регістру наступні стрінгові значення
// ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
const uppercaseStrings = [];
for (let item of strings) {
    uppercaseStrings.push(item.toUpperCase());
}
console.log(uppercaseStrings);

//#ClDsAm7xba7 – Перевести до нижнього регістру наступні стрінгові значення
//‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
const lowercaseStrings = [];
for (let item of uppercaseStrings) {
    lowercaseStrings.push(item.toLowerCase());
}
console.log(lowercaseStrings);

//#0b89BkYZwu – Є “брудна” стрінга let str = ‘ dirty string   ‘.
// Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let newString = str.trim();
console.log(newString);
console.log(str.length);
console.log(newString.length);

//#bfoJuse4ZzP – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
let str2 = 'Ревуть воли як ясла повні';

function stringToArray (str) {
    if (str) {
        const arr = str.split(' ');
        return arr;
    }
    return [''];
}
console.log(stringToArray(str2));

