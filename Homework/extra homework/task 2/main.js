//#4aDbSgh — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль

let arr = [];
arr[0] = 1;
arr[1] = true;
arr[2] = 'hello';
arr[3] = false;
arr[4] = 345636337373521466626n;
arr[5] = null;
arr[6] = undefined;
arr[7] = ''
arr[8] = 56.24216;
arr[9] = NaN;
 console.log(arr);
let i = 0;
while (i < arr.length) {
    console.log(typeof arr[i], arr[i]);
    i++;
}
