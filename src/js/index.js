import { searchForPhotos, scrollHandler } from './handlers.js';

const searchForm = document.querySelector('#searchPhotosForm');

searchForm.addEventListener('submit', searchForPhotos);
searchForm.dispatchEvent(new Event('submit'));

scrollHandler();
window.addEventListener('scroll', scrollHandler);

const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.2)';
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});