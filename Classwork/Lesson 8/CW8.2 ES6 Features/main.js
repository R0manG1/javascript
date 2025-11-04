//Компонування / структуризація (structuring) - використовуємо значення окремих змінних і додаємо
// як характеристику до обʼєкта або масиву

let name = 'John';
let age = 50;
let city = 'Kiev';

let user = {
    name,
    age,
    country: {
        countryName: 'Ukraine',
        city,
    },
    foo() {
        console.log('Hi, I\'m John from Kiev');
    }
}
console.log(user);
user.foo();

//Декомпонування або деструктурізація (destructuring) - витягуємо характеристики обʼєкта або масиву до окремих змінних
// Обʼєкт (деструктурізація) - {} дужки, масив - [] дужки
let user2 = {
    nameSurname: 'Samanta Smith',
    birthday: '20.10.1996',
    gender: 'Female',
    greeting() {
        console.log('Hi, I\'m Samanta Smith');
    }
}
let {nameSurname, birthday, gender, greeting} = user2;
console.log(nameSurname);
console.log(birthday);
console.log(gender);
greeting();
console.log(user2.greeting);

//Приклад використання окремих характеристик у якості параметрів функції
//Ми передаємо як параметр - обʼєкт, з якого витягаємо певну характеристу, прописану як аргумент функції
function example({age}) {
    console.log(age);
}

let userIvan = {name: 'Ivan', age: 15, status: true};
example(userIvan);

//Вирішення проблеми паралельного використання компонування та декомпонування.
//У випадку якщо при декомпонуванні, змінні вже задекларовані, ми маємо можливість іх переназвати

let {name: userName, age: userAge, country: {countryName: userCountry, city: userCity}} = user;
console.log(userName, userAge, userCountry, userCity);


let arrNumbers = [11, 22, 33, 44];
let [a, b] = arrNumbers;
console.log(a, b);

//У випадку, якщо потрібно змінити послідовність ввідношення змінних до єлементів масиву,
// можливо використата (,) для ігнорування наступного елмента

let [c, , , d] = arrNumbers;
console.log(c, d);


//Деструктурізація з масива обʼєктів або обʼєта з масивами

const users = [
    {name: "Roman", username: "roman99", age: 25, status: "active"},
    {name: "Anna", username: "anna_sky", age: 22, status: "inactive"},
    {name: "Igor", username: "igor_dev", age: 28, status: "banned"},
    {name: "Maria", username: "mary_fox", age: 19, status: "active"},
    {name: "Denis", username: "den_d", age: 31, status: "pending"}
];

let [{name: firstUserName, username}, userSecond] = users;
console.log(firstUserName, username);
console.log(userSecond);

const usersData = {
    names: ["Roman", "Anna", "Igor", "Maria", "Denis"],
    usernames: ["roman99", "anna_sky", "igor_dev", "mary_fox", "den_d"],
    ages: [25, 22, 28, 19, 31],
    statuses: ["active", "inactive", "banned", "active", "pending"]
};

let {names: [n1, n2, n3, n4, n5], ages: usersAge} = usersData;
console.log(n1, n2, n3, n4, n5);
console.log(usersAge);
