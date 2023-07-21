"use strict";
class Coder {
    constructor(name, music, age, language = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old.`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.language);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.language}`;
    }
}
const Sarah = new WebDev('Mac', 'Sarah', 'LoFi', 25);
console.log(Sarah.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
//////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
        // ++ vor dem Peeps.count bedeutet das die erste id mit dem Wert "1" beginnt
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(John.id);
console.log(Amy.id);
console.log(Steve.id);
console.log(Peeps.count);
/////////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Params is not an Array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
