// Arithmetic operators
let a = 5;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
// Assignment operator

let ao = 5;
console.log(ao += 3);
console.log(ao -= 2);
console.log(ao *= 2);
console.log(ao /= 4);
console.log(ao %= 2);
console.log(ao **= 2);

// Comparison operator
console.log(5 == '5');
console.log(5 === '5');
console.log(5 != 3);
console.log(5 !== '5');
console.log(10 > 5);
console.log(5 < 10);
console.log(5 >= 5);
console.log(5 <= 10);

// Logical Operator
console.log(true && false);
console.log(true || false);
console.log(!true);

// Ternary operator

let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);

// Typeof or instanceof operator
let str = "Hello";
console.log(typeof str);
console.log(str instanceof String);
// Bitwise operator

let x = 5;
let y = 3;

console.log(x & y);
console.log(x | y);
console.log(x ^ y);
console.log(~x);
console.log(x << 1);
console.log(x >> 1);

// Unary operator

let u = 5;
console.log(+u);
console.log(-u);
console.log(++u);
console.log(--u);
console.log(u++);
console.log(u--);
console.log(!true);

// Spread Operator and Rest Parameter

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr);

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));
// Destructuring Assignment
// Array Destructuring
// Object Destructuring

let [x1, y1] = [1, 2];
console.log(x1);
console.log(y1);

let person = { name: "Arun", age: 25 };
let { name, age1 } = person;
console.log(name);
console.log(age);
// Nullish Coalescing Operator
let x3= null;
let y3= "Hello";
console.log(x ?? y);

// Optional Chaining Operator
let user = { name: "Alice", profile: { age: 30 } };
console.log(user.profile?.age);
console.log(user.address?.city);



// Logical Assignment Operators
let x2 = null;
let y2 = "Hello";

x2 ||= y2;
console.log(x2);

x2 &&= "World";
console.log(x2);

let z = undefined;
z ??= "Default";
console.log(z);
