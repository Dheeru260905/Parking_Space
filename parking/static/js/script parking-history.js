// parking-history.js

document.addEventListener('DOMContentLoaded', function() {
    const parkingHistoryContainer = document.getElementById('parking-history-container');

    // Sample data for parking history
    const parkingHistory = [
        { date: '2025-01-20', location: 'Lot A', duration: '2 hours', cost: '$5' },
        { date: '2025-01-22', location: 'Lot B', duration: '3 hours', cost: '$7.50' },
        { date: '2025-01-25', location: 'Lot C', duration: '1 hour', cost: '$2.50' }
    ];

    // Function to display parking history
    function displayParkingHistory() {
        parkingHistory.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('parking-entry');
            entryDiv.innerHTML = `
                <p><strong>Date:</strong> ${entry.date}</p>
                <p><strong>Location:</strong> ${entry.location}</p>
                <p><strong>Duration:</strong> ${entry.duration}</p>
                <p><strong>Cost:</strong> ${entry.cost}</p>
                <hr>
            `;
            parkingHistoryContainer.appendChild(entryDiv);
        });
    }

    // Call the function to display parking history
    displayParkingHistory();
});