"use strict";

/*
Дано масив елементів класу User (id, name, age). 
Перетворити цей масив на об"єкт, що в якості ключів буде мати айдішники користувачів, а в якості значень - відповідних юзерів
*/

class User {
    id;
    name;
    age;

    constructor(id, name , age) {
        this.id = id;
        this.name = name;
        this.age = age;
    };
};

const newUsers = [
    new User(1, 'Danylo', 22),
    new User(2, 'Nikita', 19),
    new User(3, 'Denis', 24),
];

const transformArraytoObject = (arr) => {
    const obj = {};

    //** Method 1 */
    for (const key of arr) {
        obj[key.id] = key;
    }
    
    //** Method 2 */
    arr.forEach((user) => {
        obj[user.id] = user;
    });

    return obj;
};

const userInObject = transformArraytoObject(newUser);

// {
//   "id0": User(id0, ...),
//   "id1": User(id1, ...),
// };