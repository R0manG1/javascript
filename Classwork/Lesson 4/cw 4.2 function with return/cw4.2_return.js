// Приклад функції з return
function culc(a, b) {
    let result = a + b;
    return result;
}

let r1 = culc(10, 15);
let r2 = culc(20, 25);
console.log(r1, r2);

// Приклад функції з return 2й на сонові витягу ПДВ та війскового збору с певної суми

// function tax(sum) {
//     let pdv = sum / 100 * 20;
//     let warTax = sum / 100 * 1.5;
//     let result = sum - pdv - warTax;
//     return result;
//}
//Скорочена форма

function percentage (cash, percent) {
    return cash / 100 * percent;
}

function tax(sum){
    return sum - percentage(sum, 20) - percentage(sum, 1.5);
}
let result1 = tax(20000);
console.log('Чистий прибуток з урахуванням податків та війскового збору: ' + result1);

//Приклад реализації фільтру масива за допомогою функції

function usersFilter(usersArray) {
    let filteredUsers = [];
    for (const user of usersArray) {
        if (user.age > 30) {
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}

let Users = [
    { id: 1, name: "Alex", age: 25, profession: "Developer" },
    { id: 2, name: "Maria", age: 30, profession: "Designer" },
    { id: 3, name: "John", age: 22, profession: "Student" },
    { id: 4, name: "Sophie", age: 28, profession: "Doctor" },
    { id: 5, name: "David", age: 35, profession: "Teacher" },
    { id: 6, name: "Elena", age: 27, profession: "Engineer" },
    { id: 7, name: "Michael", age: 40, profession: "Manager" },
    { id: 8, name: "Anna", age: 24, profession: "Photographer" },
    { id: 9, name: "Robert", age: 33, profession: "Lawyer" },
    { id: 10, name: "Kate", age: 29, profession: "Writer" }
];

let filter1 = usersFilter(Users);
console.log(filter1);
