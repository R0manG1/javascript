//Об'єкти
let user = {
    id: 1,
    name: 'Roman',
    age: 25
}
console.log(user);

//Внутрішні об'єкти
let user1 = {
    id: 1,
    name: 'Jonathon',
    age: 23,
    skills: ['HTML', 'CSS', 'JS'],
    info: {
        city: 'Kyiv',
        country: 'Ukraine'
    }
}
console.log(user1);
console.log(user1.skills);
console.log(user1['skills']);
console.log(user1.skills[1]);
console.log(user1.info.city);
