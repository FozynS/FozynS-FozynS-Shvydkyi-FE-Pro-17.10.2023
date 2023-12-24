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

const getIdPost = (number) => {
    const getId = new Promise((resolve, reject) => {
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

const checkNumber = () => {
    const number = document.querySelector('.input-number').value;
    const max = 100;
    const min = 1;
    const check = !number || number < min || number > max;

    if(check) {
        inputNumber.classList.toggle('alert');
        alert('Введите число от 1 до 100');
    } else {
        return number;
    }
}

const showPostOrComment = (res, e) => {
    console.log(res);

    if(e.target.classList.contains('submit')) {
        const title = document.createElement('h4');
        const postTitle = res.title;
        const checkTitle = postSection.querySelector('h4');

        title.innerText = postTitle;

        if(!checkTitle) {
            postSection.appendChild(title);
        } 
        
    }
    
    if(e.target.classList.contains('btn')) {
        const comment = document.createElement('p');
        const postComment = res.body;
        const checkComment = commentSection.querySelector('p');

        comment.innerText = postComment;

        if(!checkComment) {
            commentSection.appendChild(comment);
        }
    } 

}

const callShowFunc = (e) => {
    const number = checkNumber();
    const getResult = getIdPost(number);

    return (
        getResult
            .then((res) => showPostOrComment(res, e))
            .catch((e) => console.log(e))
    )
}   

submit.addEventListener('click', (e) => callShowFunc(e));
button.addEventListener('click', (e) => callShowFunc(e));