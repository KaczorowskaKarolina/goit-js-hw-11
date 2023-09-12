// import {
//     searchForPhotos,
//     scrollHandler,
//     enlargePhoto
//   } from './handlers.js';
  
//   const searchForm = document.querySelector('#searchPhotosForm');
  
//   searchForm.addEventListener('submit', searchForPhotos);
//   // Uncomment the line below if you want to load photos on page load
//   // searchForm.dispatchEvent(new Event('submit'));
  
//   scrollHandler();
//   window.addEventListener('scroll', scrollHandler);
  
//   const photosContainer = document.querySelector('#photos');
//   photosContainer.addEventListener('click', enlargePhoto);
  
//   const modal = document.getElementById('modal');
//   const modalImage = document.getElementById('modal-image');
//   const closeModal = document.getElementById('close-modal');
  
//   const photos = document.querySelectorAll('.photo'); // Move the declaration and initialization here
  
//   photos.forEach(photo => {
//     photo.addEventListener('click', () => {
//       modal.style.display = 'block';
//       modalImage.src = photo.src;
//     });
//   });
  
//   closeModal.addEventListener('click', () => {
//     modal.style.display = 'none';
//   });
  
// //   // Function to handle left and right infinite scroll
// //   function handleInfiniteScroll(e) {
// //     const { scrollLeft, scrollWidth, clientWidth } = e.target;
// //     if (scrollLeft + clientWidth >= scrollWidth - 10) {
// //       const searchForm = document.querySelector('#searchPhotosForm');
// //       const page = parseInt(searchForm.page.value);
// //       searchForm.page.value = page + 1;
// //       searchForPhotos(e); // Trigger a new photo search on scroll
// //     }
// //   }
  
//   // Add event listeners for infinite scroll
//   photoContainer.addEventListener('scroll', handleInfiniteScroll);
//   photoContainer.addEventListener('wheel', handleInfiniteScroll);

// const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const apiUrl = 'http://pixabay.com/api/?key=39260371-83ef64e0aa197167fe58dcdf0&perpage=40&image_type=photo&orientation=horizontal&safesearch=true&page=2&q=';

// const proxyUrl = corsProxyUrl + apiUrl;

// // Modify your existing code to use the proxyUrl for fetching photos
// fetch(proxyUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Process the fetched data
//   })
//   .catch(error => {
//     // Handle any errors
//   });

import {
    searchForPhotos,
    scrollHandler,
    enlargePhoto
  } from './handlers.js';

const searchForm = document.querySelector('#searchPhotosForm');

searchForm.addEventListener('submit', searchForPhotos);
 
  searchForm.dispatchEvent(new Event('submit'));

scrollHandler();
  window.addEventListener('scroll', scrollHandler);

const photosContainer = document.querySelector('#photos');
  photosContainer.addEventListener('click', enlargePhoto);

const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.getElementById('close-modal');

const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImage.src = photo.src;
    });
  });

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

// function handleInfiniteScroll(e) {
//     const { scrollLeft, scrollWidth, clientWidth } = e.target;
//     if (scrollLeft + clientWidth >= scrollWidth - 10) {
//       const searchForm = document.querySelector('#searchPhotosForm');
//       const page = parseInt(searchForm.page.value);
//       searchForm.page.value = page + 1;
//       searchForPhotos(e);
//     }
//   }

// photosContainer.addEventListener('scroll', handleInfiniteScroll);
//   photosContainer.addEventListener('wheel', handleInfiniteScroll);