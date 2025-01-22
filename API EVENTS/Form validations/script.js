document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const namePattern = /^[A-Za-z]{1,20}$/;
    if (!namePattern.test(name)) {
        isValid = false;
        document.getElementById('name').classList.add('is-invalid');
    } else {
        document.getElementById('name').classList.remove('is-invalid');
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com|tcs\.com)$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('email').classList.add('is-invalid');
    } else {
        document.getElementById('email').classList.remove('is-invalid');
    }

    // Mobile number validation
    const mobile = document.getElementById('mobile').value;
    const mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
        isValid = false;
        document.getElementById('mobile').classList.add('is-invalid');
    } else {
        document.getElementById('mobile').classList.remove('is-invalid');
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password === '') {
        isValid = false;
        document.getElementById('password').classList.add('is-invalid');
    } else {
        document.getElementById('password').classList.remove('is-invalid');
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        isValid = false;
        document.getElementById('confirmPassword').classList.add('is-invalid');
    } else {
        document.getElementById('confirmPassword').classList.remove('is-invalid');
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
