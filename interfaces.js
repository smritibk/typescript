//loosely for of a class
var Henry = {
    dbId: 123,
    email: "henry@gmail.com",
    userId: 1,
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (couponName, value) {
        console.log("Coupon name is ".concat(couponName));
        return value; // returning a number
    },
};
console.log(Henry);
console.log(Henry.startTrial());
console.log(Henry.getCoupon("PASS123", 10));
