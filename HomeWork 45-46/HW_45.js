/*
Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, 
то вивести на сторінку блок з постом і зробити кнопку для отримання коментарів до посту.
Зробити завдання використовуючи проміси, перехопити помилки.
*/
"use strict";
import './HW-46.js';

const inputNumber = document.querySelector('.input-number');
const submit = document.querySelector('.submit');
// const postSection = document.querySelector('.section-posts');
// const commentSection = document.querySelector('.section-comments');
const button = document.querySelector('.btn');

const title = document.querySelector('.title');
const description = document.querySelector('.description');
// const comments = document.querySelector('.comments');
const commentsList = document.querySelector('.comments-list');

const checkNumber = () => {
    const number = document.querySelector('.input-number').value;
    const max = 100;
    const min = 1;
    const check = number < min || number > max;

    if(check) {
        inputNumber.classList.add('alert');
        alert('Введите число от 1 до 100');
    } else {
        inputNumber.classList.remove('alert');
        return number;
    }
}

const request = async (url) => {
    return await new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => {
                if(!res.ok) {
                    throw new Error('Запрос завершился нуедачеуй');
                } else {
                    return res.json();
                }
            })
            .then(res => resolve(res))
            .catch(e => reject(e))
    });
}

const getIdPost = (number) => request(`https://jsonplaceholder.typicode.com/posts/${number}`);

const showPost = (res, e) => {

    if(e.target.classList.contains('submit')) {
        title.innerText = '';
        description.innerText = '';

        const postTitle = res.title;
        const postDescription = res.body;

        title.innerText = postTitle;
        description.innerText = postDescription;
    }
}

const getIdComments = (number) => request(`https://jsonplaceholder.typicode.com/posts/${number}/comments`);

const showComments = (res, e) => {
    const fragment = document.createDocumentFragment();
    button.classList.remove('hide');
    commentsList.replaceChildren();

    if(e.target.classList.contains('btn')) {
        button.classList.add('hide');
        
        for (const key of res) {
            const li = document.createElement('li');
            li.innerText = key.body;
            fragment.appendChild(li);
        }

        commentsList.appendChild(fragment);
    } 
}

const callShowFunc = (e) => {
    const number = checkNumber();
    
    if(number !== undefined) {

        try {
            getIdPost(number)
                .then((res) => showPost(res, e))
                .catch((e) => console.log(e));

            getIdComments(number)
                .then((res) => showComments(res, e))
                .catch((e) => console.error(e));

        } catch (error) {
            console.error(error);
        }

    } else {
        console.error('Введенное значение недопустимо.');
    }
    
}   

submit.addEventListener('click', (e) => callShowFunc(e));
button.addEventListener('click', (e) => callShowFunc(e));