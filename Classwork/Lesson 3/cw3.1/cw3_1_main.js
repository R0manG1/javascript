// Інкременти та декременти
//Інкременти
let x = 0;
x = x + 1;
console.log(x);
x++;
console.log(x);
x += 3;
console.log(x);
++x;
console.log(x);
x = 4;
x *= 2;
console.log(x);
//Декременти
let a = 4;
a--;
console.log(a);
a-=2;
console.log(a);
a = 4;
a /= 2;
console.log(a);

//Різниця між префіксним та постфіксним інкрементом та декрементом
// ++a - префіксний / a++ - постфіксний
let b = 0;
let c = b++;
console.log(b, c); // b=1; c=0;

let s = 1;
let d = ++s;
console.log(s, d); // s=2; d=2;
