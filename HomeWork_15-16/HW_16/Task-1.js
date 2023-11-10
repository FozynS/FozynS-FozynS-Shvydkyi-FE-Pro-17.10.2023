/* 
1.Дано масив з елементами різних типів. 
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
*/

const someArray = [1, 2, '23', 'sadas', 12, '100', 'sadsad', 'asf', '+', 10, 20, 30];

//** Это решение через циклы */
// const numbers = [];
// for(const item of someArray) {
//     if(typeof(item) === 'number') {
//         numbers.push(item);
//     }
// }
// console.log(numbers);

// const arithmeticAverage = (element) => {
//     let sum = 0;
//     for(const key of element) {
//         sum += key;
//     }
//     return sum;
// }
// console.log(arithmeticAverage(numbers));


const numbers = someArray.filter(item => typeof(item) === 'number');
console.log(numbers);

const arithmeticAverage = (elements) => {
    const result = elements.reduce((a, b) => a + b, 0);
    return result;
}
console.log(arithmeticAverage(numbers));