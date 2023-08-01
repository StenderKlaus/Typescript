"use strict";
/////////////////////////////////////////////////////////////
///// Generics /////
/////////////////////////////////////////////////////////////
const stringEcho = (arg) => arg;
// sind Platzhalter für Typen, wenn wir den Typ, der an eine Funktion, Klasse usw. übergeben wird, nicht kennen
// Dies ist eine Funktion, die ein Argument vom Typ string enthält und das selbe Argument als string zurückgibt, genau so wie es übergeben wurde, es funktioniert nur mit einem string, technisch tut es nichts, aber das ist nur zum Verständnis, was ein Generic ist.
// Alles was in "stringEcho" gespeichert wird, ist automatisch immer ein "string".
const echo = (arg) => arg;
// In dieser Funktion ist ein zu Beginn unbekannter Datentyp. Dieser Datentyp kann alles beinhalten (String, Number usw). Dieser unbekannte Datentyp wird deklariert durch die html-ähnliche Art "<" und ">". In dieser Typen-Variablen werden keine Werte gespeichert werden, sondern nur Typen (String, Number usw). 
// um eine generische Funktionsversion der obigen Funktion zu erstellen, die mit jedem Typ arbeiten kann, abstrahieren wir den Typ aus der Funktion
//Dies ist eine generische Funktion, d.h. sie gibt das gleiche Argument / den gleichen Parameter zurück, unabhängig davon, um welchen Typ es sich handelt.
// Das T als Rückgabe der Funktion ist nicht notwendig. Das T kann auch innerhalb der Funktion verwendet werden. Im Gegensatz zum oberen Beispiel wird hier jedoch keine Einschränkung des Datantypes vorgenommen. Alles Datentypen können / dürfen angenommen werden, und werden in ihrer Art noch verändert wie z.B. Ist false ein boolean?
const isObj2 = (arg) => {
    if (typeof arg !== "object") {
        return false;
    }
    else if (Array.isArray(arg) === true) {
        return false;
    }
    else if (arg === null) {
        return false;
    }
    else
        return true;
};
console.log(isObj2(true)); // Ausgabe: false, denn es ist kein Object
console.log(isObj2('John')); // Ausgabe: false, denn es ist kein Object
console.log(isObj2([1, 2, 3])); // Ausgabe: false, denn es ist kein Object
console.log(isObj2({ name: 'John' })); // Ausgabe: true, denn der übergebene Wert ist in den {}-Klammern. Egal ob dieses Obekt einen Wert enthält oder ein leeres Objekt ist. Ein Objekt definiert sich immer über mindestens einen Key ("name") und ein Value ("John") enthalten oder wie o.g. ein leeres Objekt. 
console.log(isObj2(null)); // Ausgabe: false, denn es ist kein Object
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log('George', typeof [1, 2, 3]); // Ausgabe: George object
console.log('George2', typeof null); // Ausgabe: George2 object
console.log('George3', typeof 1); // Ausgabe: George3 number
console.log('George4', Array.isArray([1, 2, 3])); // Ausgabe: George4 true
console.log(isObj(true)); // Ausgabe: false, denn es ist kein Object
console.log(isObj('John')); // Ausgabe: false, denn es ist kein Object
console.log(isObj([1, 2, 3])); // Ausgabe: false, denn es ist kein Object
console.log(isObj({ name: 'John' })); // Ausgabe: true, denn der übergebene Wert ist in den {}-Klammern. Egal ob dieses Obekt einen Wert enthält oder ein leeres Objekt ist.
console.log(isObj(null)); // Ausgabe: false, denn es ist kein Object
/////////////////////////////////////////////////////////////
///// Beispiel 2 /////
/////////////////////////////////////////////////////////////
const isTrue = (arg) => {
    if (Array.isArray(arg) && arg.length) {
        return { arg: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg: arg, is: false };
    }
    return { arg: arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Dave' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // Process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'John' }));
//console.log(processUser({name: 'John'})); Durch das fehlen der ID wird ein Bug erzeugt.
/////////////////////////////////////////////////////////////
///// Beispiel 5 /////
/////////////////////////////////////////////////////////////
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
//EX6 : this is example of using Generics in a Class :
//we have  as array of objects each one of these objects have the type T which extends HasID and each Object has  keys of type K and values
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12 /// Dies führt zu einem Fehler, da wir zuerst eine Zeichenkette zugewiesen haben und der TS daraus schließt, dass der Datentyp Zeichenkette ist.
const myState = new StateObject([15]);
myState.state = ['Dave', 42, true];
console.log(myState.state);
