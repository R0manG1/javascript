//#UMoNq4biWGe – У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Enter day (1 - 31):');
if (day >= 1 && day <=10){
    console.log('First decade!');
} else if (day >= 11 && day <=20){
    console.log('Second decade!');
} else if (day >= 21 && day <=31){
    console.log('Third decade!');
} else {
    day = +prompt('Incorrect! Enter day (1 - 31):');
}
