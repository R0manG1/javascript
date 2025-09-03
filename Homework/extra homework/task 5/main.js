//#0pm3EyTKy9 – Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arrExample = [];
arrExample[0] = 26;
arrExample[1] = -78;
arrExample[2] = 'okten';
arrExample[3] = true;
arrExample[4] = null;
arrExample[5] = undefined;
arrExample[6] = {name: 'Roman', age: 25};
arrExample[7] = [1, 2, 3, 4];
arrExample[8] = 'hello';
arrExample[9] = 100;
for (const element of arrExample) {
    console.log(element);
}
console.log('---------------------------');

//#mDMWMW5a – Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div class="box"><p>Поточний номер кроку: ${i}</p></div>`);
}
console.log('---------------------------');
document.write('<br>');

//#4sXhaa5YMM – Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    console.log(j);
    document.write(`<div><p>Поточний номер кроку: ${j}</p></div>`);
}
console.log('---------------------------');
document.write('<br>');

//#s24slNyz7 – Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
for (let a = 0; a < 100; a += 2) {
    console.log(a);
    document.write(`<div><p>Поточний номер кроку: ${a}</p></div>`);
}
console.log('---------------------------');
document.write('<br>');

//#zananT5FR1 – Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write
for (let b = 0; b < 100; b++) {
    if (b % 2 === 0) {
        console.log(b);
        document.write(`<div><p>Поточний номер кроку: ${b}</p></div>`);
    }
}
console.log('---------------------------');
document.write('<br>');

//#Tfrwls7FM – Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write
for (let c = 0; c < 100; c++) {
    if (c % 2) {
        console.log(c);
        document.write(`<div><p>Поточний номер кроку: ${c}</p></div>`);
    }
}
