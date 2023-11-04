const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = function(length, characters) {
    let randomIndex;
    let result = '';
    for(let i = 0; i < length; i++) {
        randomIndex =  Math.random() * characters.length;
        result += characters.charAt(randomIndex);
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key);