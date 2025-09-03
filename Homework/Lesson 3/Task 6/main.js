// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://cdn.shopify.com/s/files/1/0631/9793/7847/files/l5tiooe7pvxvcbcrxrsk.png?v=1714156923'
    },
];
for (const product of products) {
    document.write(`
<div class="product_card">
<h3 class="product_title">${product.title}. Price - ${product.price} UAH</h3>
<img src="${product.image}" alt="product image" class="product_image"></img>
</div>`);
}
