//Логічні розгалуження if

// let age = +prompt('Enter your age:');
// console.log(age);
// if (age >= 18) {
//     console.log('You are old enough to vote');
// }
// else{
//     console.log('You are not old enough to vote');
// }

// let color = prompt('Enter color:');
// if (color === 'green') {
//     if (confirm('Is road clear?')){
//         console.log('Go!');
//     } else {
//         console.log('Just wait!');
//     }
// } else if (color === 'yellow') {
//     console.log('Wait!');
// } else if (color === 'red') {
//     console.log('Stop!');
// } else {
//     console.log('Unknown color');
// }

// let color = prompt('Enter color:');
// let isRoadClear = confirm('Is road clear?');
// if (color === 'green' && isRoadClear) {
//     console.log('Go!');
// } else if (color === 'yellow') {
//     console.log('Wait!');
// } else if (color === 'red') {
//     console.log('Stop!');
// } else {
//     console.log('Unknown color');
// }

//Логічні розгалуження switch

// let color = prompt('Enter color:');
// switch (color) {
//     case 'green':
//         console.log('Go!');
//         break;
//     case 'yellow':
//             console.log('Wait!');
//             break;
//     case 'red':
//         console.log('Stop!');
//         break;
//     default:
//             console.log('Unknown color');
// }

// let color = prompt('Enter color:');
// switch (color) {
//     case 'green':
//         console.log('Go!');
//         break;
//     case 'yellow':
//         console.log('Just Wait!');
//         break;
//     case 'red':
//         console.log('Stop!');
//         break;
//     default:
//         console.log('Unknown color');
// }
//Приведення NaN до булевого типу
// let a = [] / 'asd';
// console.log(a);
// console.log(!!a);

//Тернарний оператор
let user = {
    name: 'Roman',
    age: 25,
    city: 'Kyiv',
    country: 'Ukraine',
    gender: 'male',
}

let isUkraine = user.country === 'Ukraine' ? 'Yes' : 'No';
console.log(isUkraine);
