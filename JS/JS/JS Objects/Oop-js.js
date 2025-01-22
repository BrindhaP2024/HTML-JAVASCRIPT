function Employee(name, job, salary) {
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.getDetails = function() {
        return `${this.name} is a ${this.job} earning $${this.salary} per year.`;
    };
}

function createEmployee() {
    // Creating an instance of the Employee object
    let employee = new Employee("Brindha", "MEAN Stack", 25000);

    let displayDiv = document.getElementById("employee-info");
    displayDiv.innerHTML = `
        <p>${employee.getDetails()}</p>
    `;
}
