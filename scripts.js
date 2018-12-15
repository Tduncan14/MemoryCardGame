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

     
 }
  else{
      //second card flip
      hasFlippedCard =false;
      secondCard = this

      console.log({firstCard,secondCard});

      // do both cards match

      if(firstCard.dataset.framework === secondCard.dataset.framework){
          firstCard.removeEventListener('click' , flipcard);
          secondCard.removeEventListener('click',flipcard);

      }
      console.log("Function was excuted");
      
  }

}



//loops through the card
cards.forEach(card => card.addEventListener('click' , flipcard));