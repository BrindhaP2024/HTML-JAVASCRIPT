// helps to print only the rest things

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others);

const [first, ...others2] = [1, 2, 3];
console.log(others2);
