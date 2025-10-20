//#XjJuucOMR0 – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1, 'Victoria', 'Tarasova', 'vikat87@gmail.com', '+380964242657'),
    new User(2, 'Roman', 'Novicov', 'rmvv@gmail.com', '+380977456824'),
    new User(3, 'Anna', 'Pustovit', 'annafrist@protonmail.com', '+380684311545'),
    new User(4, 'Grigorij', 'Voloshin', 'grishavolt@nmail.com', '+380971134226'),
    new User(5, 'Victor', 'Gugo', 'ggvt@gmail.com', '+380669622914'),
    new User(6, 'Ekaterina', 'Anisimova', 'anisimovakate@gmail.com', '+380984882612'),
    new User(7, 'Julia', 'Borisenco', 'juliaboris@protonmail.com', '+380957633882'),
    new User(8, 'Maxim', 'Platonov', 'maxon77@protonmail.com', '+380684422123'),
    new User(9, 'Roman', 'Jurchenko', 'jurrom@nmail.com', '+380694733612'),
    new User(10, 'Bogdan', 'Samoilov', 'bogdanchik@gmail.com', '+380989433916')
]

console.log(users);

//#2ikXsE2WiKZ – Взяти масив з  User[] з попереднього завдання, та відфільтрувати,
// залишивши тільки об’єкти з парними id (filter)
const predicate = user => user.id % 2 === 0;

let usersFilter = users.filter(predicate);
console.log(usersFilter);

//#pOeHKct – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const users2 = [
    new User(1, 'Victoria', 'Tarasova', 'vikat87@gmail.com', '+380964242657'),
    new User(10, 'Bogdan', 'Samoilov', 'bogdanchik@gmail.com', '+380989433916'),
    new User(8, 'Maxim', 'Platonov', 'maxon77@protonmail.com', '+380684422123'),
    new User(2, 'Roman', 'Novicov', 'rmvv@gmail.com', '+380977456824'),
    new User(5, 'Victor', 'Gugo', 'ggvt@gmail.com', '+380669622914'),
    new User(3, 'Anna', 'Pustovit', 'annafrist@protonmail.com', '+380684311545'),
    new User(6, 'Ekaterina', 'Anisimova', 'anisimovakate@gmail.com', '+380984882612'),
    new User(7, 'Julia', 'Borisenco', 'juliaboris@protonmail.com', '+380957633882'),
    new User(4, 'Grigorij', 'Voloshin', 'grishavolt@nmail.com', '+380971134226'),
    new User(9, 'Roman', 'Jurchenko', 'jurrom@nmail.com', '+380694733612')
]

let sortUsers = [...users2].sort((user1, user2) => user1.id - user2.id);
console.log(sortUsers);
console.log(users2);
