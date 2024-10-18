document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the default action of the form

    // Check if the form is valid
    const input = e.target.querySelector("input");
    const errorContainer = e.target.querySelector(".custom-error");

    // Function to clear custom validation message
    function clearCustomValidationMessage() {
        input.setCustomValidity("");
        errorContainer.style.display = "none";
    }

    // Function to show custom validation message
    function showCustomValidation(message) {
        input.setCustomValidity(message);
        errorContainer.textContent = input.validationMessage;
        errorContainer.style.display = "block";
    }

    if (input.checkValidity()) {
        clearCustomValidationMessage();
        window.location.href = "index.html";
    } else {
        showCustomValidation("⚠️ Please enter a valid email address");
    }

    // Add input event listener to clear the error message when the user starts typing
    input.addEventListener("input", () => {
        clearCustomValidationMessage();
    }, { once: true }); // Use { once: true } to ensure the event listener is added only once
});

document.querySelector(".cross").addEventListener("click", () => {
   window.location.href = "index.html"; 
});