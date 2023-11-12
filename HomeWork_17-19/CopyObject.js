/* HW - create a function to deep copy an Object */
const copyObject = (object) => {
    const newObject = {};

    for (const key in object) {
        const item = object[key];

        if(typeof item === 'object' && typeof item !== null) {
            newObject[key] = copyObject(item);
        } else {
            newObject[key] = item;
        }   
    }
    return newObject;
}

const original = {
    name: 'Slava',
    age: 35,
    mother: {
        name: 'Natasha',
        age: 58,
    },
    score: [1],
};

const copy = copyObject(original);
copy.mother.name = 'Olha';
copy.score[0] = 2;

console.assert(original !== copy);
console.assert(copy.name === original.name);
console.assert(copy.mother.name !== original.mother.name);
console.assert(copy.score !== original.score);
console.assert(copy.score[0] !== original.score[0]);