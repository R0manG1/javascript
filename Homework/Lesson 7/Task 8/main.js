//#gsKLAsNWM *Через Array.prototype. створити власний foreach, filter

const users = [
    { ID: 1, Name: "Alice", Age: 25 },
    { ID: 2, Name: "Bob", Age: 30 },
    { ID: 3, Name: "Charlie", Age: 28 },
    { ID: 4, Name: "Diana", Age: 22 },
    { ID: 5, Name: "Ethan", Age: 27 },
    { ID: 6, Name: "Fiona", Age: 31 },
    { ID: 7, Name: "George", Age: 24 },
    { ID: 8, Name: "Hannah", Age: 26 },
    { ID: 9, Name: "Ivan", Age: 29 },
    { ID: 10, Name: "Julia", Age: 23 }
];

//Власний forEach
Array.prototype.newForEach = function(callback) {
    for (let i = 0; i < this.length - 1; i++) {
       callback(this[i], i, this);
    }
}

//Приклад роботи newForEach
const newUserArray = users.newForEach( (item, index) => {
    if (index > 3) {
        return console.log(item);
        }
});
console.log(newUserArray);


//Власний newFilter
Array.prototype.newFilter = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length - 1; i++) {
        if (callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

//Приклад роботи newFilter
const newFilterArray = users.newFilter( (item) => item.Age > 23 && item.Age < 30);
console.log(newFilterArray);
