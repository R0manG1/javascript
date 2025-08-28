//#3ckURgvs – Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let time = +prompt('Enter time ( 0 - 59 ):');
if (time >= 0 && time < 15) {
    console.log('First quarter');
} else if (time >= 15 && time < 30) {
    console.log('Second quarter');
} else if (time >= 30 && time < 45) {
    console.log('Third quarter');
} else if (time >= 45 && time < 60) {
    console.log('Fourth quarter');
} else {
    time = +prompt('Incorrect! Enter time ( 0 - 59 ):');
}

