'use strict';


const galleryItems = [
	{ preview: './img/preview-1.jpg', fullview: './img/fullview-1.jpg', alt: 'alt text 1' },
	{ preview: './img/preview-2.jpg', fullview: './img/fullview-2.jpg', alt: 'alt text 2' },
	{ preview: './img/preview-3.jpg', fullview: './img/fullview-3.jpg', alt: 'alt text 3' },
	{ preview: './img/preview-4.jpg', fullview: './img/fullview-4.jpg', alt: 'alt text 4' },
	{ preview: './img/preview-5.jpg', fullview: './img/fullview-5.jpg', alt: 'alt text 5' },
	{ preview: './img/preview-6.jpg', fullview: './img/fullview-6.jpg', alt: 'alt text 6' }
];

const gallery = document.querySelector('.js-image-gallery');
const fullview = document.querySelector('.fullview');
let btn = document.createElement('button');
let img = document.createElement('img');
const ul = document.createElement('ul');

ul.classList.add('preview');
btn.textContent = 'X';
btn.classList.add('btn');
fullview.classList.add('display_none');
img.classList.add('fullview_img');

gallery.append(ul);
fullview.append(img);
fullview.append(btn);
addGallery(galleryItems);
const preImg= [...document.querySelectorAll('.pre_img')]
console.log(preImg);
function addGallery(arr) {
	let str = arr.reduce((acc, el) => acc + `<li><img src="${el.preview}" class = "pre_img" data-fullview="${el.fullview}" alt="${el.alt}"></li>`,'');
	ul.innerHTML = str;
}
ul.addEventListener('click', fullviewImg);

function fullviewImg(e) {
  
  preImg.forEach(el=> el.classList.remove('unique_border'));
  console.log(preImg);
  if(e.target === ul){
    return
  }
  e.target.classList.add('unique_border');
	img.src = e.target.dataset.fullview;
	fullview.classList.remove('display_none');
	console.log(e.target.dataset.fullview);
}

function closeImg(e) {
	if (e.target === btn || e.target === fullview) {
		fullview.classList.add('display_none');
	}
}
fullview.addEventListener('click', closeImg);
window.addEventListener('DOMContentLoaded', addGallery)