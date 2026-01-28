//Datatypes in JavaScript
//1. primitive data types
// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// BigInt
//2. non-primitive data types
// Object
// Array
// Function

//1. Primitive Data Types
// Number
let num = 100;
console.log("num" , num); // Output: number

// String
let str = "Girnara Meet";
console.log("str" ,str); // Output: string

// Boolean
let bool = true;
console.log("bool" , bool); // Output: boolean

// Undefined
let undef;
console.log("undefined" , undef); // Output: undefined

// Null
let nll = null;
console.log("null", nll); // Output: object (this is a known quirk in JavaScript)

// Symbol
let sym = Symbol('sym');
console.log("sym" , sym); // Output: symbol

// BigInt
let bigIntNum = BigInt(9007199254740991);
console.log("bigIntNum",bigIntNum); // Output: bigint

//2. Non-Primitive Data Types
// Object
let obj = {
    name: "Meet Girnara",
    age: 20
};
console.log("obj", obj); // Output: object

// Array
let arr = [1, 2, 3, 4, 5];
console.log("array", arr); // Output: object

// Function
function  func() {
    return "Have a nice day!";
};
console.log(func()); // Output: Have a nice day!

function showvalues(value) {
    console.log("this is value :", num);
    if (value== 20) {
        console.log("value is 20");
    } else {
        console.log("value is not 20");
    }
}
showvalues(10);
showvalues(20);

//arithmetic operations

function aerithmeticOprations(a, b) {

console.log("Addition is :", a + b);
console.log("Multiplication is :", a * b);
console.log("Subtraction is :", a - b);
console.log("Division is :", a / b);
}
aerithmeticOprations(10, 20);

// arrow function

const add =(a , b) => a + b;
const div =(a , b) => a / b;
const multi =(a , b) => a * b;
const sub =(a , b) => a - b;
console.log("Addition :", add(30, 20));
console.log("Division:", div(10, 20));
console.log("Multiplication:", multi(30, 20));
console.log("Subtraction:", sub(10, 20));

// Assignment Operators
let value = 20;
console.log("Default value:", value);

value +=10
console.log(value);

value -=5
console.log(value);

value *=2
console.log(value);

value /=5
console.log(value);

// Logical Operators
let age = 20;
let hasId = true;
let name = "Meet Girnara";
let object = {
    age: 20,
    name: "Meet Girnara"
}

console.log("logical AND:", age >=18 && hasId);
console.log("logical OR:", age <=18 || hasId);
console.log("logical NOT:", !hasId);

console.log(typeof age);
console.log(typeof name);
console.log(typeof hasId);
console.log(typeof object);

//comparison operators
let val = 20;
let number = "20";

console.log("value == number:", val == number);
console.log("value === number:", val === number);
console.log("value != number:", val != number);
console.log("value !== number:", val !== number);
console.log("value > 15:", val > 15);
console.log("value < 25:", val < 25);
console.log("value >= 20:", val >= 20);
console.log("value <= 30:", val <= 30);