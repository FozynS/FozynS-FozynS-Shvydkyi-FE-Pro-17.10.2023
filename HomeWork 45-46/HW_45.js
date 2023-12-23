/*
Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, 
то вивести на сторінку блок з постом і зробити кнопку для отримання коментарів до посту.
Зробити завдання використовуючи проміси, перехопити помилки.
*/
"use strict";
const inputNumber = document.querySelector('.input-number');
const submit = document.querySelector('.submit');
const post = document.querySelector('.section-posts');
const commentDiv = document.querySelector('.section-comments');
const button = document.querySelector('.btn');

const getIdPost = () => {
    const number = document.querySelector('.input-number').value;

    if(!number) {
        inputNumber.classList.add('alert');
        alert('Введите число от 1 до 100');
    } else {
        try {
            fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
                .then((res) => res.json())
                .then((res) => showPostInBlock(res))
        } catch (error) {
            console.log(error);
            alert('Введите число от 1 до 100');
        }
    }
}

const showPostInBlock = (res) => {
    console.log(res);

    const title = document.createElement('h3');
    const postTitle = res.title;

    title.innerText = postTitle;
    post.appendChild(title);
}

// const viewCommentInBlock = (res) => {
//     const comment = document.createElement('p');
//     const postComment = res.body;

//     comment.innerText = postComment;
//     commentDiv.appendChild(comment);
// }   


submit.addEventListener('click', getIdPost);
// button.addEventListener('click', );