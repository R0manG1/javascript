//#reLkOkTB29Q створити масив книжок (назва, кількість сторінок, автори , жанри).

let arrBooks = [
    {title: 'To Kill a Mockingbird', pagesCount: 336, author: ['Harper Lee'], genre: ['Fiction']},
    {title: 'The Great Gatsby', pagesCount: 180, author: ['F. Scott Fitzgerald', 'F. Scott Fitzgerald'], genre: ['Classic', 'Tragedy']},
    {title: 'Harry Potter and the Philosopher’s Stone', pagesCount: 223, author: ['J. K. Rowling'], genre: ['Fantasy']},
    {title: '1984', pagesCount: 328, author: ['George Orwell'], genre: ['Dystopian', 'Political fiction', 'Classic']},
    {title: 'The Pragmatic Programmer', pagesCount: 352, author: ['Andrew Hunt', 'David Thomas'], genre: ['Programming']}];

//– знайти найбільшу книжку.
let maxPagesBook = 0;
for (let i = 1; i < arrBooks.length; i++) {
    if (+arrBooks[i].pagesCount > +arrBooks[maxPagesBook].pagesCount) {
        maxPagesBook = i;
    }
}
console.log(`Найбільша книжка - ${arrBooks[maxPagesBook].title} - ${arrBooks[maxPagesBook].pagesCount} стр.`);
console.log('----------------------------------------');

//– знайти книжку/ки з найбільшою кількістю жанрів
let maxGenresBook = 0;
for (j = 1; j < arrBooks.length; j++) {
    if (arrBooks[j].genre.length > arrBooks[maxGenresBook].genre.length) {
        maxGenresBook = j;
    }
}
console.log(`Книжка з найбільшою кількістю жанрів - ${arrBooks[maxGenresBook].title} - ${arrBooks[maxGenresBook].genre}`);
console.log('----------------------------------------');

//– знайти книжку/ки з найдовшою назвою
let maxTitleLength = 0;
for (a = 1; a < arrBooks.length; a++) {
    if (arrBooks[a].title.length > arrBooks[maxTitleLength].title.length) {
        maxTitleLength = a;
    }
}
console.log(`Книжка з найдовшою назвою - ${arrBooks[maxTitleLength].title}`);
console.log('----------------------------------------');

//– знайти книжку/ки, які писали 2 автори
let twoAuthorsBook = 0;
let authors = 2;
console.log('Книги, які написали 2 автори: ');
while (twoAuthorsBook < arrBooks.length) {
    if (authors === arrBooks[twoAuthorsBook].author.length) {
        console.log(`${arrBooks[twoAuthorsBook].title}`);
    }
    twoAuthorsBook++;
}
console.log('----------------------------------------');

//– знайти книжку/ки, які писав 1 автор
let oneAuthorBook = 0;
let author = 1;
console.log('Книги, які написав 1 автор: ');
while (oneAuthorBook < arrBooks.length) {
    if (author === arrBooks[oneAuthorBook].author.length) {
        console.log(`${arrBooks[oneAuthorBook].title}`);
    }
    oneAuthorBook++;
}
