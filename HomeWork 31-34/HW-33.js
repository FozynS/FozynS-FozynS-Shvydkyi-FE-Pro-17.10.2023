/*
У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg 
Вивести зображення з цієї папки, отримане випадковим чином (Math.random)
*/

"use strict"
const imageDiv = document.querySelector('.div-image');

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

const randomIndex = Math.floor(Math.random() * images.length);

const imagePath = `images/${images[randomIndex]}`;

const randomImage = document.createElement('img');
randomImage.classList.add('picture')
randomImage.setAttribute('src', imagePath);

imageDiv.appendChild(randomImage);