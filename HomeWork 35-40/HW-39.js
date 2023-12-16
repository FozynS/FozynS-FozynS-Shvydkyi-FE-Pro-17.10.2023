/*
Робимо на підставі минулого дз.
В інформації товару - кнопка "купити".
При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
ПІБ покупця
Місто (вибір зі списку)
Склад Нової пошти для надсилання
Післяплати або оплати банківської картки
Кількість продукції, що купується
Коментар до замовлення
2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. 
Інакше - виводити помилку на сторінку
3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)
*/
"use strict";

const containerForm = document.querySelector('.container-form');
const orderForm = document.querySelector('.order-form');
const orderInfo = document.querySelector('.order-info');

const addNewClass = () => {
    containerForm.classList.remove('hide');
    productsLists.forEach((list) => {list.classList.add('hide')});
}

buyButtons.forEach((btn) => {
    btn.addEventListener('click', addNewClass);
});

const areFormValied = () => {
    const customerName = document.querySelector('.customer-name').value;
    const city = document.querySelector('.cities').value;
    const postOffice = document.querySelector('input[name="post"]:checked');
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    const quantity = document.querySelector('.quantity').value;
    const comment = document.querySelector('.text').value;

    return customerName && city && postOffice && paymentMethod && quantity && comment;
}

const createOrderInfo = () => {
    const customerName = document.querySelector('.customer-name').value;
    const city = document.querySelector('.cities').value;
    const postOffice = document.querySelector('input[name="post"]:checked').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const quantity = document.querySelector('.quantity').value;
    const comment = document.querySelector('.text').value;

    const orderInfoString = `
    <p><strong>Your Name and Surname:</strong> ${customerName}</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>Post-office:</strong> ${postOffice}</p>
    <p><strong>Payment Method:</strong> ${paymentMethod}</p>
    <p><strong>Quantity:</strong> ${quantity}</p>
    <p><strong>Comment:</strong> ${comment}</p>
    `;

    return orderInfoString;
}

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(areFormValied()) {
        orderInfo.innerHTML = createOrderInfo();
    } else {
        alert('Please fill in all required fields.')
    }
});

