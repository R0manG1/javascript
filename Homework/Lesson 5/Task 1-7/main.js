//– створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
let getRectangleArea = (a, b) => a * b;
console.log(getRectangleArea(4, 3));

//– створити функцію, яка обчислює та повертає площу кола з радіусом r
let getCircleArea = r => Math.PI * (r ** 2);
console.log(getCircleArea(5));

//– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
let getCylinderArea = (h, r) => 2 * Math.PI * r * h + 2 * Math.PI * (r ** 2);
console.log(getCylinderArea(6, 2));

//– створити функцію, яка приймає масив та виводить кожен його елемент
let arrayIterator = (array, i) => {
    console.log(array[i]);
    i++;
    if (i < array.length) {
        arrayIterator(array, i);
    }
}
arrayIterator([11, 22, 33, 44, 55, 66], 0);

//– створити функцію, яка створює параграф з текстом. Текст задати через аргумент
let createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph('Lorem ipsum dolor sit amet.');


//– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createList = (listText) => {
    document.write(`
                    <ul>
                        <li><p>${listText}</p></li>
                        <li><p>${listText}</p></li>
                        <li><p>${listText}</p></li>
                    </ul>
                  `)
}
createList('Lorem ipsum.');

//– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createList2 = (listText, n) => {
    debugger;
    let i = 0;
    document.write(`<ul>`);
    do {
        document.write(`<li>${listText}</li>`);
        i++;
    } while (i < n)
    document.write(`</ul>`);
}
createList2('Lorem ipsum.', 5);
