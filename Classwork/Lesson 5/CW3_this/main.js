let user = {
    name: 'Roman',
    age: 26,
    greeting: function (msg) {
        return `${msg} my name is ${this.name}`;
    },
    vitannia: (msg) => `${msg} my age is ${user.age}`
}
console.log(user.greeting('Hello'));
console.log(user.vitannia('Hello'));

//Замикання - реалізація на прикладі функції, яка створює об'єкт user.
function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setName(name) {
            if (typeof name === "string") {
                user.name = name;
            }
            return user.name;
        },
        setAge(age) {
            if (age > 0 && age < 100 && typeof age === "number") {
                user.age = age;
            }
            return user.age;
        },
        getUser() {
            return user;
        },
        setUserNameAge(name, age) {
            if (typeof name === "string") {
                user.name = name;
            }
            if (age > 0 && age < 100 && typeof age === "number") {
                user.age = age;
            }
            return user;
        },
    }
}

let userRoman = userBuilder('Roman', 26);
console.log(userRoman);
console.log(userRoman.getName());
console.log(userRoman.getAge());
console.log(userRoman.setAge(25));
console.log(userRoman.setName('Viktor'));
console.log(userRoman.getUser());
console.log(userRoman.setUserNameAge('Igor', 30));

// Приклад рекурсії в якості альтернативи циклу
function iterator(arr, i) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i++;
    if (i < arr.length) {
        iterator(arr, i);
    }
}

iterator([22, 33, 44, 55, 66, 77, 88, 99], 0);


//Реалізація рекурсії на прикладі розкладання багатовимірного масива на одновимірний
let arr = [11, 22,33,44,[55,66,[77,88]], 99];
function flatter(array){
    let innerArray = [];
    for (const item of array) {
        if (Array.isArray(item)){
            innerArray.push(...flatter(item).getInnerArray());
        } else {
            innerArray.push(item);
        }
    }
    return {
        getInnerArray() {
            return innerArray;
        }
    }
}

let getFlatter = flatter(arr);
console.log(getFlatter.getInnerArray());

// Приклад роботи генераторів
function* cardsHolder() {
    const cards = [
        {value: 6, suite: 'spade'},
        {value: 7, suite: 'diamond'},
        {value: 8, suite: 'spade'},
        {value: 9, suite: 'diamond'}
    ]
    for (const card of cards) {
        yield card;
    }
}

const cardsHolderGenerator = cardsHolder();
const card1 = cardsHolderGenerator.next();
console.log(card1.value);
const card2 = cardsHolderGenerator.next();
console.log(card2.value);
const card3Data = cardsHolderGenerator.next().value;
console.log(card3Data);

// function calc(a,b){
//     if ( b === 0){
//         throw new Error('b is 0');
//     }
//     return a / b;
// }
//
// console.log(calc(100, 0));

//Функція піднесення до степеня за допомогою рекурсивного методу
function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(5, 3));
//Функція піднесення до степеня за допомогою звичайного базового ітеративного підходу
function iterPow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}
console.log(iterPow(5, 3));
