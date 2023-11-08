// Form submit handler.
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
// Form submit handler.
function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
// Form submit handler.
function handleSubmit() {
    const userEmail = document.getElementById('userEmail').value;
    const userPhone = document.getElementById('userPhone').value;
    // Check if email and phone number are valid
    if (!isValidEmail(userEmail)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!isValidPhoneNumber(userPhone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    alert("Your valuable comments will be taken into consideration.");
}

// Page opener for div img elements.
function openPage(url) {
    window.open(url, "_blank");
}