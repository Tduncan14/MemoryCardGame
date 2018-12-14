const cards = document.querySelectorAll('.memory-card');

// storing cards

let hasFlippedCard = false;
let firstCard,secondCard;

function flipcard (){
 this.classList.toggle('flip');

 if(!hasFlippedCard){
     // first click
     hasFlippedCard =true;
     firstCard = this;

     console.log(hasFlippedCard , firstCard);
 }
  else{
      //second card flip
      hasFlippedCard =false;
      secondCard = this
  }
}



//loops through the card
cards.forEach(card => card.addEventListener('click' , flipcard));