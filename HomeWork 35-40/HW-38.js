/*
Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) 
і генерує список з елементів:
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<ul>
    <li>1</li>
    <li>2</li>
    <li>
        <ul>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>
        </ul>
    </li>
    <li>3</li>
</ul>
*/
"use strict";

const section = document.querySelector('.randomList');

const generateList = (array) => {
    const ul = document.createElement('ul');

    array.forEach(element => {
        const li = document.createElement('li');

        if(Array.isArray(element)) {
            li.appendChild(generateList(element));
        } else {
            li.textContent = element;
        }
        ul.appendChild(li);
    });

    return ul;
}

const list = [1, 2, 3];
const list2 = [1, 2, [1.1, 1.2, 1.3], 3];

const test = generateList(list);
const test2 = generateList(list2);

section.appendChild(test);
section.appendChild(test2);

