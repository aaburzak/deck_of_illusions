
const drawCard = $("#drawButton");
const cardNameElement = $("#cardName");
const cardImageElement = $("#cardImage");

let shuffleCards, currentCardIndex;

drawCard.click(selectCard);

function selectCard(){
  shuffleCards = deck.sort(()=> Math.random() -.5 )
  currentCardIndex = 0
  setNextCard ()
  console.log("Is This your card?")
};

function setNextCard (){
  showCard(shuffleCards[currentCardIndex])
};

function showCard(deck){
  cardNameElement.innerHtml = deck.card_Name
  console.log(cardNameElement)
}


// let randomCard, currentCardIndex;

const deck  = [
{
  card_Name:'Dragon',
  card_Image:"assets\images\dragon.png",
},
{
  card_Name:'Knight',
  card_Image:"assets\images\knight.png",
},
{
  card_Name:'Druid',
  card_Image:"assets\images\druid.png",
},
];