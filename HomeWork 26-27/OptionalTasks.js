// const b =
// [['5','3','.','.','7','.','.','.','.']
// ,['6','.','.','1','9','5','.','.','.']
// ,['.','9','8','.','.','.','.','6','.']
// ,['8','.','.','.','6','.','.','.','3']
// ,['4','.','.','8','.','3','.','.','1']
// ,['7','.','.','.','2','.','.','.','6']
// ,['.','6','.','.','.','.','2','8','.']
// ,['.','.','.','4','1','9','.','.','5']
// ,['.','.','.','.','8','.','.','7','9']];

// // FIX ME
// const isValidSudoku = (board) => {
//     const isRowOrColumnValid = (item) => {
//     const numberArray = item.filter(el => el !== '.');
//     const uniqArray = [];

//         for (const num of numberArray) {
//             if (uniqArray.includes(num)) {
//                 return false;
//             }
//         }

//         return true;
//     };

//     for (const row of board) {
//         if (!isRowOrColumnValid(row)) {
//             return false;
//         }
//     }

//     for (let index = 0; index < 10; index++) {
//         const column = board.map(row => {
//             return row[index];
//         });

//         if (index === 0) {
//             console.log(column);
//         }

//         if (!isRowOrColumnValid(column)) {
//             return false;
//         }
//     }

//     return true;
// };

// console.log(isValidSudoku(b));

/*
HW OPTIONAL
- map as function
- reduce as function
- FIX ME
*/
//** Реализация собственого Filter*/
const array = [1, 2, 3, 4, 5];

const myFilter = (arr, cb) => {
    const result = [];

    for (const item of arr) {
        if(cb(item)){
            result.push(item);
        }
    }

    return result;
}

const filteredArray = myFilter(array, item => item > 2);
// console.log(filteredArray);

//** Реализация собственого Map */
const myMap = (arr, cb) => {
    const result = [];

    for (const item of arr) {
        const transformedArray = cb(item);
        result.push(transformedArray);
    }

    return result;
}
const mapArray = myMap(array, item => item * 2);
// console.log(mapArray);

//** Реализация собственого Reduce  */
const myReduce = (arr, cb, initialValue) => {
    let result = initialValue;

    for (const item of arr) {
        result = cb(result, item);
    }

    return result;
}
const reduceArray = myReduce(array, (total, value) => total + value, 0);
// console.log(reduceArray);