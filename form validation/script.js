function handleSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
 
    // Basic validation
    if (!name || !email || !password) {
        alert("All fields are required.");
        return;
    }
 
    // Name validation (must be at least 2 characters)
    if (name.length < 2) {
        alert("Name must be at least 2 characters long.");
        return;
    }
 
    // Password validation (must be at least 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
 
    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
 
    alert("Signup successful!");
    // Redirect to login page after successful signup
    window.location.href = "login.html";
}
 
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
 
    // Basic validation
    if (!email || !password) {
        alert("All fields are required.");
        return;
    }
 
    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
 
    alert("Login successful!");
}