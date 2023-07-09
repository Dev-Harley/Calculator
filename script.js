'use strict';

// ||ELEMENT TOGGLE FUNCTION 

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// || HEADER STICKY AND GO UP

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


// ||NAV BAR TOGGLE 

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});

// ||SKILLS TOGGLE 


const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}

// || DARK AND LIGHT THEME TOGGLE 


const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

// ||CHECK AND SELECT LAST SELECCTED THEME IN BY USING LocalStorage 

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}



function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    var displayValue = document.getElementById('display').value;
    var result = eval(displayValue);
    document.getElementById('display').value = result;
  }
  
  function removeLastChar() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.keyCode >= 96 && event.keyCode <= 105) {
      // numpad number keys (0-9)
      var numpadValue = event.key;
      appendToDisplay(numpadValue);
    } else if (event.keyCode === 107) {
      // numpad addition key (+)
      appendToDisplay('+');
    } else if (event.keyCode === 109) {
      // numpad subtraction key (-)
      appendToDisplay('-');
    } else if (event.keyCode === 106) {
      // numpad multiplication key (*)
      appendToDisplay('*');
    } else if (event.keyCode === 111) {
      // numpad division key (/)
      appendToDisplay('/');
    } else if (event.keyCode === 13) {
      // Enter key
      calculateResult();
    } else if (event.keyCode === 18) {
      // Alt key
      clearDisplay();
    } else if (event.keyCode === 8) {
      // Backspace key
      removeLastChar();
    }
  });
  