// Organized Scripts for Parking System

// 1. Dynamic Content Management
// Handles dynamic content updates for the main section
document.addEventListener('DOMContentLoaded', function() {
    const mainSection = document.querySelector('main section');
    // Placeholder for future dynamic content additions
});

// 5. Slot Selection
// Dynamically populates parking slots based on selected location
document.addEventListener('DOMContentLoaded', function() {
    const locationSelect = document.getElementById('location');
    const slotSelect = document.getElementById('slot');

    const parkingSlots = {
        'lb-nagar': ["D Mart", "Big Bazaar", "CMR Shopping Mall", "Oxygen Park", "BVK Multiplex"],
        'jubilee-hills': ["Inorbit Mall", "Sharath City Mall", "Krishna Kanth Park", "PVR Cineplex", "Durgam Cheruvu"],
        'gachibowli': ["GMC Stadium", "Phoenix Tower", "Starbucks Cafe", "HITEC City", "IT Hub"],
        'banjara-hills': ["GVK Mall", "Sarvi Restaurant", "Sri Jagannath Temple", "Birla Mandir", "Kalakrithi Art Gallery"],
        'kukatpally': ["Skypark Cafe", "Dunki Bonuts Restaurant", "Pegmark Hotel", "Hunda Park", "IDL Lake"]
    };

    locationSelect.addEventListener('change', function() {
        const selectedLocation = locationSelect.value;
        const slots = parkingSlots[selectedLocation] || [];

        slotSelect.innerHTML = '<option value="" disabled selected>Select a slot</option>';

        slots.forEach(slot => {
            const option = document.createElement('option');
            option.value = slot;
            option.textContent = slot;
            slotSelect.appendChild(option);
        });
    });
});

// 3. Payment Handling
// Implements a basic form for processing payments
document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('payment-form');

    function processPayment(event) {
        event.preventDefault();
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        if (cardNumber && expiryDate && cvv) {
            alert('Payment processed successfully!');
            paymentForm.submit();
        } else {
            alert('Please fill in all payment details.');
        }
    }

    paymentForm.addEventListener('submit', processPayment);
});

// 4. Vehicle Number Submission
// Handles vehicle details collection and saving
document.getElementById('vehicle-number-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const vehicleNumber = document.getElementById('vehicle-number').value;

    if (vehicleNumber) {
        const bookingDetails = {
            vehicleNumber: vehicleNumber,
            date: new Date().toLocaleString(),
            slot: localStorage.getItem('selectedSlots'),
            price: localStorage.getItem('totalPrice')
        };

        let parkingHistory = JSON.parse(localStorage.getItem('parkingHistory')) || [];
        parkingHistory.push(bookingDetails);
        localStorage.setItem('parkingHistory', JSON.stringify(parkingHistory));

        alert('Vehicle number submitted successfully!');
        window.location.href = 'parking-history.html';
    } else {
        alert('Please enter your vehicle number.');
    }
});

// 2. Parking History Management
// Fetch and display parking history from local storage
document.addEventListener('DOMContentLoaded', function() {
    const parkingHistoryContainer = document.getElementById('parking-history-container');
    const parkingHistory = JSON.parse(localStorage.getItem('parkingHistory')) || [];

    if (parkingHistory.length > 0) {
        parkingHistory.forEach(booking => {
            const bookingElement = document.createElement('div');
            bookingElement.classList.add('booking-details');
            bookingElement.innerHTML = `
                <p><strong>Vehicle Number:</strong> ${booking.vehicleNumber}</p>
                <p><strong>Date:</strong> ${booking.date}</p>
                <p><strong>Slot:</strong> ${booking.slot}</p>
                <p><strong>Price:</strong> ₹${booking.price}</p>
            `;
            parkingHistoryContainer.appendChild(bookingElement);
        });
    } else {
        parkingHistoryContainer.innerHTML = '<p>No parking history available.</p>';
    }
});
