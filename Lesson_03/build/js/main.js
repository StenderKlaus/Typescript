"use strict";
let stringArray = ['one', 'two', 'three', 'four', 'five'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArray[0] = 'John';
stringArray.push('42');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArray;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 42;
// Objects
let myObjects;
myObjects = [];
console.log(typeof myObjects);
myObjects = bands;
console.log(typeof myObjects);
myObjects = {};
console.log(typeof myObjects);
const exampleObject = {
    prop1: 'Klaus',
    prop2: true,
};
exampleObject.prop2 = false;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp;
let evh1 = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp1 = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(evh));
const greetGuitarist1 = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return `Hello, no guitarist available`;
};
console.log(greetGuitarist1(evh));
// Enums
// Eine Aufzählung ist eine spezielle „Klasse“, die eine Gruppe von Konstanten (unveränderlichen Variablen) darstellt.
//Enums gibt es in zwei Varianten "string" und "numeric". 
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
// Da der Buchstabe "U" auf Position 0 ist wird dies als Position ausgegeben / angezeigt.
var Grade1;
(function (Grade1) {
    Grade1[Grade1["U"] = 1] = "U";
    Grade1[Grade1["D"] = 2] = "D";
    Grade1[Grade1["C"] = 3] = "C";
    Grade1[Grade1["B"] = 4] = "B";
    Grade1[Grade1["A"] = 5] = "A";
})(Grade1 || (Grade1 = {}));
console.log(Grade1.U);
// Da der Buchstabe "U" auf die Position 1 zugewiesen wurde, werden alle folgenden Listenpunkte dem Grundwert zu addiert. Beispiel zu sehen beim "hovern" über "D" usw.
