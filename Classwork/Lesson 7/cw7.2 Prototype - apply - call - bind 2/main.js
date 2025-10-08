// //Композиція ( у якості параметрів функції додається об'єкт)
// function Player (name, age, game, experience, playerComand){
//     this.name = name;
//     this.age = age;
//     this.game = game;
//     this.experience = experience;
//     this.playerComand = playerComand;
// }
//
// let pl1 = new Player('John', '25', 'Dota 2', '4000h', {comandName: 'Mouse', duration: '2y'});
// console.log(pl1);
//
// //Агрегація ( у якості параметрів прописаються характеристики об'єкту, а сам об'єкт формує функція )
// function Player2 (name, age, game, experience, comandName, duration){
//     this.name = name;
//     this.age = age;
//     this.game = game;
//     this.experience = experience;
//     this.playerComand = {comandName: comandName, duration: duration};
// }
//
// let pl2 = new Player2('John', '25', 'Dota 2', '4000h', 'Mouse', '2y');
// let pl3 = new Player2('Nick0', '28', 'CSGO 2', '7000h', 'FL3', '5y');
// let pl4 = new Player2('R0vIC', '30', 'CSGO 2', '20000h', 'Fnatic', '8y');
// console.log(pl2);
// console.log(pl3);
// console.log(pl4);
// let playersArray = [];
// playersArray.push(pl2);
// playersArray.push(pl3);
// playersArray.push(pl4);
// console.log(playersArray);

//Prototype - метод для розщирення конструктора (додавання нових функцій)
// prototype — спільні методи для всіх об’єктів конструктора.

// User.prototype.greeting = function () {
//     return `Hello, my name is ${this.name}, from ${this.city}`;
// }
//
// let user1 = new User('Egor', '34', 'Kiev');
// let user2 = new User('Vlad', '23', 'Lviv');
// console.log(user1);
// console.log(user2);
// console.log(user1.greeting());
// console.log(user2.greeting());

// Методи call, apply і bind — використовуються для зміни контексту this: call/apply викликають функцію одразу,
// а bind створює її копію з закріпленим контекстом для подальшого виклику.
let user1 = new User('Egor', '34', 'Kiev');
user1.greeting = function (msg) {
    return `${msg} my name is ${this.name}, i\`m ${this.age}`;
}
user1.userCity = function (msg) {
    return `${msg} ${this.city}`;
}
user1.vitania = function (msg) {
    return `${msg} my name is ${this.name}, i\`m from ${this.city}, i\`m ${this.age}`;
}
console.log(user1.greeting('Hi'));
console.log(user1.userCity('Im from'));
console.log(user1.vitania('HELLO'));
console.log(user1);

let user2 = new User('Vlad', '23', 'Lviv');
console.log(user1.greeting.apply(user2, ['Chao']));
console.log(user1.userCity.call(user2, 'Im from the best city in the world - '));
let user2Vitania = user1.vitania.bind(user2);
console.log(user2Vitania('HI'));
console.log(user2);

