"use strict";
// convert to more or less specific
let a = 'Hello';
let b = a; // less specific
let c = a; // more specific
// Achtung --> Wichtig!!!
// Die Angelbrackets (<, >)können nicht in .tsx-files genutzt werden
let d = 'World';
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Achtung --> Wichtig!!!
// Be careful! Typescript sees no problem - but a string is returned!!!
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as a string
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
