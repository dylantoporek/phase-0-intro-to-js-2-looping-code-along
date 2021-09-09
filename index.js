// Code your solutions in this file

function writeCards(names, event) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return cards;
}
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");


function countDown(x) {
    while (x >= 0) {
        console.log(x);
        x--
    }
    
    
}
countDown(10);