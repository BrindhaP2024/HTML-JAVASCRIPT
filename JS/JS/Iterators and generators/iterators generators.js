const arr = [1, 2, 3];

for (const value of arr) {
    console.log(value); 
}


const arr1 = [1, 2, 3];
const iterator = arr1[Symbol.iterator](); 

console.log(iterator.next()); 
console.log(iterator.next());
console.log(iterator.next()); 
console.log(iterator.next()); 


function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const numGen = numbers(); 

console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next()); 
console.log(numGen.next());


function* infiniteNumbers() {
    let n = 0;
    while (true) {
        yield n++;
    }
}

const gen = infiniteNumbers();

console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

