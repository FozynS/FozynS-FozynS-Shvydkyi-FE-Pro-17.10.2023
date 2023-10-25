// //** Этот файл с более продвинутыми решениями */

// //** HW 2 */
// while (true) {
//     const number = prompt('Write 5 numbers', '');

//     if(number.length === 5) {
//         let concatNumbers = '';

//         for(let i = 0; i < number.length; i++){
//             concatNumbers += number[i];

//             if (i < number.length - 1) {
//                 concatNumbers += ' ';
//             }
//         }
//         // alert(`${number[0]} ${number[1]} ${number[2]} ${number[3]} ${number[4]}`);
//         alert(concatNumbers);
//         break;
//     }

//     if(number.length === '' || number.length > 5) {
//         alert('Write 5 numbers');
//         continue;
//     }
// }

// //** HW 4 */
// const operation = prompt('What do you want to do?(add, sub, mult, div)', '');

// const firstNumber = +prompt('Your first number', '');
// const secondNumber = +prompt('Your second number', '');

// let result;

// switch(operation) {
//     case 'add':
//         result = firstNumber + secondNumber;
//         alert(`${firstNumber} + ${secondNumber} = ${result}`);
//         break;

//     case 'sub':
//         result = firstNumber - secondNumber;
//         alert(`${firstNumber} - ${secondNumber} = ${result}`);
//         break;

//     case 'mult': 
//         result = firstNumber * secondNumber;
//         alert(`${firstNumber} * ${secondNumber} = ${result}`);
//         break;

//     case 'div': 
//         if(secondNumber !== 0) {
//             result = firstNumber / secondNumber;
//             alert(`${firstNumber} / ${secondNumber} = ${result}`);
//             break;
//         } else {
//             alert('Division by zero is impossible');
//         }
// }
// if(result === undefined) {
//     alert(`Result is: ${result}`);
// }

//** HW 7 */
const usersBirthYear = +prompt('Напиши свій рік народження?');

let message;
const year = 2023;
const usersAge = year - usersBirthYear;
const sorry = 'Шкода, що ви не захотіли вводити';

if(usersBirthYear === undefined || usersBirthYear === '') {
    alert(`${sorry} свій рік народження.`);
} else {
    const usersLiveInCity = prompt('У якому місті ті живешь?');

    if(usersLiveInCity === undefined || usersLiveInCity.trim() === '') {
        alert(`${sorry} свое місто.`);
    } else {
        const usersFavouriteSport = prompt('Який твій улюбленний вид спорту?');

        if(usersFavouriteSport === undefined || usersFavouriteSport === '') {
            alert(`${sorry} свій улюблений вид спорту.`);
        } else {
            message = `${usersAge} роки\n`;

            if(['Київ','Вашингтон','Лондон'].includes(usersLiveInCity)) {
                message += `Ти живеш у столиці ${usersLiveInCity}`;
            } else {
                message += `Ти живеш у місті ${usersLiveInCity}`;
            }
            const champions = {
                'Футбол': 'Кріштіану Роналду',
                'Бокс': 'Майком Тайсоном',
                'Баскетбол': 'Леброном Джеймсом',
            };

            const champion = champions[usersFavouriteSport];
            if(champion) {
                message += `\nКруто! Хочеш стати ${champion}?`
            } else {
                message += `\nТвій улюбленний вид спорту ${usersFavouriteSport}`;
            }
        }
    }
} 

alert(message);