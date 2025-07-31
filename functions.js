"use strict";
// function addTwo(num: number) {
//   return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let myNum = addTwo(6);
// console.log(myNum);
// function getUpperCase(val: string) {
//   return val.toUpperCase();
// }
// console.log(getUpperCase("Hello world!"));
// let loggedInUser = (
//   name: string,
//   email: string,
//   isEmployee: boolean = false
// ) => {
//   if (isEmployee) {
//     return `I am ${name}`;
//   } else return "Not employee";
// };
// console.log(loggedInUser("Smriti", "smriti@gmail.com"));
//more on functions
//anonymous functions
var heros = ["spiderman", "thor", "ironman"];
console.log(heros.map(function (hero) {
    return "Hero is ".concat(hero);
}));
heros.forEach(function (hero) {
    console.log(hero.toUpperCase());
});
