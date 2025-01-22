
let jsonData = [
    {
        "name": "Amit Sharma",
        "occupation": "Software Engineer"
    },
    {
        "name": "Priya Gupta",
        "occupation": "Doctor"
    },
    {
        "name": "Rajesh Kumar",
        "occupation": "Teacher"
    },
    {
        "name": "Sita Rani",
        "occupation": "Nurse"
    },
    {
        "name": "Arjun Verma",
        "occupation": "Actor"
    }
];


let displayDiv = document.getElementById("json-data");

jsonData.forEach(function (person) {
    let personInfo = `<p>Name: ${person.name} - Occupation: ${person.occupation}</p>`;
    displayDiv.innerHTML += personInfo;  
});
