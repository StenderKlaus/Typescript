"use strict";
// Bei Nutzung von "interface" anstatt "type" wird jedoch ein Bug produziert.
// Beispiel: interface PostID = string | number.
// Literal types
let MyName;
// username = 'George' produziert eine Bug-Meldung. Daher -->
let userName;
userName = 'George';
// "userName" welche nicht in Zeile 37 definiert wurden, produzieren einen Bug.
// Functions
// Die Definition: const add = (a, b) produziert einen Bug da nicht erkannt wird "was" ist a bzw b.
const add = (a, b) => {
    return a + b;
};
const add1 = (a, b) => {
    return a + b;
};
const add2 = (a, b) => {
    let c = a + b;
    return c.toString();
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello world');
logMsg(add(2, 3));
// "logMsg(add('2', 3))" produziert wiederum einen Bug, da unterschiedliche ('2' als "string", während "3" als "number") Formate gewählt wurden. 
let substract = function (d, e) {
    return d - e;
};
// interface mathFunction { 
//    (a: number, b: number): number
// }
// Es führen beide Wege zum korrekten Ergebnis.
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(2, 2));
// Optional parameters
const addAll = (a, b, c) => {
    return a + b + c;
};
// Wenn nun "c" keine "must-have-Eingabe" ist, würde bei folgenden Code ein Bug produziert.
// const addAll = (a: number, b: number, c?: number): number => {
//      return a + b + c
//  }
// Dies wird umgangen durch:
const addAll1 = (a, b, c) => {
    if (typeof c !== 'undefined' && typeof b !== 'undefined') {
        return a + b + c;
    }
    if (typeof b === 'undefined' && typeof c !== 'undefined') {
        return a + c;
    }
    if (typeof c === 'undefined' && typeof b !== 'undefined') {
        return a + b;
    }
    return a;
};
console.log(addAll1(3, 3));
// Default param values
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll1(2, 3, 2));
logMsg(addAll1(2, 3));
logMsg(sumAll(2, 3));
// Jetzt wird dem param "a" ebenfalls eine Wertvorgabe gemacht ( a = 10)
const sumAll1 = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll1(2, 3, 2)); //Ergebnis = 7
logMsg(addAll1(2, 3)); //Ergebnis = 5
logMsg(sumAll1(2, 3)); //Ergebnis = 7
logMsg(sumAll1(undefined, 3)); //Ergebnis = 15
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4)); //Ergebnis = 10
const total1 = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total1(1, 2)); //Ergebnis = 3
logMsg(total1(1, 2, 3)); //Ergebnis = 6
logMsg(total1(10, 2, 3)); //Ergebnis = 15
// Never Type
// Beim hovern über "createError" wird angezeigt --> "never"
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infiniteLoop = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the "never"-Type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
