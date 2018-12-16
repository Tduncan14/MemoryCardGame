const cards = document.querySelectorAll('.memory-card');

// storing cards

let hasFlippedCard = false;
let firstCard,secondCard;
let lockboard =false;


function flipcard (){
  if(lockboard) return
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
      checkForMatch()

   

}
}

function checkForMatch(){
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        firstCard.removeEventListener('click' , flipcard);
        secondCard.removeEventListener('click',flipcard);
        disableCards();
    }

    else{
     unflipCards();

    
  }
}

function disableCards(){
    firstCard.removeEventListener('click' , flipcard);
    secondCard.removeEventListener('click',flipcard);
}


function unflipCards (){
    lockboard = true;
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockboard =false;
    },1500);



}

//loops through the card
cards.forEach(card => card.addEventListener('click' , flipcard));