document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from refreshing the page

    const studentID = document.getElementById("studentID").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (studentID === "" || username === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Sign up successful!";
});