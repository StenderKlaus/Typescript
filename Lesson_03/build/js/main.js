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
