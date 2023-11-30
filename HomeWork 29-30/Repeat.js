// HW1 - delete and repeat
const arr = [3, 2, 2, 3, 4, 5, 1, 3,];
const filterValue = (arr, value) => {
    const filteredArray = arr.filter(item => item !== value);
    const filteredCount = arr.length - filteredArray.length;
    const placeholderArray = Array.from({length: filteredCount}).fill('_');

    return filteredArray.concat(placeholderArray);
};

const test = filterValue(arr, 3);
console.log(test);
// Input: nums = [3,2,2,3,4,5], val = 3

// HW2: replace value with MAP and use SORT
const ownFilterValue = (arr, value) => {
    const filterArray = arr.map((item) => {
        if(item !== value) {
            return item;
        } else {
            return '_';
        }
    });

    const sortedArray = filterArray.sort((a, b) => {
        if(typeof a === 'number' && typeof b === 'number') {
            return a - b;
        } else {
            return a.toString() < b.toString() ? -1 : 0;
        }
    });

    return sortedArray;
};

const test2  = ownFilterValue(arr, 3);
console.log(test2);
