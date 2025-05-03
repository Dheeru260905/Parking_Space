document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to UltraSonic Parking Solutions!');

    const loginForm = document.getElementById('login-form');
    const otpForm = document.getElementById('otp-form');
    const detailsForm = document.getElementById('details-form');
    const resetForm = document.getElementById('reset-form');
    const newPasswordForm = document.getElementById('new-password-form');
    const bookingForm = document.getElementById('booking-form');

    // In-memory user store (for demonstration purposes)
    const users = [
        { username: 'testuser', password: 'password123' } // Add initial users here
    ];
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Redirect to home.html
        window.location.href = "home.html";
    });
    
    // In-memory booking store (for demonstration purposes)
    const bookings = [];

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                alert('Login successful!');
                window.location.href = 'home.html';
            } else {
                alert('User not found. Please register.');
                window.location.href = 'register.html';
            }
        });
    }

    if (otpForm) {
        otpForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const regPhoneNumber = document.getElementById('regPhoneNumber').value;
            // Simulate sending OTP
            console.log(`Sending OTP to phone number: ${regPhoneNumber}`);
            alert('OTP sent to your phone.');
            window.location.href = 'otp-verification.html';
        });
    }

    if (detailsForm) {
        detailsForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const otp = document.getElementById('otp').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // Simulate OTP verification and registration process
            console.log(`Verifying OTP: ${otp}`);
            console.log(`Registering user with username: ${username}`);
            users.push({ username, password });
            alert('Registration successful! Please log in.');
            window.location.href = 'index.html';
        });
    }

    if (resetForm) {
        resetForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const resetPhoneNumber = document.getElementById('resetPhoneNumber').value;
            // Simulate sending OTP
            console.log(`Sending OTP to phone number: ${resetPhoneNumber}`);
            alert('OTP sent to your phone.');
            resetForm.style.display = 'none';
            newPasswordForm.style.display = 'block';
        });
    }

    if (newPasswordForm) {
        newPasswordForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const otp = document.getElementById('otp').value;
            const newPassword = document.getElementById('newPassword').value;
            // Simulate OTP verification and password reset process
            console.log(`Verifying OTP: ${otp}`);
            console.log(`Resetting password to: ${newPassword}`);
            alert('Password reset successful! Please log in.');
            window.location.href = 'index.html';
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const location = document.getElementById('location').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            // Simulate booking process
            console.log(`Booking parking spot at ${location} on ${date} at ${time}`);
            bookings.push({ location, date, time });
            alert('Parking spot booked successfully!');
        });
    }
});