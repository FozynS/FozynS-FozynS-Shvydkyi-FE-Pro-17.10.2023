/*
Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, 
то вивести на сторінку блок з постом і зробити кнопку для отримання коментарів до посту.
Зробити завдання використовуючи проміси, перехопити помилки.
*/
"use strict";
const inputNumber = document.querySelector('.input-number');
const submit = document.querySelector('.submit');
const postSection = document.querySelector('.section-posts');
const commentSection = document.querySelector('.section-comments');
const button = document.querySelector('.btn');

const title = document.querySelector('.title');
const description = document.querySelector('.description');
const comments = document.querySelector('.comments');

const getIdPost = async (number) => {
    const getId = await new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
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

    return getId;
}

const showButton = () => {
    button.classList.remove('hide')
}

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

const showPost = (res, e) => {
    console.log(res);

    if(e.target.classList.contains('submit')) {
        title.innerText = '';
        description.innerText = '';

        const postTitle = res.title;
        const postDescription = res.body;

        title.innerText = postTitle;
        description.innerText = postDescription;
    }
    
    if(e.target.classList.contains('btn')) {
        comments.innerText = '';

    } 
}

const callShowFunc = (e) => {
    const number = checkNumber();
    
    if(number !== undefined) {
        showButton();

        try {
            getIdPost(number)
                .then((res) => showPost(res, e))
                .catch((e) => console.log(e));
        } catch (error) {
            console.error(error);
        }

    } else {
        console.error('Введенное значение недопустимо.');
    }
    
}   

submit.addEventListener('click', (e) => callShowFunc(e));
button.addEventListener('click', (e) => callShowFunc(e));