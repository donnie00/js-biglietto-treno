const firstPrice = document.getElementById('firstPrice');
const actualPrice = document.getElementById('actualPrice');

const kmNeeded = parseFloat(prompt('Quanti km devi fare?'));
const age = parseInt(prompt('Inserisci la tua eta: '));

const kmPrice = 0.21;
const discount20 = 0.8;
const discount40 = 0.6;

const ticketPrice = kmPrice * kmNeeded;
let discountedPrice = ticketPrice;

if (age < 18) {
	discountedPrice = ticketPrice * discount20;
} else if (age > 65) {
	discountedPrice = ticketPrice * discount40;
}

firstPrice.innerHTML = ticketPrice.toFixed(2);
actualPrice.innerHTML = discountedPrice.toFixed(2);
