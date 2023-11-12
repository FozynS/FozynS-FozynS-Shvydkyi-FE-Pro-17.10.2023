/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь.
Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функцію pow (num, degree).
*/

const pow = (num, degree) => {
    if(degree === 0) {
        return 1;
    } else {
        return num * pow(num, degree - 1);
    }
}
const result = pow(2, 3)
console.log(result);

const pow2 = function(num, degree) {
    if(degree === 0) {
        return 1;
    } else {
        return num * pow(num, degree - 1);
    }
}
console.log(pow2(5, 2));
