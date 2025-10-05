let volleyballTeam = [
    {name: "Andriy", position: "setter", height: 185, age: 22},
    {name: "Bohdan", position: "outside hitter", height: 192, age: 24},
    {name: "Vladyslav", position: "middle blocker", height: 198, age: 21},
    {name: "Dmytro", position: "opposite", height: 195, age: 26},
    {name: "Oleksandr", position: "outside hitter", height: 190, age: 23},
    {name: "Yuriy", position: "libero", height: 178, age: 22},
    {name: "Ihor", position: "middle blocker", height: 200, age: 25},
    {name: "Taras", position: "setter", height: 183, age: 20},
    {name: "Mykola", position: "outside hitter", height: 188, age: 24},
    {name: "Roman", position: "opposite", height: 194, age: 23}
];

volleyballTeam.forEach(function (player, index, array){
    console.log(player);
})

volleyballTeam.forEach(player => {
    if (player.height > 190) console.log(player);
});

volleyballTeam.forEach(player => {
    if (player.position.startsWith('set')) console.log(player);
});

let filteredPlayers = volleyballTeam.filter(player => player.age > 23);
console.log(filteredPlayers);

let filteredPlayers2 = volleyballTeam.filter((player, index) => index > 5);
console.log(filteredPlayers2);

// let filteredPlayers2 = volleyballTeam.filter((player, index) => player.name.startsWith("I"));
// console.log(filteredPlayers2);


let newTeam = volleyballTeam.map(function (player, index){
    let newPlayer = {
        id: index + 1,
        name: player.name,
        position: player.position,
        height: player.height,
        age: player.age
    }
    return newPlayer;
});
//
// let newTeam = volleyballTeam.map((player, index) => {
//     return {id: index + 1, ...player};
// });
console.log(newTeam);

let findByName = newTeam.find(player => player.name === 'Dmytro');
console.log(findByName);
let findByPosition = newTeam.find(player => player.position === 'opposite');
console.log(findByPosition);

console.log(newTeam.every(player => player.age > 20));
console.log(newTeam.some(player => player.age > 20));

let sortFirst = [...volleyballTeam].sort((p1, p2) => {
    return p1.age - p2.age;
})
console.log(sortFirst);

let sortSecond = volleyballTeam.slice().sort((p1, p2) => {
    if (p1.name > p2.name) return 1;
    else if (p1.name < p2.name) return -1;
    return 0;
})
console.log(sortSecond);
console.log(volleyballTeam);

//Метод .reduce() для сортування масиву на два окремих по певним крітеріям
let reduce = volleyballTeam.reduce((accumulator, player) => {
    if (player.height < 190) accumulator.heightNormal.push(player)
    else accumulator.heightMax.push(player)
    return accumulator;
}, {heightNormal: [], heightMax: []})

console.log(reduce);

let reduce2 = volleyballTeam.reduce((accumulator, player) => {
    if (player.age < 24) accumulator[0].push({name: player.name, age: player.age})
    else accumulator[1].push({name: player.name, age: player.age})
    return accumulator;
}, [[], []]);

console.log(reduce2);

let reduce3 = volleyballTeam.reduce((newArray, player) => {
    if (player.position === 'setter') {
        newArray.setter.push(player);
    } else if (player.position === 'middle blocker') {
        newArray.middle_blocker.push(player);
    } else if (player.position === 'libero') {
        newArray.libero.push(player);
    } else if (player.position === 'outside hitter') {
        newArray.outside_hitter.push(player);
    } else {
        newArray.opposite.push(player);
    }
    return newArray;
}, {setter: [], middle_blocker: [], libero: [], outside_hitter: [], opposite: []});

console.log(reduce3);
