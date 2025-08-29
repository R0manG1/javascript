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

let i = 0;
while ( i < users.length ) {
    let user = users[i];
    console.log(`ID: ${user.id} Name: ${user.name} Car model: ${user.carModel}`);
    console.log('---------------------------------------------');
    i++;
}
console.log('**************************************************');

let a = 0;
do {
    let user = users[a];
    console.log(`ID: ${user.id} Name: ${user.name} Car model: ${user.carModel}`);
    a++;
} while ( a < users.length );
