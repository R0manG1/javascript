//1. Створити пустий масив та :

// a. заповнити його 50 парними числами за допомоги циклу.
let arrEmpty = [];
let j = 0;
for (let i = 0; i < 50; i++) {
    j += 2;
    arrEmpty[i] = j;
}
console.log(arrEmpty);

//  b. заповнити його 50 непарними числами за допомоги циклу.
let arrEmpty2 = [];
let a = 1;
for (let b = 0; b < 50; b++) {
    a += 2;
    arrEmpty2[b] = a;
}
console.log(arrEmpty2);

//c. Заповнити масив 20-ма рандомними числами.
let arrEmpty3 = [];
let number = 0;
for (let k = 0; k < 20; k++) {
    number = Math.floor(Math.random() * 100 + 1);
    arrEmpty3[k] = number;
}
console.log(arrEmpty3);

//d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732
let arrEmpty4 = [];
let number2 = 0;
let min = 8;
let max = 732;
for (let x = 0; x<20; x++){
    number2 = Math.floor(Math.random() * (max - min + 1)) + min;
    arrEmpty4[x] = number2;

}
console.log(arrEmpty4);
