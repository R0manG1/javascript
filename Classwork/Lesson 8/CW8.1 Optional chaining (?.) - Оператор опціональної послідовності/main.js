//Optional chaining (?.) - Оператор опціональної послідовності
//Оператор опціональної послідовності завершує обчислення та повертає значення undefined,
// якщо значення перед ?. дорівнює UNDEFINED / NULL

//Найчастіший випадок, коли потрібно витягнути певні властивості, з урахування того, що вони можуть не існувати
let user = {
    nameSurname: {
        name: 'Chao',
        surname: 'Chao',
    },
    from: {
        country: {
            name: 'Ukraine',
            city: 'Kiev'
        }
    }
};
console.log(user.from?.country?.city);


//Використання опціональної послідовності для виклику функції, яка може не існувати
let userAdmin = {
    admin() {
        return ('I\'m admin');
    }
};
let userController = {};

console.log(userAdmin.admin?.());
console.log(userController.admin?.());


//Використання ?. для доступу до характеристики обʼєкта, з урахуванням того, що обʼєкт теж може не існувати
let key = 'name';
let user1 = {
    name: 'Igor'
};
let user2 = null;

console.log(user1?.[key]);
console.log(user2?.[key]);
