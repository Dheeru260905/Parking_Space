document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature a');

    features.forEach(feature => {
        feature.addEventListener('click', function(event) {
            event.preventDefault();
            const target = event.currentTarget.getAttribute('href');
            window.location.href = target;
        });
    });
});