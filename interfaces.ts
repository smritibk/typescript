//loosely for of a class

interface User1 {
  readonly dbId: number; //readonly property
  email: string;
  userId: number;
  googleID?: string; //optional property
  //   startTrial: () => string; //method
  startTrial(): string; //method with a different syntax
  getCoupon(couponName: string, value: number): number; //method with parameters and return type
}

interface User1 {
  githubToken: string; //optional property
}

// Adding a new property to the User1 interface is allowed 


//extending an interface
// This allows us to create a new interface that inherits properties from the User1 interface.
interface Admin1 extends User1 {
    role:"admin"|"ta"|"learner"; //adding a new property with union type
}

const Henry: Admin1 = {
  dbId: 123,
  email: "henry@gmail.com",
  userId: 1,
  githubToken: "gh_12345",
  role: "admin",
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (couponName: string, value: number): number => {
    console.log(`Coupon name is ${couponName}`);
    return value; // returning a number
  },
};

console.log(Henry);
console.log(Henry.startTrial());
console.log(Henry.getCoupon("PASS123", 10));
