import { loadPhotos } from './load.js';

export async function searchForPhotos(e) {
    e.preventDefault();

e.target.page.value = '1';
const q = e.target.q.value;

await loadPhotos ({ q, page: '1' });
}

export async function scrollHandler() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
        const searchForm = document.querySelector('#searchPhotosForm');
        const page = parseInt(searchForm.page.value);
        searchForm.page.value = page + 1;
        await loadPhotos({ q: searchForm.q.value, page: searchForm.page.value});
    }
}

export function enlargePhoto(e) {
    // Check if the clicked element is an image
    if (e.target.classList.contains('photo')) {
        const enlargedPhotoContainer = document.querySelector('#enlargedPhotoContainer');
        enlargedPhotoContainer.innerHTML = '';

    const enlargedPhoto = document.createElement('img');
    enlargedPhoto.src = e.target.src;
    enlargedPhoto.classList.add('enlargedPhoto');

    enlargedPhotoContainer.appendChild(enlargedPhoto);
    enlargedPhotoContainer.style.display = 'flex';
}
}