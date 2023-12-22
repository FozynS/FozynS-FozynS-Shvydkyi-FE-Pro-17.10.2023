/*
Hw
script-new.js
script-old.js
const useNewScript = false; // true
1 depending on the useNewScript - connect new or old script to the page

2 by default - use NEW script
BUT if for any reasons new will not work -> use old
script.onerror = () =>
script.src = new

3 If error -> reconnect NEW
If error -> reconnect NEW
If error -> reconnect NEW
If error -> reconnect NEW
If error -> reconnect NEW
If error -> connect old
*/
"use strict";
const body = document.querySelector('body')
const script = document.createElement('script');
script.setAttribute('src', '');

const useNewScript = true;

switch (useNewScript) {
    case false:
        script.src = 'script-old.js';
        body.appendChild(script);
        break;
    case true:
        script.src = 'script-new.js';
        body.appendChild(script);
        break;
    default: 
        script.src = 'script-new.js';
        body.appendChild(script);
        break;
}

script.onerror = () => {
    script.src = 'script-old.js';
    body.appendChild(script);
}

for (let step = 0; step < 5; step++) {
    try {
        script.src = 'script-new.js';
        body.appendChild(script);
    } catch (e) {
        script.src = 'script-old.js';
        body.appendChild(script);
        console.log(e);
    }
}