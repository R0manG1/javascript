//#qLQLJSeN7i – є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log('1. Перебрати його циклом while');
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

console.log('2. Перебрати його циклом for');
for (let n of arr) {
    console.log(n);
}

console.log('3. Перебрати циклом while та вивести  числа тільки з непарним індексом');
let j = 0;
while (j < arr.length) {
    if (j % 2) {
        console.log(arr[j]);
    }
    j++;
}

console.log('4. Перебрати циклом for та вивести  числа тільки з непарним індексом');
for (let k = 0; k < arr.length; k++) {
    if (k % 2) {
        console.log(arr[k]);
    }
}

console.log('5. Перебрати циклом while та вивести  числа тільки парні  значення');
let a = 0;
while (a < arr.length) {
    if (arr[a] % 2 === 0) {
        console.log(arr[a]);
    }
    a++;
}

console.log('6. Перебрати циклом for та вивести  числа тільки парні  значення');
for (let b = 0; b < arr.length; b++){
    if (arr[b] % 2 === 0) {
        console.log(arr[b]);
    }
}

console.log('7. Замінити кожне число, кратне 3, на слово “okten”');
for (let c = 0; c < arr.length; c++) {
    if (arr[c] % 3 === 0) {
        arr[c] = 'okten';
    }
}
console.log(arr);

console.log('8. Вивести масив у зворотньому порядку.');
let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let d = arr2.length - 1;
while (d >= 0) {
    console.log(arr2[d]);
    d--;
}

