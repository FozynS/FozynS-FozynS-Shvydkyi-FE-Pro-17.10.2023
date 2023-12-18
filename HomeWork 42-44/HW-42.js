/**
Створити функцію, що змінює стиль строчки із camelCase в kebabCase

Для рішення задачі використовуйте String.prototype.replace

const camelCaseToKebabCase = (string) => {
// code;
// use replace method
}

console.log(camelCaseToKebabCase('myClass')); // 'my-class'
console.log(camelCaseToKebabCase('getElementById')); // 'get-element-by-id'
console.log(camelCaseToKebabCase('class')); // 'class'
*/

const camelCaseToKebabCase = (string) => {
    const result = string.replace(/([A-Z])/g, match => '-' + match.toLowerCase());
    return result;
}

console.log(camelCaseToKebabCase('myClass')); // 'my-class'
console.log(camelCaseToKebabCase('getElementById')); // 'get-element-by-id'
console.log(camelCaseToKebabCase('class')); // 'class'