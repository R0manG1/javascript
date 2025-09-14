//#SIdMd0hQ – створити функцію, яка приймає масив та виводить кожен його елемент
const arrStudents = [
    {id: 1, firstName: 'Oleksandr', lastName: 'Shevchenko', age: 22, technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript']},
    {id: 2, firstName: 'Maria', lastName: 'Kovalenko', age: 24, technologies: ['HTML', 'CSS', 'MongoDB', 'MySQL']},
    {id: 3, firstName: 'Ivan', lastName: 'Bondar', age: 21, technologies: ['HTML', 'CSS', 'JavaScript']},
    {id: 4, firstName: 'Olena', lastName: 'Honchar', age: 23, technologies: ['HTML', 'CSS', 'TypeScript', 'MongoDB']},
    {id: 5, firstName: 'Dmytro', lastName: 'Savchuk', age: 25, technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'MySQL']},
    {id: 6, firstName: 'Anna', lastName: 'Lytvyn', age: 20, technologies: ['HTML', 'CSS', 'JavaScript']},
    {id: 7, firstName: 'Mykhailo', lastName: 'Oliinyk', age: 26, technologies: ['HTML', 'CSS', 'TypeScript', 'MySQL']},
    {id: 8, firstName: 'Sofiia', lastName: 'Danyliuk', age: 22, technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'MongoDB']},
    {id: 9, firstName: 'Roman', lastName: 'Kravets', age: 27, technologies: ['HTML', 'CSS', 'MySQL']},
    {id: 10, firstName: 'Kateryna', lastName: 'Melnyk', age: 23, technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB']}
];

function printStudents(array) {
    for (const item of array) {
        console.log(item);
    }
}

printStudents(arrStudents);

//#59g0IsA – створити функцію, яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент
function paragraphCreator(text) {
    let p = `<p>${text}</p>`;
    return document.write(p);
}

paragraphCreator('Hello World!');
paragraphCreator('Hello Okten!');

