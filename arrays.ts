//arrays

//one way of creating an array
let numbers: number[] = [1, 2, 3, 4, 5];

//another way of creating an array using the Array constructor
let moreNumbers: Array<number> = new Array(6, 7, 8, 9, 10);


type Person = {
  name: string;
  age: number;
};

let people: Array<Person> = [];

people.push({
  name: "Alice",
  age: 30,
});

//creating an array of objects with specific properties
type superHero = {
  name: string;
  power: string;
  isActive: boolean;
};
// console.log(superHeroes);

let superHeroes: superHero[] = [];

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
