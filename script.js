const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$&*_(){}[]<>/!-+=%^~";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password; // Set the generated password to the input
}

// Add an event listener for the copy button
document.getElementById("copyButton").addEventListener("click", copyPassword);

function copyPassword() {
    const password = passwordBox.value;

    if (password) {
        // Use navigator.clipboard API
        navigator.clipboard.writeText(password)
            .then(() => {
                alert('Password copied to clipboard!'); // Notify the user
            })
            .catch(err => {
                console.error('Failed to copy password: ', err);
                alert('Failed to copy password.'); // Notify user of failure
            });
    } else {
        alert('No password to copy! Generate a password first.'); // If password is empty
    }
}
