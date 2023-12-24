"use strict";

const getRandomDelay = () => {
    const minSeconds = 3;
    const maxSeconds = 7;
    const randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds)) + minSeconds;

    return randomSeconds;
}

const first = new Promise((resolve) => {
    const randomSeconds = getRandomDelay();

    setTimeout(() => {
        resolve(randomSeconds);
    }, randomSeconds);
}); 

const second = new Promise((resolve) => {
    const randomSeconds = getRandomDelay();

    setTimeout(() => {
        resolve(randomSeconds);
    }, randomSeconds);
}); 

const third = new Promise((resolve) => {
    const randomSeconds = getRandomDelay();

    setTimeout(() => {
        resolve(randomSeconds);
    }, randomSeconds);
}); 

const waitForAll = (delayFromA, delayFromB, delayFromC) => {
    console.log(delayFromA + delayFromB + delayFromC);
}

Promise.all([
    first,
    second,
    third
]).then((values) => {
    const [delayFromA, delayFromB, delayFromC] = values;
    waitForAll(delayFromA, delayFromB, delayFromC);
});
