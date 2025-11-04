let user = {
    id: 1,
    name: 'John',
    surname: 'Nikolson',
    age: 35
}

let newUser = Object.create(user);
console.log(user);
console.log(newUser);

console.log(newUser.name);
console.log(newUser.age);

console.log(newUser.hasOwnProperty('name'));
console.log(user.hasOwnProperty('name'));

newUser.name = 'Rick';
newUser.age = 40;
console.log(newUser);
console.log(newUser.__proto__);


let userCopy= {};
userCopy.__proto__ = user;

console.log(userCopy);
console.log(userCopy.name);
