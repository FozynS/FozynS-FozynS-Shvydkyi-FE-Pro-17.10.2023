/**
Створити функцію, що змінює стиль строчки із kebabCase в camelCase

Для рішення задачі використовуйте String.prototype.replace

const kebabCaseToCamelCase = (string) => {
// code;
// use replace method
}


console.log(kebabCaseToCamelCase('my-class')); // 'myClass'
console.log(kebabCaseToCamelCase('get-element-by-id')); // 'getElementById'
console.log(kebabCaseToCamelCase('class')); // 'class'
*/

const kebabCaseToCamelCase = (string) => {
    const result = string.replace(/-([a-z])/g, (elem, match) => match.toUpperCase());
    return result;
}

console.log(kebabCaseToCamelCase('my-class')); // 'myClass'
console.log(kebabCaseToCamelCase('get-element-by-id')); // 'getElementById'
console.log(kebabCaseToCamelCase('class')); // 'class'