let stringArray = ['one', 'two', 'three', 'four', 'five']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]

stringArray[0] = 'John'
stringArray.push('42')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArray
mixedData = guitars

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

myTuple[1] = 42

// Objects
let myObjects: object
myObjects = []
console.log(typeof myObjects);

myObjects = bands
console.log(typeof myObjects);

myObjects = {}
console.log(typeof myObjects);

const exampleObject = {
    prop1: 'Klaus',
    prop2: true,
}

exampleObject.prop2 = false

// Für die definition "type" kann man mit dem delben Ergebnis "interface" nutzen.
// "type" & "interface" haben das selbe Ergebnis.
type Guitarist = {
    name: string,
    active: boolean,
    albums: (string | number) []
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp

type Guitarist1 = {
    name: string,
    active?: boolean,
    albums: (string | number) []
}

let evh1: Guitarist1 = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp1: Guitarist1 = {
    name: 'Jimmy',

    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(evh));

const greetGuitarist1 = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name?.toUpperCase()}!`
    }
    return `Hello, no guitarist available`
}

console.log(greetGuitarist1(evh));

// Enums
// Eine Aufzählung ist eine spezielle „Klasse“, die eine Gruppe von Konstanten (unveränderlichen Variablen) darstellt.
//Enums gibt es in zwei Varianten "string" und "numeric". 

enum Grade {
    U,
    D,
    C,
    B,
    A,
}

console.log(Grade.U);
// Da der Buchstabe "U" auf Position 0 ist wird dies als Position ausgegeben / angezeigt.
enum Grade1 {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade1.U);
// Da der Buchstabe "U" auf die Position 1 zugewiesen wurde, werden alle folgenden Listenpunkte dem Grundwert zu addiert. Beispiel zu sehen beim "hovern" über "D" usw.

