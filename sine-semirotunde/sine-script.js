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
// Thumbnails
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const thumbnails = card.querySelectorAll('.thumbnail');
  const caption = card.querySelector('.caption');
  const leftArrow = card.querySelector('.left-arrow');
  const rightArrow = card.querySelector('.right-arrow');
  const mainImage = card.querySelector('img');

  let currentThumbnailIndex = 0;

  // Funcția pentru afișarea imaginii curente
  function showCurrentImage() {
    mainImage.src = thumbnails[currentThumbnailIndex].src;
  }

  // Funcția pentru afișarea descrierii imaginii
  function toggleCaption() {
    caption.classList.toggle('show');
  }

  // Funcția pentru navigarea la imaginea precedentă
  function navigatePrevious() {
    currentThumbnailIndex = (currentThumbnailIndex - 1 + thumbnails.length) % thumbnails.length;
    showCurrentImage();
  }

  // Funcția pentru navigarea la imaginea următoare
  function navigateNext() {
    currentThumbnailIndex = (currentThumbnailIndex + 1) % thumbnails.length;
    showCurrentImage();
  }

  // Adaugă eveniment de clic pe fiecare thumbnail
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      currentThumbnailIndex = index;
      showCurrentImage();
    });
  });

  // Adaugă eveniment de clic pe săgeți
  leftArrow.addEventListener('click', navigatePrevious);
  rightArrow.addEventListener('click', navigateNext);

  // Adaugă eveniment de clic pe imaginea mare pentru afișarea descrierii
  mainImage.addEventListener('click', toggleCaption);
});

// Function to show the previous image
function showPreviousImage() {
  const currentCard = this.parentElement.parentElement;
  const imageContainer = currentCard.querySelector('.image-container');
  const activeThumbnail = currentCard.querySelector('.active-thumbnail');
  const previousThumbnail = activeThumbnail.previousElementSibling;

  if (previousThumbnail) {
    const previousImageSrc = previousThumbnail.getAttribute('src');
    const previousAltText = previousThumbnail.getAttribute('alt');

    imageContainer.innerHTML = `
      <span class="arrow left-arrow">&#8249;</span>
      <span class="arrow right-arrow">&#8250;</span>
      <img id="currentImage" src="${previousImageSrc}" alt="${previousAltText}">
    `;

    // Update the active thumbnail
    activeThumbnail.classList.remove('active-thumbnail');
    previousThumbnail.classList.add('active-thumbnail');
  }
}

// Function to show the next image
function showNextImage() {
  const currentCard = this.parentElement.parentElement;
  const imageContainer = currentCard.querySelector('.image-container');
  const activeThumbnail = currentCard.querySelector('.active-thumbnail');
  const nextThumbnail = activeThumbnail.nextElementSibling;

  if (nextThumbnail) {
    const nextImageSrc = nextThumbnail.getAttribute('src');
    const nextAltText = nextThumbnail.getAttribute('alt');

    imageContainer.innerHTML = `
      <span class="arrow left-arrow">&#8249;</span>
      <span class="arrow right-arrow">&#8250;</span>
      <img id="currentImage" src="${nextImageSrc}" alt="${nextAltText}">
    `;

    // Update the active thumbnail
    activeThumbnail.classList.remove('active-thumbnail');
    nextThumbnail.classList.add('active-thumbnail');
  }
}

// Function to select a thumbnail
function selectThumbnail() {
  const currentCard = this.parentElement.parentElement;
  const imageContainer = currentCard.querySelector('.image-container');
  const selectedImageSrc = this.getAttribute('src');
  const selectedAltText = this.getAttribute('alt');

  imageContainer.innerHTML = `
    <span class="arrow left-arrow">&#8249;</span>
    <span class="arrow right-arrow">&#8250;</span>
    <img id="currentImage" src="${selectedImageSrc}" alt="${selectedAltText}">
  `;

  // Update the active thumbnail
  const activeThumbnail = currentCard.querySelector('.active-thumbnail');
  activeThumbnail.classList.remove('active-thumbnail');
  this.classList.add('active-thumbnail');
}

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
  
  