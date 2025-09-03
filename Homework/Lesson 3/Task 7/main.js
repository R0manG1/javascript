//#4WrHwFTEop0 є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// за допомоги циклу вивести:
// – користувачів зі статусом true
// – користувачів зі статусом false
// – користувачів, які старші за 30 років

document.write('<div class="first_list"><h2>Користувачі зі статусом true:</h2>');
for (const user of users) {
    if (user.status) {
        document.write(`<div class="users_list"><h3>Name:</h3> ${user.name}, <h3>age:</h3> ${user.age}, <h3>status:</h3> ${user.status}</div>`);
    }
}
document.write('</div>');
document.write('<div class="second_list"><h2>Користувачі зі статусом false:</h2>');
for (const user of users) {
    if (!user.status) {
        document.write(`<div class="users_list"><h3>Name:</h3> ${user.name}, <h3>age:</h3> ${user.age}, <h3>status:</h3> ${user.status}</div>`);
    }
}
document.write('</div>');

document.write('<div class="third_list"><h2>Користувачі, які старші за 30 років:</h2>');
for (const user of users) {
    if (user.age > 30) {
        document.write(`<div class="users_list"><h3>Name:</h3> ${user.name}, <h3>age:</h3> ${user.age}, <h3>status:</h3> ${user.status}</div>`);
    }
}
document.write('</div>');
