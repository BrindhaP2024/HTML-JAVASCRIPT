class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    displayInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}


function AdminUser(name, email, role) {
    User.call(this, name, email);
    this.role = role;
}

AdminUser.prototype = Object.create(User.prototype);

AdminUser.prototype.manageUsers = function () {
    return `${this.name} (Admin) can manage users.`;
};

function NormalUser(name, email, profileStatus) {
    User.call(this, name, email);
    this.profileStatus = profileStatus;
}

NormalUser.prototype = Object.create(User.prototype);

NormalUser.prototype.updateProfile = function () {
    return `${this.name} is updating their profile. Status: ${this.profileStatus}`;
};

let user1 = new User("John Doe", "john.doe@example.com");
let admin = new AdminUser("Alice Admin", "alice.admin@example.com", "Super Admin");
let normalUser = new NormalUser("Bob User", "bob.user@example.com", "Active");

let userInfoDiv = document.getElementById("user-info");
userInfoDiv.innerHTML = `
    <h3>User Information</h3>
    <p>${user1.displayInfo()}</p>
    <p>${admin.displayInfo()}</p>
    <p>${normalUser.displayInfo()}</p>
  `;

let adminActionsDiv = document.getElementById("admin-actions");
adminActionsDiv.innerHTML = `
    <h3>Admin Actions</h3>
    <p>${admin.manageUsers()}</p>
    <p>${normalUser.updateProfile()}</p>
  `;

console.log(user1.displayInfo());
console.log(admin.manageUsers());
console.log(normalUser.updateProfile());
