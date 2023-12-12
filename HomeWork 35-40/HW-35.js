/*
Створити програму для відображення результатів голосування. З наступними умовами:
Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
При натисканні на смайл - під ним змінюється значення лічильника.
Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
*/
"use strict";

const emojiList = document.querySelector('.section-emoji_list');

const increaseCounter = (counter) => {
    counter.innerText = parseInt(counter.innerText, 10) + 1

}

emojiList.addEventListener('click', (e) => {
    const {target} = e;

    if(target.classList.contains('img')) {
        e.stopImmediatePropagation();
        const img = target.closest('.img').nextElementSibling;
        increaseCounter(img);
    }
});
