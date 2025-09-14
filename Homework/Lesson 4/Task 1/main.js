//#I2XsG6f – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
function rectangleArea(aNum, bNum) {
    return aNum * bNum;
}

let s = rectangleArea(4, 6);
console.log(`Площа прямокутника: ${s}`);
console.log('------------------------------------');

//#ETGAxbEn8l – створити функцію, яка обчислює та повертає площу кола з радіусом r

function circleArea(radiusNum) {
    return Math.PI * radiusNum * radiusNum;
}

let s2 = circleArea(5);

console.log('Площа кола з радіусом 5: ' + s2.toFixed(3));
console.log('------------------------------------');

//#Mbiz5K4yFe7 – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
function cylnderArea(radiusNum, heightNum) {
    return 2 * Math.PI * radiusNum * radiusNum + 2 * Math.PI * radiusNum * heightNum
}

let s3 = cylnderArea(5, 20);
console.log('Площа циліндра з радіусом 5 та висотою 20: ' + s3.toFixed(3));
console.log('------------------------------------');
