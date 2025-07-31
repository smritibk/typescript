var logInUser = function (userName, password, role) {
    if (role === void 0) { role = "guest"; }
    if (role === "admin") {
        if (password === "admin123") {
            return "Welcome admin ".concat(userName);
        }
    }
    else if (role === "employee") {
        if (password.indexOf("emp") === 0) {
            return "Welcome employee ".concat(userName);
        }
    }
    else if (role === "guest") {
        return "Welcome guest ".concat(userName);
    }
    else {
        function throwErr(errMsg) {
            throw new Error(errMsg);
        }
        return "Invalid role";
    }
};
console.log(logInUser("Smriti", "emp1234", "employee"));
