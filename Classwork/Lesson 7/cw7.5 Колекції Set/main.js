//Set — це вбудована структура даних у JavaScript, яка зберігає лише унікальні значення.
//Створення Set
let set = new Set();
//Додавання елементів
set.add('qwe');
set.add('zxc');
set.add('asd');
set.add('qwe');
console.log(set);
//Перевірка наявності
console.log(set.has('qwe'));
//Видалення елемента або clear для видалення всіх елементів
set.delete('qwe');
console.log(set);
//Вивести розмір Set
console.log(set.size);
//Ітерація та додавання в масив
set.forEach(value => console.log(value));
let arrayFromSet = Array.from(set);
console.log(arrayFromSet);

//Перебудова масиву в масив з унікальними значеннями
let nums = [12, 45, 78, 12, 33, 45, 90, 7, 7, 56, 33, 89, 100, 23, 45, 78, 9, 9, 62, 12];
//Приклад 1
let set1 = new Set(nums);
console.log(set1);
let numbers = Array.from(set1);
console.log(numbers);
//Приклад 1 (більш скороченний)
let numbers2 = [...new Set(nums)];
console.log(numbers2);

//Перевірка наявності елемента у Set
if (set1.has(101)){
    console.log('TRUE');
} else
    console.log('FALSE');


let a = new Set([1,2,3,4,5]);
let b = new Set([3,4,5,6,7]);
//Перетин двох множин:
let c = new Set([...a].filter(x => b.has(x)));
//Різниця двох множин:
let d = new Set([...a].filter(x => !b.has(x)))
console.log(c);
console.log(d);
