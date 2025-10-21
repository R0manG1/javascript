//#zg6Fifnqig – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const Cinderellas = [
    new Cinderella('Ameli', 19, 38),
    new Cinderella('Sofi', 23, 36),
    new Cinderella('Sanda', 26, 37),
    new Cinderella('Vanesa', 21, 35),
    new Cinderella('Anna', 24, 39),
    new Cinderella('Mari', 22, 40),
    new Cinderella('Ksenia', 24, 34),
    new Cinderella('Teresa', 19, 38),
    new Cinderella('Alla', 29, 36),
    new Cinderella('Silvia', 20, 39)
];
console.log(Cinderellas);

class Prince {

    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }

    findCinderella() {
        for (let cinderella of Cinderellas) {
            if (cinderella.footSize === prince.shoeSize) {
                console.log(cinderella);
            }
        }
    }

}

let prince = new Prince('John', 25, 37);
console.log(prince);

// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку.
let findCinderellaByShoe = Cinderellas.find(cinderella => {
    return cinderella.footSize === prince.shoeSize;
})
console.log(findCinderellaByShoe);
