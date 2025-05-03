// Select the payment form
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Redirect the user to vehicle-number.html
    window.location.href = 'vehicle-number.html';
});
