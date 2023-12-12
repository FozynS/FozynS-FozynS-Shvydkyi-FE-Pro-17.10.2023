/*
Дано 3 блоки
В лівій частині сторінки - перелік категорій.
При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
Клік на товар - інформацію про товар у правому блоці.
В інформації товару - кнопка “купити”.
При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми 
( коли відображається лише список категорій).
*/
"use strict";

const categoriesProducts = document.querySelector('.section-categories-products');

const productsList = document.querySelector('.products-list');
const productCard = document.querySelector('.product-card');

const back = document.querySelector('.back');
const buy = document.querySelector('.buy');

categoriesProducts.addEventListener('click', (e) => {
    const {target} = e;

    if(target.closest('.categorie')) {
        productsList.classList.remove('hide');
    }

    if(target.closest('.products-list')) {
        productCard.classList.remove('hide');
    }

});

back.addEventListener('click', () => {
    productCard.classList.add('hide');
});

// buy.addEventListener('click', () => {
//     productCard.classList.add('hide');
//     productsList.classList.add('hide');
// });