// Import Notiflix library and its CSS file
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

// Import SimpleLightbox library and its CSS file
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Import the searchImages function from img-api.js file
import { searchImages } from './api';

// Import the smoothScroll function from smoothScroll.js file
import { scrollPage } from './scrollpage';

// Get the search form, input field, gallery container, and load more button
const searchForm = document.querySelector('#search-form');
const input = document.querySelector('#search-form input');
const gallery = document.querySelector('.gallery');
const loadButton = document.querySelector('.load_button');

let currentPage = 0;

// Event listener for form submission
searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  gallery.innerHTML = ''; // Remove previous search results
  await drawGallery(); // Call the drawGallery function to perform the search and render the gallery
});

// Event listener for load more button click
loadButton.addEventListener('click', drawGallery);

// Function to draw the gallery
async function drawGallery() {
  try {
    currentPage += 1; // Increment current page number
    const searchResult = await searchImages(input.value, currentPage); // Call the searchImages function to get the search result

if (searchResult.hits.length === 0) { // If no images found
  Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.', {
    timeout: 10000,
    fontSize: '20px',
  });
} else {
  // If images found
  Notiflix.Notify.success(`Hooray! We found ${searchResult.totalHits} images.`, {
    timeout: 10000,
    fontSize: '20px',
  });

  let galleryOfSearchResults = '';
  searchResult.hits.forEach(hit => {
    // Generate HTML for each image
    galleryOfSearchResults += `<div class="photo-card">
      <a href="${hit.largeImageURL}"><img class="img" src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" width="400" /></a>
      <div class="info">
        <p class="info_item">
          <b>Likes</b> ${hit.likes}
        </p>
        <p class="info_item">
          <b>Views</b> ${hit.views}
        </p>
        <p class="info_item">
          <b>Comments</b> ${hit.comments}
        </p>
        <p class="info_item">
          <b>Downloads</b> ${hit.downloads}
        </p>
      </div>
    </div>`;
  });

  gallery.innerHTML += galleryOfSearchResults; // Add the generated HTML to the gallery container

  // Initialize SimpleLightbox for the gallery images
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();

  // Scroll to the gallery
  setTimeout(() => {
    scrollPage();
  }, 0);

  const lastPage = Math.ceil(searchResult.totalHits / 40);

  if (currentPage === lastPage) { // If reached the last page of search results
    loadButton.classList.add('is-hidden'); // Hide the load more button
    Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.", {
      timeout: 3000,
      fontSize: '15px',
    });
    return;
  } else {
    loadButton.classList.remove('is-hidden'); // Show the load more button
  }
}
} catch (error) {
    console.error(error);
  }
}

// The code above imports necessary libraries and functions, sets up event listeners for form submission and load more button, and handles the gallery search and rendering. It also includes error handling and displays notifications using the Notiflix library. The SimpleLightbox library is used to display the images in a lightbox. The smoothScroll function is used to scroll to the gallery when new images are loaded.