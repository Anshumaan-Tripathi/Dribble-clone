// In-memory storage for users
let users = {};

// Handle Sign Up
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Validation checks for Sign Up
    if (!username || !email || !password) {
        messageElement.innerHTML = 'All fields are required.';
        messageElement.style.color = 'red';
        return;
    }

    // Check if username already exists
    if (users[username]) {
        messageElement.innerHTML = 'Username already exists.';
        messageElement.style.color = 'red';
        return;
    }

    // Basic email format validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        messageElement.innerHTML = 'Please enter a valid email address.';
        messageElement.style.color = 'red';
        return;
    }

    // Store user in in-memory object
    users[username] = { email, password };
    messageElement.innerHTML = 'Sign-up successful! You can now log in.';
    messageElement.style.color = 'green';
});

// Remove Login validation and event listener as it's no longer needed
// If you still need the Login form but without validation, just leave it as is, with no event listener code.

