//** HW 1 */
// const name = prompt('What is your name', '');
// alert(`Hello, ${name}! How are you?`);

//** HW 2 */
// const first = prompt('Write first string', '');
// const second = prompt('Write second string', '');
// const third = prompt('Write third string', '');

// alert(`${first} ${second} ${third}`);

// const number = '12345';
// console.log(`${number[0]} ${number[1]} ${number[2]} ${number[3]} ${number[4]}`);

//** HW 3 */
// const firstNumber = +prompt('Write your first number', '');
// const secondNumber = +prompt('Write your second number', '');

// const addition = firstNumber + secondNumber;
//     subtraction = firstNumber - secondNumber;
//     multiplication = firstNumber * secondNumber;
//     division = firstNumber / secondNumber;

// alert(`${firstNumber} + ${secondNumber} = ${addition};
// ${firstNumber} - ${secondNumber} = ${subtraction};
// ${firstNumber} * ${secondNumber} = ${multiplication};
// ${firstNumber} / ${secondNumber} = ${division}`);

//** HW 4 */
// const operation = prompt('What do you want to do?(add, sub, mult, div)', '');

// const firstNumber = +prompt('Your first number', '');
// const secondNumber = +prompt('Your second number', '');

// const add = firstNumber + secondNumber;
// const sub = firstNumber - secondNumber;
// const mult = firstNumber * secondNumber;
// const div = firstNumber / secondNumber;

// alert(`${firstNumber} + ${secondNumber} = ${add};
// ${firstNumber} - ${secondNumber} = ${sub};
// ${firstNumber} * ${secondNumber} = ${mult};
// ${firstNumber} / ${secondNumber} = ${div}`);


//** HW 5 */
// const hours = +prompt('How many hours?', '');

// const changeHoursInSecond = hours * 3600;
// alert(`${changeHoursInSecond} seconds`);

//** HW 6 */
// const numberOne = +prompt('Write your first number');
// const numberTwo = +prompt('Write your second number');
// const numberThree = +prompt('Write your third number');
// const allNumbers = 3;

// const sum = (numberOne + numberTwo + numberThree) / allNumbers;
// alert(+sum.toFixed(2));

//** HW 7 */
// const usersBirthYear = +prompt('Напиши свій рік народження?');
// const usersLiveInCity = prompt('У якому місті ті живешь?');
// const usersFavouriteSport = prompt('Який твій улюбленний вид спорту?');

// let message;
// const year = 2023;
// const usersAge = year - usersBirthYear;
// const sorry = 'Шкода, що ви не захотіли вводити';

// if(usersBirthYear === undefined || usersBirthYear === '') {
//     alert(`${sorry} свій рік народження.`);
// } else if(usersLiveInCity === undefined || usersLiveInCity.trim() === '') {
//     alert(`${sorry} свое місто.`);
// } else if(usersFavouriteSport === undefined || usersFavouriteSport.trim() === '') {
//     alert(`${sorry} свій улюблений вид спорту.`);
// } else {
//     message = `${usersAge} роки\n`;

//     const cities = ['Київ','Вашингтон','Лондон'].includes(usersLiveInCity)
//         ? `Ти живеш у столиці ${usersLiveInCity}`
//         : `Ти живеш у місті ${usersLiveInCity}`;

//         message += cities;

//     const champions = {
//         'Футбол': 'Кріштіану Роналду',
//         'Бокс': 'Майком Тайсоном',
//         'Баскетбол': 'Леброном Джеймсом',
//     };

//     const champion = champions[usersFavouriteSport];

//         message += champion
//             ? `\nКруто! Хочеш стати ${champion}?`
//             : `\nТвій улюбленний вид спорту ${usersFavouriteSport}`;
// }
// alert(message);

//** HW 8 */
// let numOrStr = prompt('input number or string');
// console.log(numOrStr);

// switch(true) {
//     case numOrStr === null:
//         console.log('ви скасували');
//         break
//     case numOrStr.trim() === '':
//         console.log('Empty String');
//         break;
//     case isNaN( +numOrStr ):
//         console.log(' number is Ba_NaN');
//         break;
//     default: 
//         console.log('OK!');
// }

