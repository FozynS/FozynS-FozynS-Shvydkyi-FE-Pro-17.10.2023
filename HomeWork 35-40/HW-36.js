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

const viewProductList = (e) => {
    const { target } = e;

    if (target.classList.contains('categorie')) {
        const category = target.dataset.category;
        productsLists.forEach((list) => {
            const isMatchingCategory = list.dataset.category === category;
            list.classList.toggle('hide', !isMatchingCategory);
        });
    }
};

categoriesProducts.addEventListener('click', viewProductList);

const buyProduct = (e) => {
    const clickedButton = e.target;
    const productList = clickedButton.closest('.products-list');

    if (productList) {
        productList.classList.add('hide');
        alert('Congratulations. You buy this product :)');
    }
};

buyButtons.forEach((btn) => {
    btn.addEventListener('click', buyProduct);
});

const hideColumns = (table, columnIndex) => {
    const rows = table.querySelectorAll('tr');

    rows.forEach((row) => {
        const cells = row.querySelectorAll('th, td');
        cells[columnIndex].classList.add('hide-column');
    });
};

productsLists.forEach((table) => {
    hideColumns(table, 1); 
    hideColumns(table, 2);
    hideColumns(table, 3);
    hideColumns(table, 4); 
});

