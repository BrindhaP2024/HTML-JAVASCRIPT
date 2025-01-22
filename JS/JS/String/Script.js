let str = "   Brindha, MEAN Stack Developer   ";

let str1 = "   Raghav, a passionate Full Stack Developer, proficient in JavaScript, Node.js, React, and MongoDB, aiming to build innovative solutions to solve real-world problems.   ";
//prints innerText
document.getElementById("original-string").innerText = str;

//length of the string
document.getElementById("length").innerText = str.length;

// charAt
document.getElementById("charAt").innerText = str.charAt(5);

document.getElementById("charCodeAt").innerText = str.charCodeAt(5);

document.getElementById("concat").innerText = str.concat(" - MEAN Stack Developer");//concadenation

document.getElementById("includes").innerText = str.includes("MEAN"); //including a sting

document.getElementById("indexOf").innerText = str.indexOf("Stack");//find the index of string

document.getElementById("lastIndexOf").innerText = str.lastIndexOf("e"); 

document.getElementById("localeCompare").innerText = str.localeCompare("Brindha");

document.getElementById("match").innerText = str.match(/Stack/);//match checks here for the string
//repeat chars
document.getElementById("repeat").innerText = str.repeat(3);

document.getElementById("replace").innerText = str.replace("Brindha", "Developer");
document.getElementById("search").innerText = str.search("MEAN");
document.getElementById("slice").innerText = str.slice(0, 6);

document.getElementById("split").innerText = str.split(" ").join(", ");

document.getElementById("startsWith").innerText = str.startsWith("Brindha");
document.getElementById("endsWith").innerText = str.trim().endsWith("Developer");
document.getElementById("substring").innerText = str.substring(0, 5);

document.getElementById("toLowerCase").innerText = str.toLowerCase();
document.getElementById("toUpperCase").innerText = str.toUpperCase();
//trim and pad methods
document.getElementById("trim").innerText = str1.trim(); 
document.getElementById("trimStart").innerText = str1.trimStart(); 
document.getElementById("trimEnd").innerText = str1.trimEnd(); 

document.getElementById("padStart").innerText = str1.padStart(100, "*");
document.getElementById("padEnd").innerText = str1.padEnd(100, "*");

document.getElementById("normalize").innerText = str1.normalize(); 
document.getElementById("fromCharCode").innerText = String.fromCharCode(65, 66, 67); 