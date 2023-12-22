"use strict";
const getRandomDelay = () => {
    const minSeconds = Math.ceil(3);
    const maxSeconds = Math.floor(7);
    const randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds)) + minSeconds;

    return randomSeconds;
}

const first = (cb) => {
    const randomSeconds = getRandomDelay();

    setTimeout(() => cb(randomSeconds),randomSeconds);
}

const second = (cb) => {
    const randomSeconds = getRandomDelay();

    setTimeout(() => cb(randomSeconds),randomSeconds);
}

const third = (cb) => {
    const randomSeconds = getRandomDelay();

    setTimeout(() => cb(randomSeconds),randomSeconds);
}

const waitForAll = () => {
    let delayFromA, delayFromB, delayFromC;

    first(delay => {
        delayFromA = delay;
        second(delay => {
            delayFromB = delay;
            third(delay => {
                delayFromC = delay;
                console.log(delayFromA + delayFromB + delayFromC);
            });
        });
    });
}

waitForAll();

