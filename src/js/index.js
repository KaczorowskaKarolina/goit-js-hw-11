// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import Notiflix from "notiflix";
// import { searchImages, loadMoreImages, createImageCard } from "./utils";

// const searchForm = document.querySelector("#search-form");
// const loadMoreBtn = document.querySelector(".load-more");
// const gallery = document.querySelector(".gallery");

// let page = 1;
// let searchQuery = "";
// let totalHits = 0;

// // Initialize SimpleLightbox
// const lightbox = new SimpleLightbox(".gallery a");

// // Hide loadMoreBtn initially
// loadMoreBtn.style.display = "none";

// searchForm.addEventListener("submit", handleSubmit);
// loadMoreBtn.addEventListener("click", loadMoreImages);

// function handleSubmit(e) {
//   e.preventDefault();

//   // Clear gallery
//   gallery.innerHTML = "";

//   // Reset page number
//   page = 1;

//   // Get search query value
//   searchQuery = e.target.searchQuery.value;

//   // Make API request
//   searchImages(page, searchQuery);
// }

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var query = document.getElementById('searchInput').value;

  // Perform search operation using the query

  // Display search results on the page
  var searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '<h3>Search Results</h3><p>No results found.</p>'; // Placeholder text, replace with actual search results
});

const API_KEY = '39260371-83ef64e0aa197167fe58dcdf0';
const BASE_URL = 'https://pixabay.com/api/';

function searchImages(keyword, category, minWidth, minHeight) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(keyword)}&category=${category}&min_width=${minWidth}&min_height=${minHeight}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Przetwarzanie danych odpowiedzi API
      if (data.totalHits > 0) {
        // Jeśli istnieją wyniki, można je wyświetlić lub wykorzystać dalej
        const images = data.hits;
        console.log(images);
      } else {
        // Jeśli nie ma wyników, wyświetl komunikat
        console.log('Brak wyników dla podanych kryteriów wyszukiwania.');
      }
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas pobierania danych z API Pixabay:', error);
    });
}

// Przykładowe użycie funkcji searchImages:
searchImages('DOSTAWAĆ', 'wszystko', 0, 0);