// Typed arrays allow you to work directly with raw binary data and are useful when you need more control over memory allocation,
//  especially for tasks like graphics or performance-sensitive operations.


let arr = new Uint8Array(4);

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;

console.log(arr); 

// Access individual elements
console.log(arr[0]); 
console.log(arr[2]); 



let floatArr = new Float32Array(3);

floatArr[0] = 1.23;
floatArr[1] = 4.56;
floatArr[2] = 7.89;

console.log(floatArr);
