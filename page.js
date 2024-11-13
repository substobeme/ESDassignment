function Validation() {
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const password1 = document.getElementById("password1").value;
    const match= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!name || !email || !password || !password1) {
        alert("Please fill in all fields.");
        return false;
    }
    if (!match.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }
    if (password !== password1) {
        alert("Passwords do not match.");
        return false;
    }
    alert("Submitted successfully!");
    window.location.href = "mainpage.html";
    return false;}
