let weakSet = new WeakSet();

let obj1 = {};
let obj2 = {};

// Adding objects
weakSet.add(obj1);
weakSet.add(obj2);

// Checking existence
console.log(weakSet.has(obj1));

// Deleting elements
weakSet.delete(obj2);
console.log(weakSet.has(obj2)); 