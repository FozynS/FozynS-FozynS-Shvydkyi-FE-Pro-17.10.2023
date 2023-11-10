/*
4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач. 
*/

const userString = prompt('Введите любую строку', '');
const elementsToDelate = prompt('Введите элементы которые надо удалить', '');

const removingElements = (string, elements) => {
    for (let i = 0; i < elements.length; i++) {
        string = string.split(elements[i]).join('');
    }
    return string;
}

const result = removingElements(userString, elementsToDelate);
console.log(result);