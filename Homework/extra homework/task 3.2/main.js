//#qLQLJSeN7i – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = arr.length - 1;
while (i >= 0) {
    if (i % 2) {
        console.log(arr[i]);
    }
    i--;
}
console.log('');

for (let n = arr.length - 1; n >= 0; n--) {
    if (n % 2) {
        console.log(arr[n]);
    }
}
console.log('');

let a = arr.length - 1;
while ( a >= 0 ) {
    if (arr[a] % 2 === 0) {
        console.log(arr[a]);
    }
    a--;
}
console.log('');

for (let j = arr.length - 1; j >= 0; j--) {
    if (arr[j] % 2 === 0) {
        console.log(arr[j]);
    }
}
console.log('');


let b = arr.length - 1;
while ( b >= 0 ){
    if (arr[b] % 3 === 0){
        arr[b] = 'okten';
        b--;
    }
}
console.log(arr);


