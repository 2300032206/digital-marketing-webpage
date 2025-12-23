function scrollToForm() {
    document.getElementById("lead-form").scrollIntoView({
        behavior: "smooth"
    });
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message");

    if (name === "" || email === "" || phone === "") {
        message.textContent = "⚠ All fields are required!";
        message.style.color = "red";
        return false;
    }

    message.textContent = "✅ Your request has been submitted successfully!";
    message.style.color = "green";

    return false;
}
