// Get the password input and toggle button elements
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Function to toggle password visibility
togglePassword.addEventListener("click", () => {
    // Toggle password input type between 'password' and 'text'
    const newType = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = newType;

    // Toggle the icon class based on the input type
    // Use appropriate classes according to the icon library
    if (newType === "text") { 
        // <i class="fa-solid fa-eye"></i>
        togglePassword.classList.remove("fa-solid fa-eye-slash");
        togglePassword.classList.add("fa-solid fa-eye");
    } else {
        // <i class="fa-solid fa-eye-slash"></i>
        togglePassword.classList.remove("fa-solid fa-eye");
        togglePassword.classList.add("fa-solid fa-eye-slash");
    }
});
