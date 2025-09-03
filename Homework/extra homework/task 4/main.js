//#yHAwJOyiC – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNumbers = [3, 6, 9, -3, 4.51, 0, -2, 12, 43, 1424243553253n];
for (const number of arrNumbers) {
    console.log(number);
}

console.log('---------------------------');
//#GamKju89ob – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let arrWords = ['abc', 'def', '123', '456', 'true', 'false', 'ffg32'];
for (const word of arrWords) {
    console.log(word);
}

console.log('---------------------------');
//#Bm76xmg – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrElements = [34, null, undefined, 'abc', '', true, false, NaN];
for (const element of arrElements) {
    console.log(element);
}

console.log('---------------------------');
//#u3vmD0YJXh – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let arrElements2 = [34, -56, true, 'abc', false, true, false, 'hello', 12, 'world'];
for (let i = 0; i < arrElements2.length; i++) {
    if (typeof arrElements2[i] === 'boolean') {
        console.log(i, arrElements2[i]);
    }
}

console.log('---------------------------');
//#9stMq2ou - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let arrElements3 = [34, -56, true, 'abc', 0, 23525642434523n, false, 'okten', 43.1122425, 'hero'];
for (let j = 0; j < arrElements3.length; j++) {
    if (typeof arrElements3[j] === 'number') {
        console.log(`[${j}]`, arrElements3[j]);
    }
}

console.log('---------------------------');
//#mK4pmM4 – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
let arrElements4 = [34, -56, true, 'abc', 0, 23525642434523n, false, 'okten', 43.1122425, 'hero'];
for(let k = 0; k < arrElements4.length; k++){
    if(typeof arrElements4[k] === 'string'){
        console.log(`[${k}]`, arrElements4[k]);
    }
}
