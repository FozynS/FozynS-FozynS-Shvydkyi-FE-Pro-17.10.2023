/*
У вас є
масив із 10 кольорів
const colors = ['color-1', 'color-2', ..., 'color-10'];
масив юзерів (об"єкт із властивостями name та color)
const users = [
	{name: 'Slava', color: 'color-4'},
	{name: 'Lena', color: 'color-7'},
];
Вам треба реалізувати функцію addUser, яка буде приймати ім"я як аргумент та записувати нового юзера в масив
Єдина умова - колір кожного юзера має бути вибраним із масиву кольорів та має бути унікальним в межах 
користувачів масиву
Наприклад color-4 та color-7 вже зайняті і новим користувачам не можуть бути додані
*/

const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8', 'color-9', 'color-10'];
const users = [
	{name: 'Slava', color: 'color-4'},
	{name: 'Lena', color: 'color-7'},
];

const getRandomIndex = (arr) => {
    const min = 0;
    const max = Math.floor(arr.length - 1);
    const randomIndex = Math.floor(Math.random() * (max - min) + min);

    return randomIndex;
}

const checkUniqColor = (index, colors, users) => {
    const newColor = colors[index];

    for (let i = 0; i < users.length ; i++) {
        const element = users[i].color;
    
        if(newColor.includes(element)) {
            console.log('Sorry, it"s not uniq color');
            return null;
        }
    }

    return newColor;
}

const addUser = (name, colors, arr) => {
    let uniqColor = null;

    do {
        const randomIndex = getRandomIndex(colors);
        uniqColor = checkUniqColor(randomIndex, colors, arr);
    } while (uniqColor === null);

    return arr.push({
        name,
        color: uniqColor,
    });
}
const newUser = addUser('Danylo', colors, users);
console.log(users);