//#bolvdlhP - описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
// – знайти піковий туз
// – всі шістки
// – всі червоні карти
// – всі буби
// – всі трефи від 9 та більше

const cardsDeck = [];
const cardsSuite = ['spade', 'diamond', 'heard', 'clubs'];
const cardsValue = ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
for (const suite of cardsSuite) {
    for (const value of cardsValue) {
        cardsDeck.push({
            cardSuite: suite,
            cardValue: value,
            cardColor: (suite === 'heard' || suite === 'diamond') ? 'red' : 'black'
        });
    }
}
console.log(cardsDeck);

// – знайти піковий туз
let spadeJack = cardsDeck.find(card => (card.cardSuite === 'spade' && card.cardValue === 'Ace'));
console.log(spadeJack);

// – всі шістки
let sixCards = cardsDeck.filter(card => card.cardValue === '6');
console.log(sixCards);

// – всі червоні карти
let allRedCards = cardsDeck.filter(card => card.cardColor === 'red');
console.log(allRedCards);

// – всі буби
let allDiamondCards = cardsDeck.filter(card => card.cardSuite === 'diamond');
console.log(allDiamondCards);

// – всі трефи від 9 та більше
let allBigClubs = cardsDeck
    .filter(card => (card.cardSuite === 'clubs'
        && card.cardValue !== '6'
        && card.cardValue !== '7'
        && card.cardValue !== '8'));
console.log(allBigClubs);

//#EP5I1UUzAX Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// { spades:[], diamonds:[], hearts:[], clubs:[] }
let deckReduce = cardsDeck.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuite === 'spade') previousValue.spades.push(currentValue);
    else if (currentValue.cardSuite === 'diamond') previousValue.diamonds.push(currentValue);
    else if (currentValue.cardSuite === 'heard') previousValue.hearts.push(currentValue);
    else if (currentValue.cardSuite === 'clubs') previousValue.clubs.push(currentValue);
    return previousValue;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(deckReduce);
