// JavaScript to hide the loader after a specified duration
document.addEventListener('DOMContentLoaded', function() {
  var loader = document.getElementById('loader-container');
  
  // Set the duration (in milliseconds) for the loader to be displayed
  var loaderDuration = 3000; // Adjust this value as needed
  
  setTimeout(function() {
    loader.style.display = 'none';
  }, loaderDuration);
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

// Image Changing
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

// footer map
function initMap() {
  // Change this to your store's location
  var myLatLng = {lat: 7.946527, lng: -1.023194};
 
   // Create a map centered on the location
   var map = new google.maps.Map(document.getElementById('map'), {
     center: myLatLng,
     zoom: 14
   });
 
   // Create a marker on the location
   var marker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     title: 'My Store Location'
   });
 }
 
 // Load the Google Maps API script with your API key
 function loadScript() {
   var script = document.createElement('script');
   script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAg5Iqs12530OcDOU-n2XkL_xw8w2DcEuk&callback=initMap';
   script.defer = true;
   script.async = true;
   document.body.appendChild(script);
 }
window.onload = loadScript;
 

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



