$(document).ready(function() {
    // Toggle search bar visibility
    $('#search-toggle').click(function() {
      $('#search-container').toggle();
      $('#search-input').focus();
    });
  
    // Perform search
    $('#search-button').click(function() {
      var query = $('#search-input').val();
      // Perform desired search action with the query
      console.log('Search query:', query);
    });
});
  
$(document).ready(function() {
    // Toggle search bar visibility
    $('#search-toggle1').click(function() {
      $('#search-container1').toggle();
      $('#search-input1').focus();
    });
  
    // Perform search
    $('#search-button1').click(function() {
      var query = $('#search-input').val();
      // Perform desired search action with the query
      console.log('Search query:', query);
    });
  });

  $(document).ready(function() {
    // Show pop-up container on click
    $('#popup-trigger').click(function(e) {
      e.stopPropagation();
      $('#popup-container').fadeIn();
    });
  
    // Handle login button click
    $('#login-button').click(function(e) {
      e.stopPropagation();
      // Perform login action
      console.log('Login button clicked');
    });
  
    // Hide pop-up container when clicking outside
    $(document).click(function() {
      $('#popup-container').fadeOut();
    });
  });
  
  $(document).ready(function() {
    // Show pop-up container on click
    $('#popup-trigger1').click(function(e) {
      e.stopPropagation();
      $('#popup-container1').fadeIn();
    });
  
    // Handle login button click
    $('#login-button1').click(function(e) {
      e.stopPropagation();
      // Perform login action
      console.log('Login button clicked');
    });
  
    // Hide pop-up container when clicking outside
    $(document).click(function() {
      $('#popup-container1').fadeOut();
    });
  });

  
  
  var slideIndex = 0;
var slides = document.getElementsByClassName('slide');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');

showSlide(slideIndex);

prevButton.addEventListener('click', function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
});

nextButton.addEventListener('click', function() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});

// Autoplay functionality
var autoplayInterval = setInterval(function() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}, 9000); // Change the duration (in milliseconds) between slides

// Pause autoplay when hovering over the slider
var sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', function() {
  clearInterval(autoplayInterval);
});

// Resume autoplay when not hovering over the slider
sliderContainer.addEventListener('mouseleave', function() {
  autoplayInterval = setInterval(function() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }, 3000); // Change the duration (in milliseconds) between slides
});

function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}
