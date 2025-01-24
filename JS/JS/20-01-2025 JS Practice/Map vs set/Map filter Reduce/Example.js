const MapNumbers = [1, 2, 3, 4, 5];
const doubled = MapNumbers.map(num => num * 2);
console.log(doubled);


const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const reduceNumbers = [1, 2, 3, 4, 5];
const sum = reduceNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


const n = [1, 2, 3, 4, 5];
const result = n
  .filter(n => n % 2 === 0) // Filter even numbers
  .map(n => n * 2)          // Double each even number
  .reduce((s, n) => sum + n, 0); // Sum them up

console.log(result); 


