/*
Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. 
При пропажі фокусу - <div> так само пропадає
*/
"use strict"
const div = document.querySelector('.dynamic-div');
const input = document.querySelector('.input');

input.addEventListener('focus', () => {
    div.classList.remove('hide');
});

input.addEventListener('focusout', () => {
    div.classList.add('hide');
});
