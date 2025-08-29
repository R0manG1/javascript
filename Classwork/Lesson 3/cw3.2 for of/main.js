let users = [
    {name: 'Igor', age: 25, status: 'active'},
    {name: 'Nicola', age: 31, status: 'not active'},
    {name: 'Anna', age: 23, status: 'active'},
    {name: 'Rim', age: 34, status: 'not active'},
    {name: 'Olia', age: 23, status: 'active'},
    {name: 'Victor', age: 23, status: 'not active'}
]
debugger;
for (let user of users) {
    if (user.status === 'active') {
        console.log(user.name);
    }
}
