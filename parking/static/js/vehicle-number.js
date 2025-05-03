document.getElementById('vehicle-number-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect vehicle number
    const vehicleNumber = document.getElementById('vehicle-number').value;
    
    // Perform validation (basic example)
    if (vehicleNumber) {
      // Create booking details object
      const bookingDetails = {
        vehicleNumber: vehicleNumber,
        date: new Date().toLocaleString(),
        slot: localStorage.getItem('selectedSlots'),
        price: localStorage.getItem('totalPrice')
      };
      
      // Get existing parking history from local storage
      let parkingHistory = JSON.parse(localStorage.getItem('parkingHistory')) || [];
      
      // Add new booking details to parking history
      parkingHistory.push(bookingDetails);
      
      // Save updated parking history to local storage
      localStorage.setItem('parkingHistory', JSON.stringify(parkingHistory));
      
      alert('Vehicle number submitted successfully!');
      // Redirect to the parking history page
      window.location.href = 'parking-history.html';
    } else {
      alert('Please enter your vehicle number.');
    }
  });