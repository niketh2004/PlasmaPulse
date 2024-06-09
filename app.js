document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const logoutButton = document.getElementById("logout-button");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Perform login logic here (e.g., validate user)
            // Redirect to respective dashboard
            const role = document.getElementById("role").value;
            if (role === "donor") {
                window.location.href = "donor.html";
            } else if (role === "admin") {
                window.location.href = "admin.html";
            } else if (role === "hospital") {
                window.location.href = "hospital.html";
            } else if (role === "staff") {
                window.location.href = "staff.html";
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Perform signup logic here (e.g., validate and create user)
            // Redirect to login page
            window.location.href = "index.html";
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            // Perform logout logic here (e.g., clear session)
            // Redirect to login page
            window.location.href = "index.html";
        });
    }
});
