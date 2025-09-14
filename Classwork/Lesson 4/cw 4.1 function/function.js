function writer(productTitle, productPrice, productDescription) {
    document.write(`
                    <div>
                        <h2>${productTitle}${productPrice}</h2>   
                        <p>${productDescription}</p>
                    </div>
                  `)
}

writer('milk', 22, 'milk is good');
writer('juice', 27, 'juice is good');
writer('tomato', 47, 'tomato is good');

let arrBooks = [
    {title: 'To Kill a Mockingbird', pagesCount: 336, author: ['Harper Lee'], genre: ['Fiction']},
    {title: 'The Great Gatsby', pagesCount: 180, author: ['F. Scott Fitzgerald', 'F. Scott Fitzgerald'], genre: ['Classic', 'Tragedy']},
    {title: 'Harry Potter and the Philosopher’s Stone', pagesCount: 223, author: ['J. K. Rowling'], genre: ['Fantasy']},
    {title: '1984', pagesCount: 328, author: ['George Orwell'], genre: ['Dystopian', 'Political fiction', 'Classic']},
    {title: 'The Pragmatic Programmer', pagesCount: 352, author: ['Andrew Hunt', 'David Thomas'], genre: ['Programming']}];

function arrPrinter(array) {
    for (const item of array) {
        console.log(item);
    }
}

arrPrinter(arrBooks);
console.log('----------------------------------------');

function footballPlayerFactory(name, age, position, number, nationality) {
    let player = {
        name: name,
        age: age,
        position: position,
        number: number,
        nationality: nationality
    }
    return player;
}

let p1 = footballPlayerFactory('Alexey Sishco', 25, 'goalkeeper', 7, 'Ukraine');
let p2 = footballPlayerFactory('Nik Jonson', 31, 'defender', 3, 'English');
let p3 = footballPlayerFactory('John Smith', 23, 'midfielder', 1, 'Spain');
let p4 = footballPlayerFactory('Alexey Sishco', 25, 'goalkeeper', 7, 'Ukraine');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
