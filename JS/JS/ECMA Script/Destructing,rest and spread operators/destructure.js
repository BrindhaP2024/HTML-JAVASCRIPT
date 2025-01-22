function destructure({ name, age }) {   //1.destructuring inside the params itself
    console.log(`Hello, ${name}. You are ${age} years old.`);
}
const person = { name: "uma", age: 40 };
destructure(person);

// 2.Array destructuring

const one = [1, 2, 3];
const [n1, n2, n3] = one;
console.log(n1); 
console.log(n2); 
console.log(n3); 

const two = [1, 2, 3, 4];
const [t1, , t3] = two;
console.log(t1); 
console.log(t3); 


const numbers = [1];
const [first, second = 2] = numbers;
console.log(first); 
console.log(second); 

const nestedn = [1, [2, 3], 4];
const [na1, [na2, na3], na4] = nestedn;
console.log(na1); // 1
console.log(na2); // 2
console.log(na3); // 3
console.log(na4); // 4

// 3.object destructuring

const objsample = { name: "louis", age: 25, city: "New York" };
const { name, age, city } = objsample;
console.log(name); 
console.log(age); 
console.log(city); 

const objsample1 = { name: "Banu", age: 20 };
const { name: fullName, age: years } = objsample1;
console.log(fullName); // Bob
console.log(years); // 30

const person1 = {
    name1: "David",
    address: {
        city1: "Los Angeles",
        state: "California"
    }
};
const { name1, address: { city1, state } } = person1;
console.log(name); 
console.log(city); 
console.log(state);
