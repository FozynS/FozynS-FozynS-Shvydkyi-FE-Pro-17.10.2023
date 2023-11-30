"use strict";
/*
Дано результуючий об"єкт із першого завдання
{
    "id0": User(id0, ...),
    "id1": User(id1, ...),
    ...
}
Задача - написати функцію, що сортує всіх юзерів за заданим параментром (age або name)
const sortUsers = (OBJECT_FROM_TASK1, sortParam) => {
    your cod
    return ARRAY_OF_USERS_SORTED_BY_PARAM;
}
*/

class User {
    id;
    name;
    age;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    };
};

const newUser = [
    new User(1, 'Danylo', 22),
    new User(2, 'Nikita', 19),
    new User(3, 'Denis', 24),
];

const transformArraytoObject = (arr) => {
    const obj = {};

    arr.forEach((user) => {
        obj[user.id] = user;
    });

    return obj;
};

const userInObject = transformArraytoObject(newUser);
console.log(userInObject);


const sortUsers = (object, sortParam) => {
    const usersArray = [];

    for (const item in object) {
        usersArray.push(object[item]);
    }

    usersArray.sort((a, b) => {
        const valueA = a[sortParam];
        const valueB = b[sortParam];

        if(typeof valueA === 'number' && typeof valueB === 'number') {
            return valueA - valueB;
        } else if (typeof valueA === 'string' && typeof valueB === 'string'){
            return valueA > valueB ? 1 : -1;
        }
    });

    return usersArray;
};

const sortListUsers = sortUsers(userInObject, 'name');
console.log(sortListUsers);