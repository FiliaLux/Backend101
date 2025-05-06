"use strict";

function sleep (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const promise1 = sleep(1000);

promise1.then(() => {
    console.log("It's been a second");
});
