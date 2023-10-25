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
const numberOne = +prompt('Write your first number');
const numberTwo = +prompt('Write your second number');
const numberThree = +prompt('Write your third number');
const allNumbers = 3

const sum = (numberOne + numberTwo + numberThree) / allNumbers;
alert(sum.toFixed(2));

//** HW 7 */
const usersBirthYear = prompt('Напиши свій рік народження?');

let message;
const year = 2023;
const usersAge = year - usersBirthYear;

if(usersBirthYear === undefined) {
    alert("Шкода, що ви не захотіли вводити свій рік народження.");
} else {
    const usersLiveInCity = prompt('У якому місті ті живешь?');

    if(usersLiveInCity === undefined) {
        alert("Шкода, що ви не захотіли вводити свое.");
    } else {
        const usersFavouriteSport = prompt('Який твій улюбленний вид спорту?');

        if(usersFavouriteSport === undefined) {
            alert("Шкода, що ви не захотіли вводити свій улюблений вид спорту.");
        } else {
            message = `${usersAge} роки\n`;

            if(usersLiveInCity === 'Київ' || usersLiveInCity === 'Вашингтон' || usersLiveInCity === 'Лондон') {
                message += `Ти живеш у столиці ${usersLiveInCity}`;
            } else {
                message += `Ти живеш у місті ${usersLiveInCity}`;
            }
                switch(usersFavouriteSport) {
                    case 'Футбол':
                        message += `\nКруто! Хочеш стати Кріштіану Роналду?`;
                        break;
                    case 'Бокс':
                        message += `\nКруто! Хочеш стати Майком Тайсоном?`;
                        break;
                    case 'Баскетбол':
                        message += `\nКруто! Хочеш стати Леброном Джеймсом?`;
                        break;
                    default: 
                        message += `\nТвій улюбленний вид спорту ${usersFavouriteSport}`;
                        break;
                }
        }
    }
} 

alert(message);

//** HW 8 */
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch(numOrStr && numOrStr.trim()) {
    case null:
        console.log('ви скасували');
        break
    case '':
        console.log('Empty String');
        break;
    case 'NaN':
        console.log(' number is Ba_NaN');
        break;
    default: 
        console.log('OK!');
}