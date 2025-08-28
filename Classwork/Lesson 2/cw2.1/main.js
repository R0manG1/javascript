let arr = [123, 456, 0, 98, 'hello', true];
console.log(arr);
arr[2] = 'nn';
console.log(arr);
console.log(typeof arr[4], arr[4]);
console.log(arr.length);
arr[arr.length] = 28;
console.log(arr);
arr[arr.length] = 'my name is Roman';
console.log(arr);

//Багатовимірні масиви
let arr2 = [
    ['Igor', 'Vasya', 'Petya', 'Oleg'],
    ['Kiev', 'Odessa', 'Lviv'],
    [1995, 1996, 1997]
]
console.log(arr2);
let innerArray = arr2[0];
console.log(innerArray[1]);
console.log(arr2[2][2]);
arr2[2][2] = 2000;
console.log(arr2);
