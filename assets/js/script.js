
const drawCard = $("#drawButton");

let randomCard, currentCardIndex;

let deckOfCards = [
  {
    name: "name1",
    pic: "image1"
  },
  {
    name: "name2",
    pic: "image2"
  },
  {
    name: "name3",
    pic: "image3"
  },
  {
    name: "name4",
    pic: "image4"
  },
  {
    name: "name5",
    pic: "image5"
  },
];

drawCard.click(selectCard);

function selectCard(){
  randomCard = deckOfCards.sort(() => Math.random() -.5)
  currentCardIndex = 0
  // cardContainer.classList.remove('hide')
  showCard(randomCard[currentCardIndex])
};

function showCard()