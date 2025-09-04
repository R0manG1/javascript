//#qLQLJSeN7i – є масив [2,17,13,6,22,31,45,66,100,-18]:
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

console.log('3. Перебрати циклом while та вивести  числа тільки з непарним індексом');
let i = arr.length - 1;
while (i >= 0) {
    if (i % 2) {
        console.log(arr[i]);
    }
    i--;
}

console.log('4. Перебрати циклом for та вивести  числа тільки з непарним індексом');

for (let j = arr.length - 1; j >= 0; j--) {
    if (j % 2) {
        console.log(arr[j]);
    }
}

console.log('5. Перебрати циклом while та вивести  числа тільки парні  значення');
let a = arr.length - 1;
while (a >= 0) {
    if (arr[a] % 2 === 0) {
        console.log(arr[a]);
    }
    a--;
}

console.log('6. Перебрати циклом for та вивести  числа тільки парні  значення');

for (let d = arr.length - 1; d >= 0; d--) {
    if (arr[d] % 2 === 0) {
        console.log(arr[d]);
    }
}

console.log('7. Замінити кожне число, кратне 3, на слово “okten”');
for (let c = arr.length - 1; c >= 0; c--) {
    if (arr[c] % 3 === 0) {
        arr[c] = 'okten';
    }
}
console.log(arr);
