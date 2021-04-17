//nav bar toggle
$(document).ready(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active");
    $("nav").toggleClass("active");
  });
});
function toggle_close(){
  $(".toggle").toggleClass("active");
  $("nav").toggleClass("active");
}
// change theme
const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "./assets/css/style.css") {
    theme.href = "./assets/css/style_dark.css";
  } else {
    theme.href = "./assets/css/style.css";
  }
});
// change icon on click
$(document).ready(() => {
    const a = $(".btn");
  
    a.click(() => {
      if (a.text() == " ") {
        a.html('<i class="fas fa-moon"></i>');
      } else {
        a.html('<i class="fas fa-sun"></i> ');
      }
    });
  });
// chnge model
function imagefun() {
  var Image_Id = document.getElementById('model');
  if (Image_Id.src.match("./assets/images/model.png")) {
      Image_Id.src = "./assets/images/model2.png";
  }
  else {
      Image_Id.src = "./assets/images/model.png";
  }
}

// Get the top button
window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("navbar");
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Experiences","Ideas","Works"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// form data
const scriptURL = "https://script.google.com/macros/s/AKfycby6rciwXVbUnGJV_CDFSd-lgDDlAS80yyWAI-y-pyuYDK2vHrn9WEsCq-Ppv4pUPjCLUw/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  }).catch((error) => console.error("Error!", error.message));
  form.reset();
});
function notifyBar() {
  //   if (!$(".alert-box").length) {
  $('<div class="alert-box success" > &nbsp; Message successfully sent !!! &nbsp;</div>')
    .prependTo("body")
    .delay(2500)
    .fadeOut(100, function () {
      $(".alert-box").remove();
    });
}
//Team Slider
      
$('#projects-grid').owlCarousel({
  loop: true,
  center: true,
  items: 3,
  margin: 0,
  autoplay: true,
  dots:true,
  autoplayTimeout: 4500,
  checkVisibility: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1170: {
      items: 3
    }
  }
});
