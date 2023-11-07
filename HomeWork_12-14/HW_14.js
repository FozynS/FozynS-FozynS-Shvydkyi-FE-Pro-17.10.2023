const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = function(length, characters) {
    let result = '';
    for(let i = 0, randomIndex; i < length; i++) {
        randomIndex =  Math.floor(length + Math.random() * (characters.length + 1 - length));
        result += characters.charAt(randomIndex);
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key);