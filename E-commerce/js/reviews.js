const starsTotal = 5;

function init() {
  const ratings = document.querySelectorAll('.rating');

  if (ratings.length > 0) {
    ratings.forEach(rating => {
      const ratingValue = parseFloat(rating.getAttribute('data-rating'));
      const starPercentage = (ratingValue / starsTotal) * 100;
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

      rating.querySelector('.stars-inner').style.width = starPercentageRounded;
    });
  }

  const addReviewBtn = document.getElementById('add-review-btn');
  const addReviewModal = document.getElementById('add-review-modal');
  const closeBtn = document.querySelector('.close');
  const form = document.querySelector('form');

  addReviewBtn.addEventListener('click', () => {
    addReviewModal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    addReviewModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target == addReviewModal) {
      addReviewModal.style.display = 'none';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
    const reviewsContainer = document.getElementById('reviews-container');

    const newReview = document.createElement('div');
    newReview.className = 'reviews-container';

    const reviewContent = `
      <div class="review">
        <div class="review-header">
          <div class="review-author">${name}</div>
          <div class="review-stars">
            <div             class="stars-outer">
            <div class="stars-inner"></div>
          </div>
          <div class="review-rating">${rating} stars</div>
        </div>
        <div class="review-date">${new Date().toDateString()}</div>
      </div>
      <div class="review-body">${review}</div>
    </div>
  `;

  newReview.innerHTML = reviewContent;
  reviewsContainer.insertBefore(newReview, reviewsContainer.firstChild);

  addReviewModal.style.display = 'none';

  // Reset the form values
  form.reset();
  document.getElementById('rating-label').innerHTML = 'Rating:';
  document.getElementById('submit-btn').disabled = true;

  // Update the rating average
  const ratings = document.querySelectorAll('.rating');
  let totalRating = 0;

  ratings.forEach(rating => {
    const ratingValue = parseFloat(rating.getAttribute('data-rating'));
    totalRating += ratingValue;
  });

  const ratingAverage = totalRating / ratings.length;
  const starPercentage = (ratingAverage / starsTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  document.querySelector('.overall-rating .stars-inner').style.width = starPercentageRounded;
  document.querySelector('.overall-rating .rating-value').innerHTML = ratingAverage.toFixed(1);
});

const ratingInputs = document.querySelectorAll('input[name="rating"]');

ratingInputs.forEach(ratingInput => {
  ratingInput.addEventListener('change', () => {
    const ratingLabel = document.getElementById('rating-label');
    ratingLabel.innerHTML = `Rating: ${ratingInput.value} stars`;

    document.getElementById('submit-btn').disabled = false;
  });
});
}

window.onload = init;

