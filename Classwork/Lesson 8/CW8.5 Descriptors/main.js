let user = {
    firstName: 'Frank',
    lastName: 'Dilan'
}
Object.defineProperty(
    user,
    'id',
    {
        value: 120,
        writable: false,
        enumerable: false,
        configurable: false,
})
console.log(user);
user.id = 130;
console.log(user);

for (const userKey in user) {
    console.log(userKey);
}

Object.defineProperty(
    user,
    'id',
    {
        value: 140,
        writable: false,
        enumerable: false,
        configurable: false,
    })
console.log(user);
