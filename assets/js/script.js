const startDraw = $("#startButton")
const drawCard = $("#drawButton");
const cardNameElement = $("#cardName");
const cardImageElement = $(".cardImage");
const cardDescElement = $("#cardDesc");
const cardCountElement = $("#cardsLeft");
const finishElement = $("#finishDeck");
const smokeElement = $("#smokePic")

let shuffleCards, currentCardIndex;

startDraw.click(selectCard);

drawCard.click(()=>{
  currentCardIndex++;
  showCard(shuffleCards[currentCardIndex]);
});

function selectCard() {
  shuffleCards = deck.sort(() => Math.random() - 0.5);
  currentCardIndex = 0;
  startDraw.addClass("hide");
  showCard(shuffleCards[currentCardIndex]);
  console.log(currentCardIndex);
}



function showCard(deck) {
  cardNameElement.text(deck.card_Name);
  cardImageElement.attr("src", deck.card_Image);
  cardDescElement.text(deck.card_Description);

  if(shuffleCards.length > currentCardIndex +1){
    drawCard.removeClass("hide");
  } else{
    drawCard.addClass("hide");
    cardNameElement.addClass("hide");
    cardDescElement.addClass("hide");
    finishElement.removeClass("hide");
    smokeElement.removeClass("hide");
  }


  // console.log(cardNameElement);
  // console.log(cardImageElement);
}

const deck = [
  {
    card_Name: "Red Dragon",
    card_Image: "assets/images/dragon.png",
    card_Description:
      "The odor of sulfur and pumice surrounds a red dragon, whose swept-back horns and spinal frill define its silhouette. Its beaked snout vents smoke at all times, and its eyes dance with flame when it is angry.",
  },
  {
    card_Name: "Knight & Four Guards",
    card_Image: "assets/images/knight.png",
    card_Description:
      "Knights are warriors who pledge service to rulers, religious orders, and noble causes. A knight’s Alignment determines the extent to which a pledge is honored. Whether undertaking a quest or patrolling a realm, a knight often travels with an entourage that includes squires and Hirelings who are commoners.",
  },
  {
    card_Name: "Succubus (Incubus)",
    card_Image: "assets/images/succubus.png",
    card_Description:
      "When uncovered in her true form, a succubus appear as a stunningly beautiful woman of statuesque build and perfect figure, with flawless skin and red or raven-black hair, but also clawed fingers and large dark-hued or reddish bat-like wings mounted on their backs. Their eyes are said to smolder with sinister desire.  Small horns or a tail might also be seen. Succubi stand on average around 6 feet (1.8 meters) tall and weighed 125 pounds (57 kilograms).",
  },
  {
    card_Name: "Druid",
    card_Image: "assets/images/druid.png",
    card_Description:
      "Druids dwell in forests and other secluded wilderness locations, where they protect the natural world from monsters and the encroachment of civilization. Some are tribal shamans who heal the sick, pray to animal spirits, and provide spiritual guidance.",
  },
  {
    card_Name: "Cloud Giant",
    card_Image: "assets/images/cloudGiant.png",
    card_Description:
      "Cloud giants’ skin ranges in color from milky white to light sky blue. Their hair is silvery white or brass, and their eyes are iridescent blue. Adult males are about 18 feet tall and weigh about 5,000 pounds. ",
  },
  {
    card_Name: "Ettin",
    card_Image: "assets/images/ettin.png",
    card_Description:
      "At first glance, ettins seemed like relatively short members of other giant races, about 13 ft (4 m) tall, two-headed hill or stone giants, but upon closer examination even hill giants seemed civilized compared to them. They are hulking creatures with exceptionally broad shoulders, long arms, and great weight, reports of their heaviness ranging from around 1,000 lb (450 kg) to exceeding 5,000 lb (2,300 kg). Strangely, they are slightly lop-sided, the right side being slightly more muscular and well-developed than the left, although not enough to detract from their barbaric image.",
  },
  {
    card_Name: "Bugbear",
    card_Image: "assets/images/bugbear.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Goblin",
    card_Image: "assets/images/goblin.png",
    card_Description: "It's a Druid!",
  },

  {
    card_Name: "Beholder",
    card_Image: "assets/images/beholder.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Archmage & Apprentice",
    card_Image: "assets/images/mage.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Night Hag",
    card_Image: "assets/images/nightHag.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Assassin",
    card_Image: "assets/images/assassin.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Fire Giant",
    card_Image: "assets/images/fireGiant.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Ogre Mage",
    card_Image: "assets/images/ogreMage.png",
    card_Description:
      "Ogres are hulking giants notorious for their quick tempers. When its rage is incited, an ogre lashes out in a frustrated tantrum until it runs out of objects or creatures to smash.  Occasionally, they learn magic.",
  },
  {
    card_Name: "Gnoll",
    card_Image: "assets/images/gnoll.png",
    card_Description:
      "Gnolls are feral, hyena-headed humanoids that attack without warning, slaughtering their victims and devouring their flesh.",
  },
  {
    card_Name: "Kobold",
    card_Image: "assets/images/kobold.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Lich",
    card_Image: "assets/images/lich.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Priest & Two Acolytes",
    card_Image: "assets/images/priest.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Medusa",
    card_Image: "assets/images/medusa.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Veteran",
    card_Image: "assets/images/veteran.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Frost Giant",
    card_Image: "assets/images/frostGiant.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Troll",
    card_Image: "assets/images/troll.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Hobgoblin",
    card_Image: "assets/images/hobgoblin.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Goblin",
    card_Image: "assets/images/goblin.png",
    card_Description: "It's a Druid!",
  },

  {
    card_Name: "Iron Golem",
    card_Image: "assets/images/ironGolem.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Bandit Captain & Three Bandits",
    card_Image: "assets/images/bandits.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Erinyes",
    card_Image: "assets/images/erinyes.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Berserker",
    card_Image: "assets/images/berserker.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Hill Giant",
    card_Image: "assets/images/hillGiant.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Ogre",
    card_Image: "assets/images/ogre.png",
    card_Description:
      "Ogres are hulking giants notorious for their quick tempers. When its rage is incited, an ogre lashes out in a frustrated tantrum until it runs out of objects or creatures to smash.",
  },
  {
    card_Name: "Orc",
    card_Image: "assets/images/orc.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "Kobold",
    card_Image: "assets/images/kobold.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "You!",
    card_Image: "assets/images/you1.png",
    card_Description: "It's a Druid!",
  },
  {
    card_Name: "You!",
    card_Image: "assets/images/you2.png",
    card_Description: "It's a Druid!",
  },
];
