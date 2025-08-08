//arrays
//one way of creating an array
var numbers = [1, 2, 3, 4, 5];
//another way of creating an array using the Array constructor
var moreNumbers = new Array(6, 7, 8, 9, 10);
var people = [];
people.push({
    name: "Alice",
    age: 30,
});
// console.log(superHeroes);
var superHeroes = [];
superHeroes.push({
    name: "Spider Man",
    power: "Web-Slinging & Spider-Sense",
    isActive: true,
});
superHeroes.push({
    name: "Iron Man",
    power: "Genius-level intellect & Powered Armor Suit",
    isActive: false,
});
superHeroes.push({
    name: "Captain America",
    power: "Super Soldier Serum & Shield",
    isActive: true,
});
console.log(superHeroes);
//array of an array
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix);
