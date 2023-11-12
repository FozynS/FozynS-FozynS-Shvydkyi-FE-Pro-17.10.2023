/*
Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
sum(3) = 3 
sum(5) = 8
sum(20) = 28
*/

const sum = (() => {
    let value = 0;
    return (number) => {
        return value += number;
    }
})();

// const sum = (function() {
//     let value = 0;
//     return (number) => {
//         return value += number;
//     }
// })();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));