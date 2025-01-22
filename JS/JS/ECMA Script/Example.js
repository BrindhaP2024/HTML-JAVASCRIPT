// 1.let

let a = 10;
function letfun() {
    console.log("value of a:" + a);
}
letfun();

let x = 10;
if (true) {
    let x = 20; // BLOCKED SCOPE IS HERE
    console.log("Value of blocked-scope variable -x\t" + x);
}
console.log(x);

// 2.var

var y = 10;
if (true) {
    var y = 20; // function-scoped variable
    console.log(y);
}
console.log(y);

// 3.Const

const b = 90.986;
console.log("value of const:"+b);

for (let i = 0; i < 5; i++) {
    const value = i * 2;
    console.log(value);
}

for (const i = 0; i < 5; i++) {  // i in const so, can't be reassigned
    console.log(i);
}

// const with object:
const obj = { name: "John" };
obj = { name: "Jane" };
// ERROR IN BROWSER CONSOLE - Uncaught TypeError: Assignment to constant variable.
obj.name = "Jane";  
console.log(obj.name);

// const inside loop
const z = 10;
z = 20;
// ERROR IN BROWSER CONSOLE - Uncaught TypeError: Assignment to constant variable.
console.log(z);




const person = {name:"Brin",age:24};
person.name="arjun";
person = {name:"arjun"};  // Error: Assignment to constant variable.
console.log(person);





