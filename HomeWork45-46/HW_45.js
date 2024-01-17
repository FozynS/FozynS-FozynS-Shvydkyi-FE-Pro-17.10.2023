"use strict";
import "./style.css";

const inputNumber = document.querySelector('.input-number');
const submit = document.querySelector('.submit');
const button = document.querySelector('.btn');

const title = document.querySelector('.title');
const description = document.querySelector('.description');
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

const getPostById = (id) => request(`https://jsonplaceholder.typicode.com/posts/${id}`);

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

const getCommentsByPostId = (id) => request(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

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
            getPostById(number)
                .then((res) => showPost(res, e))
                .catch((e) => console.log(e));

            getCommentsByPostId(number)
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