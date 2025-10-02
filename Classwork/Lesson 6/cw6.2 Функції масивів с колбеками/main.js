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

// volleyballTeam.forEach(function (player, index, array){
//     console.log(player);
// })

// volleyballTeam.forEach(player => {
//     if (player.height > 190) console.log(player);
// });

// volleyballTeam.forEach(player => {
//     if (player.position.startsWith('set')) console.log(player);
// });

// let filteredPlayers = volleyballTeam.filter(player => player.age > 23);
// console.log(filteredPlayers);

// let filteredPlayers2 = volleyballTeam.filter((player, index) => index > 5);
// console.log(filteredPlayers2);

// let filteredPlayers2 = volleyballTeam.filter((player, index) => player.name.startsWith("I"));
// console.log(filteredPlayers2);


// let newTeam = volleyballTeam.map(function (player, index){
//     let newPlayer = {
//         id: index + 1,
//         name: player.name,
//         position: player.position,
//         height: player.height,
//         age: player.age
//     }
//     return newPlayer;
// });

let newTeam = volleyballTeam.map((player, index) => {
    return {id: index + 1, ...player};
});
console.log(newTeam);
