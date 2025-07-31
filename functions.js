"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
var myNum = addTwo(6);
console.log(myNum);
function getUpperCase(val) {
    return val.toUpperCase();
}
console.log(getUpperCase("Hello world!"));
var loggedInUser = function (name, email, isEmployee) {
    if (isEmployee === void 0) { isEmployee = false; }
    if (isEmployee) {
        return "I am ".concat(name);
    }
    else
        console.log("Not employee");
};
console.log(loggedInUser("Smriti", "smriti@gmail.com", true));
