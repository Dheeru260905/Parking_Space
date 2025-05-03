// book-spot.js

document.addEventListener('DOMContentLoaded', function() {
    const locationSelect = document.getElementById('location');
    const slotSelect = document.getElementById('slot');

    // Updated data for slots based on location
    const slots = {
        'lb-nagar': ["D Mart", "Big Bazaar", "CMR Shopping Mall", "Oxygen Park", "BVK Multiplex"],
        'jubilee-hills': ["Pedamma Temple", "Mini TTD", "Krishna Kanth Park", "PVR Cineplex", "Ebix LTD"],
        'gachibowli': ["GMC Stadium", "Phoenix Tower", "Starbucks Cafe", "Sarath city mall", "IT Hub"],
        'banjara-hills': ["GVK Mall", "Sarvi Restaurant", "Sri Jagannath Temple", "Birla Mandir", "Kalakrithi Art Gallery"],
        'kukatpally': ["Yashoda Hospital", "Nexsus Mall", "Pegmark Hotel", "Hunda Park", "Lulu Mall"],
        'Raidurg':["Ikea Mart","Durgam Cheruvu","Inorbit Mall","Mind Space"]
    };

    // Function to populate slots based on selected location
    function populateSlots() {
        const selectedLocation = locationSelect.value;

        // Clear previous options
        slotSelect.innerHTML = '<option value="" disabled selected>Select a slot</option>';

        if (selectedLocation && slots[selectedLocation]) {
            slots[selectedLocation].forEach(slot => {
                const option = document.createElement('option');
                option.value = slot.toLowerCase().replace(/ /g, '-');
                option.textContent = slot;
                slotSelect.appendChild(option);
            });
        }
    }

    // Event listener for location change
    locationSelect.addEventListener('change', populateSlots);
});