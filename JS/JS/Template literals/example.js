// mathematical expression interpolation
let a = 57;
let b = 10;

let r = `sum of ${a},${b} is ${a+b}`;
console.log(r);

// string interpolation
let data = "Janani";
let wishing = `Hello, ${data}!`;
console.log(wishing); 

// multiLine
let multiLine = `This is an example specifies 
multiple lines 
string literal usage here.`;
console.log(multiLine);

// let items = ["Apple", "Banana", "Cherry"];
// let list = `
//     <ul>
//         ${items.map(item => `<li>${item}</li>`).join('')}
//     </ul>
// `;
// console.log(list);

let items = ["JAVA","Python","C++"];
let lists=`<ul>
${items.map(item => `<li>${item}</li>`).join('')}
</ul>
`;
console.log(lists)

