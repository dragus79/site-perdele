console.log("heloo");

// Get all card images
const cardImages = document.querySelectorAll('.card1-image');

// Get the modal and its content element
const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-content');

// Get the close button
const closeButton = document.querySelector('.close');

// Loop through all card images and add click event listener to each one
for (let i = 0; i < cardImages.length; i++) {
  cardImages[i].addEventListener('click', function() {
    // Create a new image element for the modal
    const modalImage = document.createElement('img');
    modalImage.src = this.src;
    modalImage.alt = this.alt;

    // Clear any previous content from the modal
    modalContent.innerHTML = '';

    // Add the new image to the modal
    modalContent.appendChild(modalImage);

    // Show the modal
    modal.style.display = 'block';
  });
}

// Get the modal close button and add click event listener
if (closeButton) {
  closeButton.addEventListener('click', function() {
    // Hide the modal
    modal.style.display = 'none';
  });
}

// Close modal when user clicks outside of it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    // Hide the modal
    modal.style.display = 'none';
  }
});
