//#iBvqtjEm – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код, який буде присвоювати змінній х значення “default”,
// якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті,
// які приводиться до false, а це 0 null undefined і тд).

// let x = '';
// if (x === 0 || x === null || x === undefined || x === false || x === '') {
//     x = 'default';
//     console.log(x);
// } else {
//     console.log(x);
// }

let x = '';
if (!x) {
    x = 'default';
    console.log(x);
} else {
    console.log(x);
}
