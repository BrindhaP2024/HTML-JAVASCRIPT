// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// while 
let i = 0;
while (i < 5) {
    console.log("Iteration:", i);
    i++;
}
// do...while
let J = 0;
do {
    console.log("Iteration:", J);
    J++;
} while (J < 5);

// for in 
const person = {
    name: "Abcd",
    age: 24,
    city: "Chennai"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for of
let text = "Hello";

for (let char of text) {
    console.log(char);
}

// break 

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; 
    }
    console.log(i);
}

// continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i);
}

// for each
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

