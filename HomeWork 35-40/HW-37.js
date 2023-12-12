/*
Пишемо свій слайдер зображень.
Відображаємо зображення та кнопки Next, Prev з боків від зображення.
При кліку на Next - показуємо наступне зображення.
При кліку на Prev - попереднє .
При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.
*/
"use strict";

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.slider-container');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

const changeSlide = (btn) => {
    if(btn === 'next') {
        activeSlideIndex++;
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if(btn === 'prev') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    hideBtns();

    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
}

const hideBtns = () => {
    if(activeSlideIndex === slidesCount - 1) {
        nextBtn.classList.add('hide');
    } else {
        nextBtn.classList.remove('hide');
    }

    if(activeSlideIndex === 0) {
        prevBtn.classList.add('hide');
    } else {
        prevBtn.classList.remove('hide');
    }
}

nextBtn.addEventListener('click', () => {
    changeSlide('next')
});
prevBtn.addEventListener('click', () => {
    changeSlide('prev')
});
