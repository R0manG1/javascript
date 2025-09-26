// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createList = (array) => {
    document.write('<ul>');
    let arrayIterator = (index) => {
        document.write(`<li><p>${array[index]}</p></li>`);
        index++;
        if (index < array.length) {
            arrayIterator(index);
        }
    }
    arrayIterator(0);
    document.write('</ul>');
}
createList([22, 'hello', 'okten', true, 99, null]);


//– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.
let generateUsersList = (usersArray, userIndex = 0) => {
    document.write(`<div>${usersArray[userIndex].id} - ${usersArray[userIndex].name} - ${usersArray[userIndex].age}</div>`);
    userIndex++;
    if (userIndex < usersArray.length) {
        generateUsersList(usersArray, userIndex);
    }

}
let users = [
    {id: 1, name: "Oleksandr", age: 25},
    {id: 2, name: "Kateryna", age: 22},
    {id: 3, name: "Taras", age: 30},
    {id: 4, name: "Iryna", age: 27},
    {id: 5, name: "Bohdan", age: 35}
];

generateUsersList(users);

//– створити функцію, яка повертає найменше число з масиву
let getMinValue = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        let item = array[i];
        min = (item < min) ? item : min;
    }
    return console.log('Min number: ', min);
}
getMinValue([23, 56, 12, 76, 89, 10, -5, -15]);
