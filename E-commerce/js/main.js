// JavaScript to hide the loader after a specified duration
document.addEventListener('DOMContentLoaded', function() {
  var loader = document.getElementById('loader-container');
  
  // Set the duration (in milliseconds) for the loader to be displayed
  var loaderDuration = 3000; // Adjust this value as needed
  
  setTimeout(function() {
    loader.style.display = 'none';
  }, loaderDuration);
});

// ========= dropdown menu on hover ============
  // Get all the dropdown links in the navigation bar
  const dropdownLinks = document.querySelectorAll('.dropdown');

  // Function to show the dropdown menu on hover
  function handleDropdownHover(event) {
    // Toggle the "show" class on the dropdown menu
    this.querySelector('.dropdown-menu').classList.toggle('show');
  }

  // Add a mouseenter event listener to each dropdown link
  dropdownLinks.forEach(link => {
    link.addEventListener('mouseenter', handleDropdownHover);
    link.addEventListener('mouseleave', handleDropdownHover);
  });

// NavToggle
  const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});




// Sticky Navbar
window.onscroll = function() {stickyNavbar()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


// Smooth Scrolling
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    const elementPosition = element.offsetTop;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth"
    });
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    smoothScroll(target);
  });
});

// Newsletter 
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the email input value
  var email = document.getElementById("emailInput").value;

  // Perform validation if needed
  // ...

  // Simulate a successful subscription
  var confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.textContent = "Thank you for subscribing!";
  confirmationMessage.style.color = "white";

  // Clear the email input
  document.getElementById("emailInput").value = "";
});







