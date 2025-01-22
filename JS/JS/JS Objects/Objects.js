function createObject() {

    let person = {
        name: "Arul Kumaran",
        age: 30,
        city: "Chennai"
    };

    let displayDiv = document.getElementById("object-display");
    displayDiv.innerHTML = `
        <p>Name: ${person.name}</p>
        <p>Age: ${person.age}</p>
        <p>City: ${person.city}</p>
    `;
}
