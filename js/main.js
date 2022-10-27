console.log('Ciao');

const kmNeeded = prompt('Quanti km devi fare?');
const age = prompt('Inserisci la tua eta: ');
const kmPrice = 0.21;
const discount20 = 0.8;
const doscount40 = 0.6;
let ticketPrice;

if (age < 18) {
	ticketPrice = kmPrice * kmNeeded * discount20;
	console.log(ticketPrice);
} else {
	console.log('impossibile calcolare');
}
