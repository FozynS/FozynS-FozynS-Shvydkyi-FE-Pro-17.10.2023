"use strict";
const getRandomDelay = () => {
    const minSeconds = 3;
    const maxSeconds = Math.floor(7);
    const randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds)) + minSeconds;
    const miliSeconds = 1000;

    return randomSeconds * miliSeconds;
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
    let functionCompleted = 0;

    const handleCompletion = () => {
        functionCompleted++;
        if(functionCompleted === 3) {
            console.log(delayFromA + delayFromB + delayFromC);
        }
    }

    first(delay => {
        delayFromA = delay; 
        handleCompletion();
    });
    second(delay => {
        delayFromB = delay;
        handleCompletion();
    });
    third(delay => {
        delayFromC = delay;
        handleCompletion();
    });
}

waitForAll();



// first(delay => {
//     delayFromA = delay;
//     second(delay => {
//         delayFromB = delay;
//         third(delay => {
//             delayFromC = delay;
//             console.log(delayFromA + delayFromB + delayFromC);
//         });
//     });
// });