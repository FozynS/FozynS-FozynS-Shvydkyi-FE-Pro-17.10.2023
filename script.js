//** Этот файл с более продвинутыми решениями */

//** HW 2 */

while (true) {
    const number = prompt('Write 5 numbers');

    if(number.length === 5) {
        let concatNumbers = '';

        for(let i = 0; i < number.length; i++){
            concatNumbers += number[i];

            if (i < number.length - 1) {
                concatNumbers += ' ';
            }
        }
        // alert(`${number[0]} ${number[1]} ${number[2]} ${number[3]} ${number[4]}`);
        alert(concatNumbers);
        break;
    }

    if(number.length === '' || number.length > 5) {
        alert('Write 5 numbers');
        continue;
    }
}