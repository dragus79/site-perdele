console.log("ramona");

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
//Lightbox
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  

  var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var thumbnails = document.getElementsByClassName("lightbox-thumbnail");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
  captionText.innerHTML = thumbnails[slideIndex - 1].alt;
}

//Animatie
//Footer

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
  