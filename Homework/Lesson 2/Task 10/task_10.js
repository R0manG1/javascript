//#uwsz1RnTQJ1 – Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати, коли введені рівні числа.

let number1 = +prompt('Enter first number: ');
let number2 = +prompt('Enter second number: ');
if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else if (number1 === number2) {
    console.log('Numbers are equal');
} else {
    console.log('Incorrect input');
}
