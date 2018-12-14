const cards = document.querySelectorAll('.memory-card');

function flipcard (){
 this.classList.toggle('flip');
}


//loops through the card
cards.forEach(card => card.addEventListener('click' , flipcard));