/*
2
const arr = [
    { color: 'white', id: 3 },
    { color: 'red', id: 0 },
    { color: 'blue', id: 1 },
    { color: 'red', id: 2 },
    { color: 'red', id: 4 },
];

const result = {
    'white': {
        3: { color: 'white', id: 3 }
    },
    'blue': {
        1: { color: 'blue', id: 1 }
    },
    'red': {
        0: { color: 'red', id: 0 },
        2: { color: 'red', id: 2 },
        4: { color: 'red', id: 4 },
    },
}

Q - transform array into result with reduce

*/

const arr = [
    { color: 'white', id: 3 },
    { color: 'red', id: 0 },
    { color: 'blue', id: 1 },
    { color: 'red', id: 2 },
    { color: 'red', id: 4 },
];

const result = arr.reduce((element, obj) => {
    const {color, id} = obj;

    if(!element[color]) {
        element[color] = {};
    }

    element[color][id] = obj;

    return element;
}, {});
console.log(result);