// – Взяти масив з 10 чисел або створити його.
// Вивести в консоль тільки ті елементи, значення яких є парними.

let arrNumbers = [];
for (let i = 0; i < 10; i++) {
    arrNumbers[i] = Math.floor(Math.random() * 100 + 1);
}
console.log(arrNumbers);
console.log('Елементи, значення яких є парним: ');
for (const number of arrNumbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
console.log('---------------------------');

// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrNumbers2 = [];
for (const number of arrNumbers) {
    arrNumbers2.push(number);
}
console.log('Скопійовані значення одного масива в інший: ')
console.log(arrNumbers2);
console.log('---------------------------');

// – Дано масив: [‘a’, ‘b’, ‘c’]. За допомогою циклу for of зібрати всі букви в слово.
let arr = ['a', 'b', 'c'];
let word = '';
for (const letter of arr) {
    word += letter;
}
console.log(word);
console.log('---------------------------');

// – Дано масив: [‘a’, ‘b’, ‘c’]. За допомогою циклу while зібрати всі букви в слово.
let j = 0;
let word2 = '';
while (j < arr.length) {
    word2 += arr[j];
    j++;
}
console.log(word2);
console.log('---------------------------');

// – Дано масив: [‘a’, ‘b’, ‘c’]. За допомогою циклу for зібрати всі букви в слово.
let word3 = '';
for (let k = 0; k < arr.length; k++) {
    word3 += arr[k];
}
console.log(word3);
console.log('---------------------------');
