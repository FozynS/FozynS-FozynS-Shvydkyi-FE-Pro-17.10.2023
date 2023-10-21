//** HW 1 */
const name = prompt('What is your name', '');
alert(`Hello, ${name}! How are you?`)

//** HW 2 */
const first = prompt('Write first string', '');
const second = prompt('Write second string', '');
const third = prompt('Write third string', '');

alert(`${first} ${second} ${third}`);

const number = '12345'
console.log(`${number[0]} ${number[1]} ${number[2]} ${number[3]} ${number[4]}`);

//** HW 3 */
const firstNumber = +prompt('Write your first number', '');
const secondNumber = +prompt('Write your second number', '');

const addition = firstNumber + secondNumber;
    subtraction = firstNumber - secondNumber;
    multiplication = firstNumber * secondNumber;
    division = firstNumber / secondNumber;

alert(`${firstNumber} + ${secondNumber} = ${addition}
${firstNumber} - ${secondNumber} = ${subtraction}
${firstNumber} * ${secondNumber} = ${multiplication}
${firstNumber} / ${secondNumber} = ${division}`);

//** HW 4 */
const operation = prompt('What do you want to do?(add, sub, mult, div)', '');

const firstNumber = +prompt('Your first number', '');
const secondNumber = +prompt('Your second number', '');

const add = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;

alert(`${firstNumber} + ${secondNumber} = ${add}
${firstNumber} - ${secondNumber} = ${sub}
${firstNumber} * ${secondNumber} = ${mult}
${firstNumber} / ${secondNumber} = ${div}`);


//** HW 5 */
const hours = +prompt('How many hours?', '');

const changeHoursInSecond = hours * 3600;
alert(`${changeHoursInSecond} seconds`);