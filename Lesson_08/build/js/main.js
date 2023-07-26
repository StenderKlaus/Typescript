"use strict";
////////////////////////////
///// Index Signatures /////
////////////////////////////
// Mit Interface wird ein Objekt installiert. Keine Klasse. Ein Default-Wert z.B.
// Pizza: number = -20 produziert automatisch einen Bug.
// Eine Klasse definiert ein Objekt. In dieser Klasse ist ein Default-Wert definierbar.
// In einem Object darf es keine Default-Werte geben!!!
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    //    'First Name': 'John',
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
console.log(todaysTransactions['Books']);
console.log(todaysTransactions['Job']);
// console.log(todaysTransactions.First Name);
// Wird der Param mit 2 Wörtern eingegeben --> Bug.
// console.log(todaysTransactions['First Name']);
let prop = 'Pizza';
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
        // Durch "for - in" Loop wird automatisch der komplette Keys-Bereich von einzelnen Objekten (dessen Value) von a nach z durchlaufen. Die Berechnung erfolgt dann immer durch in diesem Beispiel "+=". Nach Durchlaufen aller Keys springt das Programm automatisch zum "return".
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
todaysTransactions.Pizza = 40;
console.log(todaysTransactions["Dave"]);
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
// Durch das auskommentieren von Zeile 59 wird hier in Zeile 71 ein Bug produziert, da "test" unknown / undefined ist.
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
/////////////////////////////////////////////////////////////
///// Beispiel 2.1 /////
/////////////////////////////////////////////////////////////
Object.keys(student).map(key => {
    console.log(student[key]);
});
/////////////////////////////////////////////////////////////
///// Beispiel 2.2 /////
/////////////////////////////////////////////////////////////
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA'); // Ausgabe = Student GPA: 3.5
logStudentKey(student, 'name'); // Ausgabe = Student name: Doug
logStudentKey(student, 'classes'); // Ausgabe = Student classes: 100,200
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
