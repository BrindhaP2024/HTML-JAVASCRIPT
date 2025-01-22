// Accessing before declaring --> Hoisting
// Variable,function and class declerations moved to top of the scope where it is defined

// var -- it is basically attached with window object 
console.log(hoistchecker);//hoisted as undefined

var hoistchecker = "passionate learner!"
console.log(hoistchecker);

// const & let - It stores in a seperate memory and lock untill the js assigned js to that...
console.log(lethoistchecker); 
let  lethoistchecker = "Brindha"
console.log(lethoistchecker);

console.log(constvalue);
const constvalue = "Const Hoisting";
console.log(constvalue);


// temporal dead zone
// the time when the variable is unavailable is moved to the temporal dead zone and shows error 