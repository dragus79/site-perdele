console.log("heloo");

//Meniu Hamburger
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.sidebar ul');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
});
var menuBtn = document.querySelector(".menu-toggle");
var menu = document.querySelector("nav ul");

menuBtn.addEventListener("click", function() {
  menu.classList.toggle("show-menu");
});
function closeMenuOnResize() {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
}


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





// Footer
//Animatie

document.querySelector('.back-to-top').addEventListener('click', function() {
  // Adăugăm clasa "animate" pentru a porni animația
  this.classList.add('animate');

  // Dacă avem o durată de animație definită în CSS, așteptăm ca animația să se termine înainte de a executa scroll-ul
  const animationDuration = parseFloat(getComputedStyle(this).getPropertyValue('animation-duration'));
  setTimeout(() => {
    // Eliminăm clasa "animate" după ce animația s-a terminat
    this.classList.remove('animate');

    // Efectuăm scroll către secțiunea meniului
    const menuSection = document.querySelector('#meniu');
    const menuSectionOffset = menuSection.offsetTop;
    window.scrollTo({
      top: menuSectionOffset,
      behavior: 'smooth'
    });
  }, animationDuration * 1000);
});


AOS.init();

window.addEventListener('scroll', function() {
  var backToTop = document.querySelector('.back-to-top');
  if (window.pageYOffset > 100) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

document.querySelector('.back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mail

const emailButton = document.getElementById('emailButton');
const email = 'ramona.dragus@yahoo.com';

emailButton.addEventListener('click', function() {
  window.location.href = 'mailto:' + email;
});

document.querySelector('#emailButton').addEventListener('click', function(event) {
  event.preventDefault(); // Oprire comportamentul implicit al linkului

  // Obțineți elementul la care doriți să derulați
  const contactSection = document.querySelector('#contact');

  // Derulați la elementul dorit
  contactSection.scrollIntoView({ behavior: 'smooth' });
}); 

