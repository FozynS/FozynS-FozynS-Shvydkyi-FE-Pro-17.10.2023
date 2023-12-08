/*
Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
tr*10>td*10{10}
*/

"use strict";
const divTable = document.querySelector('.table-div');
const table = document.createElement('table');

for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr');

    for (let j = 1; j <= 10; j++) {
        const td = document.createElement('td');
        td.textContent =  i * 10 - 10 + j;
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

divTable.appendChild(table);



