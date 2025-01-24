let weakMap = new WeakMap();

let obj1 = {};
let obj2 = {};

// Setting values
weakMap.set(obj1, 'weakmap obj1 here');
weakMap.set(obj2, 'Weak map obj2 here!');

// Getting values
console.log(weakMap.get(obj1)); 
// Checking existence
console.log(weakMap.has(obj2));

// Deleting values
weakMap.delete(obj2);
console.log(weakMap.has(obj2));
