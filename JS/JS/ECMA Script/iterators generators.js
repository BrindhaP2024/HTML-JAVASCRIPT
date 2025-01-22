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
// gen2
const iter = {
    counter: 0,
    next() {
        return {
            value: this.counter++,  // Use 'this.counter' to access the counter property
        };
    }
};

console.log(iter.next().value); // Output: 0
console.log(iter.next().value); // Output: 1
console.log(iter.next().value);

function* checkGen(){
    const arrgen =[1,3,7];
    yield *arrgen;
}
const numgen = checkGen();
console.log(numgen.next());
console.log(numgen.next());
