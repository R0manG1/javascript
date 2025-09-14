//#gEFoxMMO – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
let primitiveArray = [23, 0, 'ok', true, 'hello', 45, false, 'world'];
function printPrimitiveArray(array) {
    document.write('<ul>');
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
printPrimitiveArray(primitiveArray);


//#bovDJDTIjt – створити функцію, яка приймає масив об’єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об’єкту окремий блок.
function printArrayOfUsers(users){
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
usersArray = [
    {id: 1, name: 'Oleksandr', age: 22},
    {id: 2, name: 'Maria', age: 24},
    {id: 3, name: 'Ivan', age: 21},
    {id: 4, name: 'Olena', age: 23},
    {id: 5, name: 'Dmytro', age: 25}]
printArrayOfUsers(usersArray);
