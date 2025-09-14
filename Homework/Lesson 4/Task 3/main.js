//#hOL6126 – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий.
function listCreator(listText) {
    let listItems = `<ul>
                                <li>${listText}</li>
                                <li>${listText}</li>
                                <li>${listText}</li>
                            </ul>`;
return document.write(listItems);
}
listCreator('Hello World!');
listCreator('Hello Okten!');

//#0Kxco1edSN – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function listCreatorSecond(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
listCreatorSecond('Hello World!', 10);
