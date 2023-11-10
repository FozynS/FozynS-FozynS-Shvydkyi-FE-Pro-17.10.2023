/*
2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
У змінній znak може бути: +, -, *, /, %, ^ (ступінь).
Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
*/

const signs = ['+', '-', '*', '/', '%', '^'];
let firstNumber, secondNumber, sign;

while(true) {
    firstNumber = +prompt('Введите первое число', '');
    secondNumber = +prompt('Введите второе число', '');

    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Введите корректные числа');
        continue;
    } 

    sign = prompt('Введите знак математической операции', '');

    if(sign === '' || !signs.includes(sign)) {
        alert('Введите знак операции');
        continue;
    } else {
        break;
    }

}
console.log(firstNumber, sign, secondNumber);

const doMath = (x, znak, y) => {
    let result;

    switch(znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            // result = x ** y;
            result = Math.pow(x, y);
            break;
    }

    return result;
}
const result = doMath(firstNumber, sign, secondNumber);
console.log(result);