//** HM 9 */
//** Task 1 */
// let result = '';
// for (let i = 10; i <= 20; i++) {
//     result += i; // Вивести на сторінку в один рядок через кому числа від 10 до 20.
//     if(i < 20){
//         result += ', ';
//     }
// }
// alert(result);

//** Task 2 */
// for (let i = 10; i <= 20; i++) {
//     console.log(Math.pow(i, 2)); // Вивести квадрати чисел від 10 до 20.
// }

//** Task 3 */
// const seven = 7; //Вивести таблицю множення на 7.
// for (let i = 1; i <= 10; i++) {
//     console.log(i * seven);
// }

//** Task 4 */
// let sum = 0; // Знайти суму всіх цілих чисел від 1 до 15.
// for (let i = 1; i <= 15; i++) {
//     sum += i;
// }
// console.log(sum);

//** Task 5 */
// let product = 1; // Знайти добуток усіх цілих чисел від 15 до 35.
// for (let i = 15; i <= 35; i++) {
//     product += i;
//     console.log(product * i); 
// }

//** Task 6 */
// let arithmeticMean = 0; // Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// for (let i = 1; i <= 500; i++) {
//     arithmeticMean += i;
// }
// console.log(arithmeticMean / 500);

//** Task 7 */
// let sumPairNumbers = 0; // Вивести суму лише парних чисел в діапазоні від 30 до 80.
// for (let i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//         sumPairNumbers += i;
//     }
// }
// console.log(sumPairNumbers);

//** Task 8 */
// for (let i = 100; i <= 200; i++) { // Вивести всі числа в діапазоні від 100 до 200 кратні 3.
//     if(i % 3 === 0) {
//         console.log(i);
//     }
// }

//** Task 9-11 */
// const n = 28; // Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// let divisors = ''; 
// let pairNumbers = '';
// let sumPairNumbersDivisors = 0;
// for (let i = 1; i <= n; i++) {
//     const isPair = i % 2 === 0;
//     if(n % i === 0) {
//         divisors += `${i},`;
//         pairNumbers += isPair ? `${i},` : ''; // Визначити кількість його парних дільників.
//         sumPairNumbersDivisors += i; // Знайти суму його парних дільників.
//     } 
// }
// alert(`All divisors of number '${n}': ${divisors.slice(0, -1)}`);
// console.log(pairNumbers.slice(0, -1).split(',').length);
// console.log(sumPairNumbersDivisors);


//** Task 12 */
// let multiplicationTable = ''; // Надрукувати повну таблицю множення від 1 до 10.
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         multiplicationTable += `${j} * ${i} = ${i * j}\t`;
//     }
//     multiplicationTable += '\n';
// }
// console.log(multiplicationTable);

//** HM 10 */

//** Task 1 */
// for (let i = 20; i <= 30; i += 0.5) { // Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
//     console.log(i);
// }

//** Task 2 */
// const UAH_TO_USD = 27; // Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// for (let i = 10; i <= 100; i += 10) {
//     console.log(i * UAH_TO_USD);
// }

//** Task 3 */
// const N = 1024; // Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// for (let i = 1; i <= 100; i++) {
//     if(Math.pow(i, 2) <= N) {
//         console.log(i);
//     } 
// }

//** Task 4 */
// const simpleNumber = 5; // Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// let isSimple = true;
// for (let i = 2; i <= simpleNumber - 1; i++) {
//     if(simpleNumber % i === 0) {
//         isSimple = false;
//         console.log(`${simpleNumber} не простое число`);
//         break;
//     } else {
//         console.log(`${simpleNumber} простое число`);
//         break;
//     }
// }

//** Task 5 */
// const someNumber = 9; // Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна). 
// const numberExtent = 3;
// for (let i = 1; i <= someNumber; i++) {
//     if(Math.pow(numberExtent, i) === someNumber) {
//         console.log(i);
//         break;
//     }
// }