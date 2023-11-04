const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function(array, number) {
    return array.splice(number - 1, 1);
}

removeElement(array, 5);
console.log(array);