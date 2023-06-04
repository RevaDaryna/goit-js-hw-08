// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
const galleryEl = createGallery(galleryItems);

function createGallery(gallery) {
  const imgEl = gallery
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                 <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>
           </li>`
    )
    .join('');
  galleryContainer.insertAdjacentHTML('afterbegin', imgEl);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
