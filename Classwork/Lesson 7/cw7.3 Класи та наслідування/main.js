// //Створення классу з конструктором та методома екземплярів, дадаткова перевірка роботи статичних методів - static (function name)
// //static робить метод доступним лише через сам клас, а не через його екземпляри;
// //метод не потрапляє в прототип об'єкта, тому виклик через екземпляр працювати не буде.
// class Player{
//     constructor(playerName, age){
//         this.playerName = playerName;
//         this.age = age;
//     }
//     static playerMessage(gameName){
//         console.log(this);
//         console.log(this.playerName);
//         return `Im ${this.playerName} - ${gameName} player`;
//     }
// }
// // let pl1 = new Player('Ivan', '27');
// // console.log(pl1);
// // console.log(pl1.playerMessage('CSGO-2'));
// console.log(Player.playerMessage('Fortnite'));

//Використання принципу наслідування (разширення классу) для додавання нових классів (extends)
class Player {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    playerMessage(plGames) {
        return `Im ${this.name} - ${plGames} player`;
    }
}

let pl1 = new Player('Ivan', '27');
console.log(pl1);
console.log(pl1.playerMessage('CSGO-2'));

class playerGames extends Player {

    constructor(name, age, games) {
        super(name, age);
        this.games = games;
    }

    playerMessage() {
        return `Im ${this.games} player`;
    }
}

let pl2 = new playerGames('Nick', '34', ['LOL', 'Dota', 'CSGO']);
console.log(pl2);
console.log(pl2.playerMessage());

//Реалізація наслідування на прикладі звичайного конструктора
function User(name, status) {
    this.name = name;
    this.status = status;
    this.greeting = function (msg) {
        return msg;
    }
}

let us1 = new User('Ivan', '27');
console.log(us1);

function Admin(name, status, password) {
    User.apply(this, [name, status]);
    this.password = password;
}

let admin = new Admin('Roman', '32', '1234');
console.log(admin);
console.log(admin.greeting('Hello, World!'));
