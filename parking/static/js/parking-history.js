document.addEventListener('DOMContentLoaded', function() {
    const parkingHistoryContainer = document.getElementById('parking-history-container');
    
    // Get parking history from local storage
    const parkingHistory = JSON.parse(localStorage.getItem('parkingHistory')) || [];
    
    // Display parking history
    if (parkingHistory.length > 0) {
      parkingHistory.forEach(booking => {
        const bookingElement = document.createElement('div');
        bookingElement.classList.add('booking-details');
        bookingElement.innerHTML = `
          <p><strong>Vehicle Number:</strong> ${booking.vehicleNumber}</p>
          <p><strong>Date:</strong> ${booking.date}</p>

        `;
        parkingHistoryContainer.appendChild(bookingElement);
      });
    } else {
      parkingHistoryContainer.innerHTML = '<p>No parking history available.</p>';
    }
  });