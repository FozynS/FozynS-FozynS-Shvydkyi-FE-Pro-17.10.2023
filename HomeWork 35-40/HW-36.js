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
const productsLists = document.querySelectorAll('.products-list');
const categories = document.querySelectorAll('.categorie');
const buyButtons = document.querySelectorAll('.buy');
const informationDiv = document.querySelectorAll('.section-product-information > div');

const showProductList = (categorie) => {
    productsLists.forEach((list) => {
        const isMatchingCategory = list.dataset.category === categorie;
        list.classList.toggle('hide', !isMatchingCategory);
    });
};

const showProductInformation = (products) => {
    informationDiv.forEach((infoSection) => {
        const isMatchingProduct = infoSection.dataset.product === products;
        infoSection.classList.toggle('hide', !isMatchingProduct);
    });
};

const definitionClick = (e) => {
    const { target } = e;

    if (target.classList.contains('categorie')) {
        const categorie = target.dataset.category;
        showProductList(categorie);
    }

    if (target.classList.contains('product-item')) {
        const products = target.dataset.product;
        showProductInformation(products);
    }
} 
categoriesProducts.addEventListener('click', definitionClick);

const buyProduct = (e) => {
    const clickedButton = e.target;
    const isButton = clickedButton.classList.contains('buy');

    if (isButton) {
        const parent = clickedButton.parentElement;
        parent.classList.add('hide');
        alert('Congratulations. You buy this product :)');
    }
};

buyButtons.forEach((btn) => {
    btn.addEventListener('click', buyProduct);
});

