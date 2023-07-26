////////////////////////////
///// Index Signatures /////
////////////////////////////

interface TransactionObj {
    [index: string]: number
}
// interface TransactionObj {
//    Pizza: number,
//    Books: number,
//    Job: number,
//    'First Name': string
//}

// Mit Interface wird ein Objekt installiert. Keine Klasse. Ein Default-Wert z.B.
// Pizza: number = -20 produziert automatisch einen Bug.
// Eine Klasse definiert ein Objekt. In dieser Klasse ist ein Default-Wert definierbar.
// In einem Object darf es keine Default-Werte geben!!!

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
//    'First Name': 'John',
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
console.log(todaysTransactions['Books']);
console.log(todaysTransactions['Job']);
// console.log(todaysTransactions.First Name);
// Wird der Param mit 2 Wörtern eingegeben --> Bug.
// console.log(todaysTransactions['First Name']);

let prop: string = 'Pizza';

const todaysNet = (transactions: TransactionObj) => {
    let total = 0
    for ( const transaction in transactions ) {
        total += transactions[transaction]
    // Durch "for - in" Loop wird automatisch der komplette Keys-Bereich von einzelnen Objekten (dessen Value) von a nach z durchlaufen. Die Berechnung erfolgt dann immer durch in diesem Beispiel "+=". Nach Durchlaufen aller Keys springt das Programm automatisch zum "return".
    }
    return total
}

console.log(todaysNet(todaysTransactions))