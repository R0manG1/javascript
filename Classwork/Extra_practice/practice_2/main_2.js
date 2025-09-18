// let browser = prompt('Enter browser name what you use:', '');
// if (browser === 'Edge') {
//     alert('You\'ve got the Edge!');
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }
//
// const number = +prompt('Enter a number (0 - 3):', '');
// switch (number) {
//     case 0:
//         alert('Zero');
//         break;
//     case 1:
//         alert('One');
//         break;
//     case 2:
//     case 3:
//         alert('Two or Three');
//         break;
//     default:
//         alert('Incorrect number');
// }

//Функція на знаходження простих чисел від 2 до n (для перевірки чисел використана додаткова функція)
// function showPrimes(n) {
//     for (let j = 2; j < n; j++) {
//         if (!isPrime(j)) continue;
//         else console.log(j);
//     }
// }
//
// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
//
// showPrimes(100);

// function checkAge(age){
//      return age > 18 ? true : confirm('Parents allowed?');
// }
// console.log(checkAge(19));
//
// function checkAge2(age){
//     return age > 18 || confirm('Parents allowed?');
// }
//
// console.log(checkAge2(16));
//
// function min(a,b){
//     return a < b ? a : b;
// }
// console.log(min(10,20));

let x = +prompt('Enter a number of base:', ''),
    n;
do {
    n = +prompt('Enter a number of exponent: (1 - 100) ', '');
} while (n < 1 || n > 100 || isNaN(n) || n === null);

function pow(x, n) {
    return x ** n;
}

alert(pow(x, n));
