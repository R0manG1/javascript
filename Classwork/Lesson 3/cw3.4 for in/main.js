let car = {
    name: 'BMW E36',
    color: 'black',
    year: 2014,
    price: '8000$'
}

for (const fieldName in car) {
    console.log(fieldName, car[fieldName]);
}
console.log('');

let users = [
    {id: 1, name: 'Jack', carModel: 'BMW E36'},
    {id: 2, name: 'John', carModel: 'Audi A4'},
    {id: 3, name: 'Jane', carModel: 'Mercedes E-class'},
    {id: 4, name: 'Jill', carModel: 'Lamborghini Huracan' },
    {id: 5, name: 'Jim', carModel: 'Ferrari 488'},
    {id: 6, name: 'Johnny', carModel: 'Porsche 911'},
    {id: 7, name: 'Jessica', carModel: 'Lamborghini Gallardo'},
    {id: 8, name: 'Jason', carModel: 'Lamborghini Aventador'},
    {id: 9, name: 'Jeff', carModel: 'Lamborghini Huracan'},
    {id: 10, name: 'Jenny', carModel: 'Lamborghini Gallardo'},
    {id: 11, name: 'Jessie', carModel: 'Lamborghini Aventador'},
    {id: 12, name: 'Johnnie', carModel: 'Porsche 911'}
]
for (const user of users) {
    for (const fieldName in user) {
        // console.log(fieldName, user[fieldName]);
        document.write(`<div>${fieldName} - ${user[fieldName]}</div>`)
    }
    document.write(`<div>---------------------------------------------</div>`)
}
