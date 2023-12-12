/*
Реалізовуємо форму для реєстрації.
Поля:
Ім'я, Прізвище (Текстові поля)
Дата народження (Текстове поле)
Стать (radio)
Місто (select)
Адреса (textarea)
Мови, якими володіє (checkbox)
….
Кнопка “Зберегти”
За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
*/
"use strict";
const save = document.getElementById('save');
const resultTable = document.querySelector('.save-table');

save.addEventListener('click', (e) => {
    e.preventDefault();
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const languages = [...document.querySelectorAll('input[name="language"]:checked')].map((language => language.value)).join(', ');

    const tableHTML = `
        <table border="1">
            <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Дата народження</th>
                <th>Стать</th>
                <th>Місто</th>
                <th>Адреса</th>
                <th>Мови</th>
            </tr>
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${birthdate}</td>
                <td>${gender}</td>
                <td>${city}</td>
                <td>${address}</td>
                <td>${languages}</td>
            </tr>
        </table>
    `;

    resultTable.innerHTML = tableHTML;;
});



