function createUser(user) {
    return user;
}
console.log(createUser({
    name: "John",
    age: 30,
    isActive: true,
}));
function getArea(length) {
    console.log("The area is ".concat(length.l1 * length.l2));
}
getArea({ l1: 5, l2: 10 });
