//#sA3Gg1sCp – Створити 3 об’єкти, які описують книги.
// Поля об’єкту : title, pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'War and Peace',
    pageCount: 1225,
    genre: 'Historical Fiction',
    authors: [{name: 'Lev Tolstoy', age: 41}, {name: 'Vladimir Nabokov', age: 34}]
};
let book2 = {
    title: 'Pride and Prejudice',
    pageCount: 432,
    genre: 'Romance',
    authors: [{name: 'Jane Austen', age: 37}, {name: 'Henry V', age: 41}]
};
let book3 = {
    title: 'The Great Gatsby',
    pageCount: 180,
    genre: 'Classic Fiction',
    authors: [{name: 'F. Scott Fitzgerald', age: 29}, {name: 'J. K. Rowling', age: 30}]
};
console.log(book1);
console.log(book2);
console.log(book3);
