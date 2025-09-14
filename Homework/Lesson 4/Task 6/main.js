//#kpsbSQCt2Lf – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(array, index1, index2) {
    if (index1 < array.length && index2 < array.length) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    } else {
        console.log('Wrong array indexes!')
        return -Infinity;
    }

}

let numbers = [10, 30, 50, 70];
console.log(swap(numbers, 5, 4));

//#mkGDenYnNjn.html
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    console.log('Exchange Result: ')
    if (exchangeCurrency === 'USD') {
        return (sumUAH / currencyValues[0].value).toFixed(2);
    } else if (exchangeCurrency === 'EUR') {
        return (sumUAH / currencyValues[1].value).toFixed(2);
    } else {
        console.log('Error!');
        return -Infinity;
    }
}

console.log(exchange(20000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));

