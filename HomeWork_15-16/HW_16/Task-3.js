/*
3. Написати функцію заповнення даними користувача двомірного масиву. 
Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
*/

const lenghtMainArray = +prompt('Введите длину основного массива', '');
const lengthInsideArrays = +prompt('Введите длину внутренних массивов', '');
const elementsForArrays = prompt('Введите элементы для заполнения массивов', '');

const doingMatrix = (x, y, elements) => {
    let result = [];

    for (let i = 0; i < x; i++) {
        const row = [];
        for (let j = 0; j < y; j++) {
            row.push(elements[j]);
        }
        result.push(row)
    }
    return result;
}

const matrix = doingMatrix(lenghtMainArray, lengthInsideArrays, elementsForArrays);
console.log(matrix);