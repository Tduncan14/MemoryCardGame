const cards = document.querySelectorAll('.memory-card');

function flipcard (){
    console.log("the function works");
}


//loops through the card
cards.forEach(card => card.addEventListener('click' , flipcard));