document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", function() {
        alert("You have been logged out.");
        // You could also redirect the user to a login page here
        // window.location.href = "login.html";
    });
});