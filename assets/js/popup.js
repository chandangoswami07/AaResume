// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show the popup box
    const popup = document.getElementById('welcomePopup');
    popup.style.display = 'flex';

    // Close the popup when the close button is clicked
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Close the popup if the user clicks outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
