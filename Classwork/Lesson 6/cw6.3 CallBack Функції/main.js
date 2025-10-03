//Приклад функції з callback, в якій прописуються дії стосовно масиву,
// а умова прописується окремо в якосты функції, яку потім викликаємо y вигляді callback.
// Функція умови повертає лише булеве значення, це потрібно враховувати. В іншому випадку,
// потрібно змінити основну функцію, з урахуванням іншого return.
function filter(array, callback) {
    let exitArray = [];
    for (const item of array) {
        if (callback(item)) {
            exitArray.push(item);
        }
    }
    return exitArray;
}

let arr = [12, 13, 14, 15, 51, 41, 31, 21];
let frontendClub = [
    {
        name: "Oksana",
        skills: ["HTML", "CSS"],
        age: 21,
        studyPeriod: 3
    },
    {
        name: "Mykola",
        skills: ["JavaScript", "React"],
        age: 25,
        studyPeriod: 6
    },
    {
        name: "Kateryna",
        skills: ["HTML", "JavaScript"],
        age: 22,
        studyPeriod: 4
    },
    {
        name: "Andriy",
        skills: ["CSS", "React"],
        age: 24,
        studyPeriod: 5
    },
    {
        name: "Olena",
        skills: ["HTML", "React"],
        age: 23,
        studyPeriod: 3
    },
    {
        name: "Dmytro",
        skills: ["CSS", "JavaScript"],
        age: 26,
        studyPeriod: 6
    },
    {
        name: "Svitlana",
        skills: ["HTML", "CSS"],
        age: 20,
        studyPeriod: 2
    },
    {
        name: "Ivan",
        skills: ["JavaScript", "React"],
        age: 27,
        studyPeriod: 5
    },
    {
        name: "Tetyana",
        skills: ["HTML", "React"],
        age: 22,
        studyPeriod: 4
    },
    {
        name: "Petro",
        skills: ["CSS", "JavaScript"],
        age: 23,
        studyPeriod: 6
    }
];
//Реалізація на прикладі масиву чисел, умову прописуємо в якості аргумента функції
console.log(filter(arr, (item) => item % 2 !== 0));

//Реалізація на прикладі масиву с об'єктами (учні школи по фронт-енду), умову прописуємо нові, з урахуванням того, що це масив з об'єктами
// Витяг учнів, які знайомі з JS
let javascriptUsers = filter(frontendClub, (user) => {
    return user.skills[0].startsWith('JavaScript')
        || user.skills[1].startsWith('JavaScript');
});
console.log(javascriptUsers);
// Додаткове сортування учнів с найбільшим досвідом на базі нового масиву
let mostExperiencedUsers = filter(javascriptUsers, (user) => user.studyPeriod === 6);
console.log(mostExperiencedUsers);
