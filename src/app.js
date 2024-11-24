// Check if users exist in localStorage, or initialize an empty object
let users = JSON.parse(localStorage.getItem('users')) || {};

// Handle Sign Up
if (document.getElementById('signup-form')) {
    document.getElementById('signup-form').addEventListener('submit', function (e) {
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

        // Check if password meets the minimum length
        if (password.length < 4) {
            messageElement.innerHTML = 'Password must be at least 4 characters long.';
            messageElement.style.color = 'red';
            return;
        }

        // Store user in localStorage
        users[username] = { email, password };
        localStorage.setItem('users', JSON.stringify(users));

        messageElement.innerHTML = 'Sign-up successful! You can now log in.';
        messageElement.style.color = 'green';

        // Redirect to login.html after 1 second
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    });
}

// Handle Login
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const messageElement = document.getElementById('message');

        // Validation checks for Login
        if (!username || !password) {
            messageElement.innerHTML = 'All fields are required.';
            messageElement.style.color = 'red';
            return;
        }

        // Check if the user exists and password matches
        if (users[username] && users[username].password === password) {
            messageElement.innerHTML = 'Login successful! Redirecting...';
            messageElement.style.color = 'green';

            // Redirect to index.html after 1 second
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            messageElement.innerHTML = 'Invalid username or password.';
            messageElement.style.color = 'red';
        }
    });
}
