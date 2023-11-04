
//** HM 11 */

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//** Task 1 */
// Знайти суму та кількість позитивних елементів.

let countPositiveNumbers = array.filter((item) => item > 0);
let result = countPositiveNumbers.reduce((total, value) => total + value)
// let result = 0;
// for(const item of array) {
//     if(item > 0){
//         // countPositiveNumbers.push(item);
//         result += item;
//     }
// }
console.log(`Сумма положительных елементов = ${result}; количество положительных елементов = ${countPositiveNumbers.length}`);

//** Task 2 */
//Знайти мінімальний елемент масиву та його порядковий номер.
let minNumber = array[0];
let minIndex = 0;

for(let i = 0; i < array.length; i++) {
    if(array[i] < minNumber) {
        minNumber = array[i];
        minIndex = i;
    }
}
console.log(`Минимальное число - ${minNumber}, его индекс - ${minIndex}`);

//** Task 3 */
//Знайти максимальний елемент масиву та його порядковий номер.
let maxNumber = array[0];
let maxIndex = 0;
for(let i = 0; i < array.length; i++) {
    if(array[i] > maxNumber) {
        maxNumber = array[i];
        maxIndex = i;
    }
}
console.log(`Максимальное число - ${maxNumber}, его индекс - ${maxIndex}`);

//** Task 4 */
//Визначити кількість негативних елементів.

let countNegativeNumbers = array.filter((item) => item < 0);
console.log(`Количество отрицательных элементов - ${countNegativeNumbers.length}`)

//** Task 5 */
//Знайти кількість непарних позитивних елементів.

let unpairedPositiveNumbers = array.filter((item) => item > 0 && item % 2 !== 0);
// for(const item of array) {
//     if(item > 0 && item % 2 !== 0) {
//         UnpairedPositiveNumbers.push(item);
//     }
// }
console.log(`Количество непарных положительных элементов - ${unpairedPositiveNumbers.length}`);

//** Task 6 */
//Знайти кількість парних позитивних елементів.

let pairPositiveNumbers = array.filter((item) => item > 0 && item % 2 === 0);
// for(const item of array) {
//     if(item > 0 && item % 2 === 0) {
//         PairPositiveNumbers.push(item);
//     }
// }
console.log(`Количество парных положительных элементов - ${pairPositiveNumbers.length}`);

//** Task 7 */
//Знайти суму парних позитивних елементів.

let sumPairPositiveNumbers = array.filter((item) => item > 0 && item % 2 === 0).reduce((total, value) => total + value);
// for(const item of array) {
//     if(item > 0 && item % 2 === 0) {
//         SumPairPositiveNumbers += item;
//     }
// }
console.log(`Сумма парных положительных элементов - ${sumPairPositiveNumbers}`);

//** Task 8 */
//Знайти суму непарних позитивних елементів.

let sumUnpairedPositiveNumbers = array.filter((item) => item > 0 && item % 2 !== 0).reduce((total, value) => total + value);
// for(const item of array) {
//     if(item > 0 && item % 2 !== 0) {
//         SumUnpairedPositiveNumbers += item;
//     }
// }
console.log(`Сумма непарных положительных элементов - ${sumUnpairedPositiveNumbers}`);

//** Task 9 */
//Знайти добуток позитивних елементів.

// let PositiveNumbers = [];
// for(const item of array) {
//     if(item > 0) {
//         PositiveNumbers.push(item);
//     }
// }
const productPositiveNumbers = array.filter((item) => item > 0).reduce((total, value) => total * value);
// const ProductPositiveNumbers = PositiveNumbers.reduce((total, value) => total * value);
console.log(`Произведение пожоложительных элементов - ${productPositiveNumbers}`);

//** Task 10 */
//Знайти найбільший серед елементів масиву, остальні обнулити.

const largestNumber = Math.max(...array);
for(let i = 0; i < array.length; i++) {
    if(array[i] !== largestNumber) {
        array[i] = 0;
    }
}
console.log(largestNumber);
