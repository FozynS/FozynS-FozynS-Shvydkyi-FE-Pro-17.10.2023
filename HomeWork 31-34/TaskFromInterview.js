"use strict";
/*
HW1
you need to compare all numbers and return best result a - b (10 - 3 = 7);
*/
const bestSell = (arrNumbers) => {    
    const sortedArr = arrNumbers.sort((a, b) => b - a);

    const biggestElement = sortedArr[0];
    const smallestElement = sortedArr[sortedArr.length - 1];

    const result = biggestElement - smallestElement;

    return result;
}

const test = bestSell([4, 7, 11, 10]);
const test1 = bestSell([4, 3, 7, 11, 10]);
const test2 = bestSell([10, 9, 6, 7]);
console.log(test);
console.log(test1);
console.log(test2);