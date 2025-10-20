//#nkMXISv – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client
function Client(id, name, surname, email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let client1 = new Client(1, 'Igor', 'Volchenko', 'volk@gmail.com', '+380964533234', new Product('Phone', '400$'), new Product('Coffee machine', '600$'));
console.log(client1);

const clients = [
    new Client(1, 'Igor', 'Volchenko', 'volk@gmail.com', '+380964533234', new Product('Phone', '849$'), new Product('Headphones', '289$')),
    new Client(2, 'Anna', 'Voloshina', 'voloshina55@gmail.com', '+380764533412', new Product('PS5', '1199$'), new Product('Smart TV', '600$')),
    new Client(3, 'Anastasia', 'Carpenko', 'nastya29@gmail.com', '+380985411215', new Product('Headphones', '289$'), new Product('Phone', '500$')),
    new Client(4, 'Roman', 'Hodovichenko', 'rmgod@gmail.com', '+380673422956', new Product('Phone', '600$')),
    new Client(5, 'Iryna', 'Pokrovska', 'irisha@gmail.com', '+380984677812', new Product('Coffee machine', '300$')),
    new Client(6, 'Maxim', 'Prokopenko', 'maxon33@gmail.com', '+380974355342', new Product('Smartwatch', '599$'), new Product('Phone', '500$')),
    new Client(7, 'Volodymyr', 'Grushko', 'vvgg43@gmail.com', '+38098554322111', new Product('Smart TV', '2200$')),
    new Client(8, 'Vika', 'Borodina', 'vikusik@gmail.com', '+380685433986', new Product('Hair straightener', '100$'), new Product('Headphones', '289$'), new Product('XBox', '900$')),
    new Client(9, 'Anton', 'Denisenko', 'anton99@gmail.com', '+380989533912', new Product('PS5', '1000$')),
    new Client(10, 'Egor', 'Kulishenko', 'kulish@gmail.com', '+380974300203', new Product('Smart TV', '800$'))
]

console.log(clients);

const clientsOrders = [];
clients.forEach(client => clientsOrders.push(client.order));
console.log(clientsOrders);

//#8abtVjRv – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
let sortByOrdersSize = [...clients].sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortByOrdersSize);
