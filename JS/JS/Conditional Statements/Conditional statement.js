let accountBalance = 1200;
let withdrawalAmount = 1500;
// if else
if (accountBalance >= withdrawalAmount) {
    console.log("Withdrawal successful. Your new balance is Rs." + (accountBalance - withdrawalAmount));
} else {
    console.log("Insufficient funds. You have only Rs." + accountBalance + " in your account.");
}
// if else if else
let userRole = "admin";
if (userRole === "admin") {
    console.log("Welcome, Admin!");
} else if (userRole === "user") {
    console.log("Welcome, User!");
} else {
    console.log("Access Denied.");
}

let timeOfDay = 14;

if (timeOfDay < 12) {
    console.log("Good morning!");
} else if (timeOfDay < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

// Switch statement
let score = 75;
let message = (score >= 90) ? "Grade A" : (score >= 80) ? "Grade B" : (score >= 70) ? "Grade C" : "Grade F";
console.log(message);

switch (score) {
    case 90:
        console.log("Excellent");
        break;
    case 80:
        console.log("Good");
        break;
    case 70:
        console.log("Average");
        break;
    default:
        console.log("Poor");
}
