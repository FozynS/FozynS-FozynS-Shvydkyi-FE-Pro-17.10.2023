/*
Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені 
замовлення навіть після оновлення сторінки (використовувати localStorage).

На сторінці спочатку крім списку категорій відображається також кнопка “мої замовлення”.

При кліку на “мої замовлення” - пропадають категорії та відображається список усіх замовлень 
користувача (дата та ціна) - при кліку на замовлення - “розгортаються” деталі замовлення.

Реалізувати можливість видалення замовлення зі списку.
*/

const orederBtn = document.querySelector('.orders');
const categoriesList = document.querySelector('.categories-list');
const orederSection = document.querySelector('.section-orders-list');

const detailsBtns = document.querySelectorAll('.btn');
const removeBtns = document.querySelectorAll('.delete-btn');

const ordersList = document.querySelectorAll('.orders-list > li');
console.dir(ordersList);

const saveInLocalStorage = () => {
    ordersList.forEach((order, index) => {
        const orderId = `order-${index + 1}`;
        const orderDate = order.dataset.date;
        const orderPrice = order.dataset.price;

        const orderData = {
            id: orderId,
            date: orderDate,
            price: orderPrice,
        };

        localStorage.setItem(orderId, JSON.stringify(orderData));
    });
}

saveInLocalStorage();

const hideCategoriesList = (e) => {
    const {target} = e;

    if(target.closest('.orders')) {
        categoriesList.classList.add('hide');
        orederSection.classList.remove('hide');
    }
}

orederBtn.addEventListener('click', hideCategoriesList);

detailsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const currentBtn = e.currentTarget;
        const detail = currentBtn.previousElementSibling;
        detail.classList.toggle('hide');
    });
});

const deleteOrder = (orderId) => {
    localStorage.removeItem(orderId);
}

removeBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        const currentBtn = e.currentTarget;
        const listItem = currentBtn.closest('li');
        const orderId = `order-${index + 1}`;
        deleteOrder(orderId);
        listItem.remove();
    });
});