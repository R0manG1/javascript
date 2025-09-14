//#pghbnSB – створити функцію яка повертає найменьше число з масиву
function minArrayValue(numbers) {
    let minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < minNumber) {
            minNumber = number;
        }
    }
    return minNumber;
}

let numbers = [23, -10, 99, -9, 44, 50, -43];
console.log(minArrayValue(numbers));

//#EKRNVPM – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function arraySum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

let secondNumbers = [10, 3, 20];
console.log(arraySum(secondNumbers));
