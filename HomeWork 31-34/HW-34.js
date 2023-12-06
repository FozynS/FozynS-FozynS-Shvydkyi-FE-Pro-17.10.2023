/*
На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). 
Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо
*/
"use strict"
const links = document.querySelectorAll('a');

const reviewProtocol = ([...links]) => {
    links.forEach(item => {
        const hrefLink = item.getAttribute('href');
        if(!hrefLink.includes('http') || !hrefLink.includes('https')) {
            item.setAttribute('href', 'https://' + hrefLink);
        } 
    });
}
reviewProtocol(links);