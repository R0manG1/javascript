// Map — це структура даних, яка зберігає пари ключ → значення
let map = new Map();
// Додає або оновлює пару (створюємо асоціації)
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');
console.log(map);

let map2 = new Map();

let RP = {id: 'RP'};
map2.set(RP, {name: 'Roman', surname: 'Popov'});

let SV = {id: 'SV'};
map2.set(SV, {name: 'Sergej', surname: 'Vinchenko'});

let GB = {id: 'GB'};
map2.set(GB, {name: 'Gleb', surname: 'Borisov'});

// Отримує значення за ключем
console.log(map2.get({id: 'GB'}));
console.log(map2.get(SV));
// Видаляє значення за ключем (clear() - очищує увесь Map)
// map2.delete(SV);
// console.log(map2);
// Кількість елементів
console.log(map2.size);

// Повертає ітератор ключів
console.log(map2.keys());
console.log(Array.from(map2.keys()));

// Повертає ітератор значень
console.log(map2.values());
console.log(Array.from(map2.values()));

// Повертає пари [ключ, значення]
console.log(map2.entries());
console.log(Array.from(map2.entries()));
