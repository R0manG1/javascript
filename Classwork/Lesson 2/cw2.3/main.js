//Масив з об'єктами
let users = [
    {languages: ['english', 'spanish', 'polish'], id: 1, name: 'Anna', age: 25, status: 'active'},
    {languages: ['spanish', 'polish'], id: 2, name: 'Igor', age: 31, status: 'not active'},
    {languages: ['english', 'german', 'polish'], id: 3, name: 'Ion', age: 34, status: 'active'},
    {languages: ['english', 'italian'], id: 4, name: 'Sasha', age: 23, status: 'not active'}
]
console.log(users);

let userAnna = users[0];
console.log(userAnna.name);
console.log(userAnna['name']);

console.log(users[2].languages);
console.log(users[2]['languages'][2]);
let userIon = users[2];
let languages = userIon.languages;
console.log(languages);


//Модифікація об'єктів

let box = {
    width: 100,
    height: 200,
}
console.log(box);

box.color = 'red';
console.log(box);

box['border'] = '1px solid black';
console.log(box);
box.id = 1;
console.log(box);
delete box.id;
console.log(box);
