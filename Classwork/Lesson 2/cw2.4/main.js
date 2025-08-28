//Примітивні типи даних
let a = 100;
let b = a;
b = b + 20;
console.log(a);
console.log(b);

//Референціальні | Ссилочні типи даних
let cat = {name: 'Tom', age: 10};
let cat2 = cat;
console.log(cat2);
cat2.color = 'black';
console.log(cat2);
console.log(cat);
