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

//– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let getArraySum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(getArraySum([2, 4, 3, 5]));

//– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
let swap = (arr, index1, index2) => {
    if (index1 !== index2 && index1 < arr.length && index2 < arr.length && index1 >= 0 && index2 >= 0) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }
    return 'Error!'
}
console.log(swap([2, 5, 6, 9], 1, 3));

//– Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    console.log('Exchange Result: ');
    if (exchangeCurrency === 'USD') {
        return (sumUAH / currencyValues[0].value).toFixed(2);
    } else if (exchangeCurrency === 'EUR') {
        return (sumUAH / currencyValues[1].value).toFixed(2);
    }
    return 'Error!';
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
