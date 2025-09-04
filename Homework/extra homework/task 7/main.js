//1. Створити пустий масив та :

// a. заповнити його 50 парними числами за допомоги циклу.
let arrEmpty = [];
let j = 0;
for (let i = 0; i < 50; i++) {
    j += 2;
    arrEmpty[i] = j;
}
console.log(arrEmpty);
console.log('---------------------------------------------');

//  b. заповнити його 50 непарними числами за допомоги циклу.
let arrEmpty2 = [];
let a = 1;
for (let b = 0; b < 50; b++) {
    a += 2;
    arrEmpty2[b] = a;
}
console.log(arrEmpty2);
console.log('---------------------------------------------');

//c. Заповнити масив 20-ма рандомними числами.
let arrEmpty3 = [];
let number = 0;
for (let k = 0; k < 20; k++) {
    number = Math.floor(Math.random() * 100 + 1);
    arrEmpty3[k] = number;
}
console.log(arrEmpty3);
console.log('---------------------------------------------');

//d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732
let arrEmpty4 = [];
let number2 = 0;
let min = 8;
let max = 732;
for (let x = 0; x < 20; x++) {
    number2 = Math.floor(Math.random() * (max - min + 1)) + min;
    arrEmpty4[x] = number2;

}
console.log(arrEmpty4);
console.log('---------------------------------------------');

//2. Вивести за допомогою console.log кожен третій елемент
let q = 2;
do {
    console.log(arrEmpty4[q]);
    q += 3;
} while (q < 20);
console.log('---------------------------------------------');

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
let arrNew = [];
let r = 0;
let e = 2;
do {
    if (arrEmpty4[e] % 2 === 0) {
        console.log(arrEmpty4[e]);
        arrNew[r] = arrEmpty4[e];
        r++;
    }
    e += 3;
} while (e < 20);
console.log(arrNew);
console.log('---------------------------------------------');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
let firstNumber = 0;
for (let secondNumber = 1; secondNumber < 20; secondNumber++) {
    if (arrEmpty4[secondNumber] % 2 === 0) {
        console.log(arrEmpty4[firstNumber]);
    }
    firstNumber++;
}
console.log('---------------------------------------------');

//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arrNumbers = [100,250,50,168,120,345,188];
let totalAmount = 0;
let averageAmount;
for (const Number of arrNumbers) {
    totalAmount += Number;
}
averageAmount = Number((totalAmount / arrNumbers.length).toFixed(2));
console.log(`Середній чек: ${averageAmount}`);
console.log('---------------------------------------------');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrNumbers2 = [];
let arrNumbers3 = [];
let number3 = 0;
let m = 0;
for(let n = 0; n < 10; n++){
    number3 = Math.floor(Math.random() * 10 + 1);
    arrNumbers2[n] = number3;
    arrNumbers3[m] = arrNumbers2[n] * 5;
    m++;
}
console.log(arrNumbers2);
console.log(arrNumbers3);
console.log('---------------------------------------------');

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…).
// Пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
let arrFirst = [34, 'hello', true, 56, -45, null, '76', undefined, 123, 'world', 456, NaN, 34575745652758n];
let arrSecond = [];
let elementSecond = 0;
for (const elementFirst of arrFirst) {
    if (typeof elementFirst === 'number') {
        arrSecond[elementSecond] = elementFirst;
        elementSecond++;
    }
}
console.log(arrSecond);
console.log('---------------------------------------------');
