console.log("heloo")
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

// Grid
// Selectați elementele cu clasa "column"
var elements = document.getElementsByClassName("column");

// Funcția pentru coloana cu o imagine pe linie
function one() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("two", "three", "four");
    elements[i].classList.add("one");
  }
}

// Funcția pentru coloana cu două imagini pe linie
function two() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("one", "three", "four");
    elements[i].classList.add("two");
  }
}

// Funcția pentru coloana cu trei imagini pe linie
function three() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("one", "two", "four");
    elements[i].classList.add("three");
  }
}

// Funcția pentru coloana cu patru imagini pe linie
function four() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("one", "two", "three");
    elements[i].classList.add("four");
  }
}

// Adăugați evenimentele de clic pentru butoane
document.getElementById("oneBtn").addEventListener("click", one);
document.getElementById("twoBtn").addEventListener("click", two);
document.getElementById("threeBtn").addEventListener("click", three);
document.getElementById("fourBtn").addEventListener("click", four);


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
