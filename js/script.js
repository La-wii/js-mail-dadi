// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

var giocatore = Math.floor(Math.random() * 6 + 1 );
console.log(giocatore);
var computer = Math.floor(Math.random() * 6 + 1);
console.log(computer);
var vincitore = 'Hai vinto tu!';

// confronto i due risultati e dò la vittoria al punteggio più alto
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (computer > giocatore) {

    vincitore = 'Ha vinto il computer';

} else if (computer == giocatore) {

    vincitore = 'Avete pareggiato!';
}


document.getElementById('tu').innerHTML = 'Il tuo dado : ' + giocatore;
document.getElementById('computer').innerHTML = 'Il dado del computer : ' + computer;
document.getElementById('chihavinto').innerHTML = vincitore;



