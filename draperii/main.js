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
//Carusel

$(document).ready(function(){
  // Activarea caruselului Bootstrap
  $('.carousel').carousel({
    interval: 3000, // timpul de pauză în milisecunde între diapozitivele caruselului
    pause: 'hover', // pauza pe hover
    keyboard: true // permiterea navigării prin carusel cu ajutorul tastei săgeată stânga/dreapta a tastaturii
  });

  // Adăugarea funcționalității de control al cursorului la carusel
  $('.carousel-control-prev').click(function(){
    $('.carousel').carousel('prev');
  });

  $('.carousel-control-next').click(function(){
    $('.carousel').carousel('next');
  });
});


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
  