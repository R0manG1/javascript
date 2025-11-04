//Поверхневе копіювання за допомогою оператора Spread([...array]) та методу обʼєкта Object.assign()
//Оператор Spread - створює копію масиву або обʼєкта з можливістю додавання нових значень.

let arrNumber = [11, 22, 33, 44];
let arrNumbersCopy = [...arrNumber];
console.log(arrNumbersCopy);

let client = {
    name: 'John',
    username: 'jonny',
    skills: ['html', 'css', 'js']
}
let client2 = {...client};
console.log(client2);
console.log(typeof client2);

console.log(client === client2);
console.log(client.skills === client2.skills);

//Метод Object.assign({ціль}, джерело-1, джерело-2) - дозволяє скопіювати характеристики с одного або більше обʼєктів в один єдиний

let obj1 = {name: 'Robert', age: 25};
let obj2 = {skills: ['html', 'css', 'js']};
let obj = Object.assign({}, obj1, obj2);
console.log(obj);
console.log(obj.skills === obj2.skills);

//Неглибоке копіювання копіює лише верхній рівень обʼєкта або масиву. Це означає, що примітивні типи даних копіюються повністю,
// а ссилочні копіюються не як нові, а як посилання на один і той самий обʼєкт даних


//JSON.stringify та JSON.parse
//JSON.stringify(obj) - перетворює масив або обʼєкт у строку JSON.
//JSON.parse(str) - перетворює строку JSON у масив або обʼєкт.
//Недоліки / обмеження:
// 	1.	Не копіює функції, методи об’єктів та нестандартні властивості (undefined, Symbol тощо).
// 	2.	Не працює з циклічними посиланнями (вкладені об’єкти, які посилаються один на одного).
// 	3.	Втрата прототипу: після JSON.parse об’єкт стає звичайним {}, без методів вихідного класу.
// 	4.	Не підтримує спеціальні типи даних, як Map, Set, Date напряму (хоча дати можна зберігати як рядки).

let client3 = JSON.parse(JSON.stringify(client));
console.log(client3);
console.log(typeof client3);
console.log(client3.skills === client.skills);


//StructuredClone(obj) - створює повну глибоку копію обʼєкта або масиву
//Недоліки / обмеження:
// 	1.	Не копіює функції та властивості з прототипами, якщо вони не серіалізовані.
// 	2.	Не підтримує деякі типи об’єктів, наприклад WeakMap і WeakSet.
// 	3.	Не може копіювати DOM-елементи (але звичайні об’єкти, масиви, Map/Set, Date, RegExp — без проблем).
// 	4.	Копіює тільки структуровані дані; все, що не підтримується, викликає помилку.

let client4 = structuredClone(client);
console.log(client4);
console.log(client4.skills === client.skills);
