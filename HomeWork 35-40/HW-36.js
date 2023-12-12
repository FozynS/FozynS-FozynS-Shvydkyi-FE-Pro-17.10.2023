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

const buy = document.querySelectorAll('.buy');

const viewProductList = (e) => {
    const {target} = e;

    if(target.closest('.categorie')) {
        productsList.classList.remove('hide');
    }
}

categoriesProducts.addEventListener('click', viewProductList);

const addClass = () => {
    productsList.classList.add('hide');
    alert('Congratulations. You buy this product)');
}

buy.forEach((btn) => {
    btn.addEventListener('click', addClass);
});