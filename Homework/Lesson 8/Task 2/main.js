//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

let player = {
    name: 'Egor',
    age: 25,
    country: 'England',
    greeting() {
        console.log('Hello!');
    },
    example() {
        console.log('Example!');
    }
}

let player2 = undefined;

function deepClone(obj) {
    if (obj) {
        let functions = [];
        for (const Key in obj) {
            if (typeof obj[Key] === 'function') {
                let functionClone = obj[Key].bind({});
                functions.push({Key, functionClone});
            }
        }
        console.log(functions);
        let objClone = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            objClone[func.Key] = func.functionClone;
        }
        return objClone;
    }
    throw new Error('Object is Null, Undefined or NaN!');
}

player3 = deepClone(player);
console.log(player3);
player3.greeting();
player3.example();
