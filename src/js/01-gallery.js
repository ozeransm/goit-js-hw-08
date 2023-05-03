// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import "../css/01-gallery.css"
import SimpleLightbox from "simplelightbox";


console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imagesGallery = galleryItems.reduce((img,{preview,description,original})=>img+=`<li class="gallery__item"><a class ="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}"></a></li>`,'');
gallery.insertAdjacentHTML('afterbegin', imagesGallery);
// console.log(imagesGallery);

new SimpleLightbox('.gallery a',{captionDelay:250});