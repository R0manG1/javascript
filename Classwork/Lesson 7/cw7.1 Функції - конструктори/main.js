//Композиція ( у якості параметрів функції додається об'єкт)
function Player (name, age, game, experience, playerComand){
    this.name = name;
    this.age = age;
    this.game = game;
    this.experience = experience;
    this.playerComand = playerComand;
}

let pl1 = new Player('John', '25', 'Dota 2', '4000h', {comandName: 'Mouse', duration: '2y'});
console.log(pl1);

//Агрегація ( у якості параметрів прописаються характеристики об'єкту, а сам об'єкт формує функція )
function Player2 (name, age, game, experience, comandName, duration){
    this.name = name;
    this.age = age;
    this.game = game;
    this.experience = experience;
    this.playerComand = {comandName: comandName, duration: duration};
}

let pl2 = new Player2('John', '25', 'Dota 2', '4000h', 'Mouse', '2y');
let pl3 = new Player2('Nick0', '28', 'CSGO 2', '7000h', 'FL3', '5y');
let pl4 = new Player2('R0vIC', '30', 'CSGO 2', '20000h', 'Fnatic', '8y');
console.log(pl2);
console.log(pl3);
console.log(pl4);
let playersArray = [];
playersArray.push(pl2);
playersArray.push(pl3);
playersArray.push(pl4);
console.log(playersArray);
