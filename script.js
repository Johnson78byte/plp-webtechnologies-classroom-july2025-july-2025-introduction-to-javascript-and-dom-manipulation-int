
// Part 1: Declaring Const Variables & Conditionals

const users = [
    { username: "admin", password: "admin123" },
    { username: "john", password: "john456" },
    { username: "jane", password: "jane789" }
];

let isAuthenticated = false;


// Part 2: creating a function that will validate user credentials

function validateCredentials(username, password) {
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true;
        }
        else {
            return false;
        }
    }
}

function showMessage(text, isSuccess) {
    const message = document.getElementById("message");
    message.textContent = text;
    message.style.color = isSuccess ? "green" : "red";
}


// Part 3:

// Log all usernames to console

for (let i = 0; i < users.length; i++) {
    console.log(`User ${i + 1}: ${users[i].username}`);
}


// Part 4: DOM Interactions

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (validateCredentials(username, password)) {
        isAuthenticated = true;
        // showMessage(`Welcome, ${username}!`, true);
        window.alert(`Welcome, ${username}!`);
        window.location.href = "https://www.google.com";
    } else {
        showMessage("Invalid username or password.", false);
    }
});

// Theme toggle button
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Optional: Save preference in localStorage
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});