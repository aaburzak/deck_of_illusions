const startDraw = $("#startButton");
const drawCard = $("#drawButton");
const cardNameElement = $("#cardName");
const cardImageElement = $(".cardImage");
const cardDescElement = $("#cardDesc");
const cardCountElement = $("#cardsLeft");
const finishElement = $("#finishDeck");
const smokeElement = $("#smokePic");

let deckCount = 34;

let shuffleCards, currentCardIndex;

startDraw.click(selectCard);

drawCard.click(() => {
  currentCardIndex++;
  showCard(shuffleCards[currentCardIndex]);
});

function selectCard() {
  shuffleCards = deck.sort(() => Math.random() - 0.5);
  currentCardIndex = 0;
  startDraw.addClass("hide");
  showCard(shuffleCards[currentCardIndex]);
}

function showCard(deck) {
  cardNameElement.text(deck.card_Name);
  cardImageElement.attr("src", deck.card_Image);
  cardDescElement.text(deck.card_Description);
  deckCount--;
  cardCountElement.text("Remaining Cards: " + deckCount);

  console.log(shuffleCards);

  if (shuffleCards.length > currentCardIndex + 1) {
    drawCard.removeClass("hide");
  } else {
    drawCard.addClass("hide");
    cardNameElement.addClass("hide");
    cardDescElement.addClass("hide");
    cardCountElement.addClass("hide");
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
      "When uncovered in her true form, a succubus appear as a stunningly beautiful woman of statuesque build and perfect figure, with flawless skin and red or raven-black hair, but also clawed fingers and large dark-hued or reddish bat-like wings mounted on their backs. Their eyes are said to smolder with sinister desire.",
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
      "Cloud giants’ skin ranges in color from milky white to light sky blue. Their hair is silvery white or brass, and their eyes are iridescent blue. ",
  },
  {
    card_Name: "Ettin",
    card_Image: "assets/images/ettin.png",
    card_Description:
      "Hulking creatures with exceptionally broad shoulders, long arms, and great weight. Strangely, Ettins are lop-sided, the right side being slightly more muscular and well-developed than the left, although not enough to detract from their barbaric image.",
  },
  {
    card_Name: "Bugbear",
    card_Image: "assets/images/bugbear.png",
    card_Description: "Bugbears are hairy goblinoids born for battle and mayhem. They survive by raiding and hunting, but are fond of setting ambushes and fleeing when outmatched.",
  },
  {
    card_Name: "Goblin",
    card_Image: "assets/images/goblin.png",
    card_Description: "Goblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings. Individually weak, they gather in large numbers to torment other creatures.",
  },

  {
    card_Name: "Beholder",
    card_Image: "assets/images/beholder.png",
    card_Description: "One glance at a beholder is enough to assess its foul and otherworldly nature. A beholder’s spheroid body is covered in chitinous plates, scales, or leathery flesh. Its great bulging eye sits above a wide, toothy maw, while the smaller eyestalks that crown its body twist and turn to keep its foes in sight. A beholder channels extraordinary levels of magical power. Its central eye emits a broad field of energy that can nullify the magic of its foes, while its eye stalks blast those foes with a host of powerful effects.",
  },
  {
    card_Name: "Archmage & Apprentice",
    card_Image: "assets/images/mage.png",
    card_Description: "Archmages are powerful (and usually quite old) spellcasters dedicated to the study of the arcane arts. Benevolent ones counsel kings and queens, while evil ones rule as tyrants and pursue lichdom. Those who are neither good nor evil sequester themselves in remote towers to practice their magic without interruption. An archmage typically has one or more apprentice mages, and an archmage's abode has numerous magical wards and guardians to discourage interlopers.",
  },
  {
    card_Name: "Night Hag",
    card_Image: "assets/images/nightHag.png",
    card_Description: "Night Hags possess blotched purple skin, and burning red eyes. Many night hags have horns of some sort. Their hands end in impossibly long fingers with sharp talons. The body of a night hag appears to be skeletally thin; however, they possess a great strength fueled by the hatred of all beautiful things.",
  },
  {
    card_Name: "Assassin",
    card_Image: "assets/images/assassin.png",
    card_Description: "Trained in the use of poison, assassins are remorseless killers who work for nobles, guildmasters, sovereigns, and anyone else who can afford them.",
  },
  {
    card_Name: "Fire Giant",
    card_Image: "assets/images/fireGiant.png",
    card_Description: "With dark skin and flaming red hair, fire giants have a fearsome reputation as soldiers and conquerors. They dwell among volcanoes, lava flows, and rocky mountains, and are known for their ability to burn, plunder, and destroy.",
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
    card_Description: "Kobolds are craven reptilian humanoids that commonly infest dungeons. They make up for their physical ineptitude with a cleverness for trap making.",
  },
  {
    card_Name: "Lich",
    card_Image: "assets/images/lich.png",
    card_Description: "Liches are generally gaunt and skeletal with withered flesh stretched tight across horribly visible bones but can vary greatly in appearance depending on their age. Some appear as skeletons dressed in regal finery, yet others might appear to be nothing more than lepers. Bright pinpoints of crimson light burned in the empty sockets of those whose eyes had been destroyed or otherwise lost or were so old they had simply rotted away.  They were often clad in dark, tattered robes. When moving, they seemed to glide as if floating on water.",
  },
  {
    card_Name: "Priest & Two Acolytes",
    card_Image: "assets/images/priest.png",
    card_Description: "Priests bring the teachings of their gods to the common folk. They are the spiritual leaders of temples and shrines and often hold positions of influence in their communities. Evil priests might work openly under a tyrant, or they might be the leaders of religious sects hidden in the shadows of good society, overseeing depraved rites. A priest typically has one or more acolytes to help with religious ceremonies and other sacred duties.",
  },
  {
    card_Name: "Medusa",
    card_Image: "assets/images/medusa.png",
    card_Description: "A victim of a terrible curse, the serpent-haired medusa petrifies all those who gaze upon it, turning creatures into stone monuments to its corruption.",
  },
  {
    card_Name: "Veteran",
    card_Image: "assets/images/veteran.png",
    card_Description: "Veterans are professional fighters that take up arms for pay or to protect something they believe in or value. Their ranks include soldiers retired from long service and warriors who never served anyone but themselves.",
  },
  {
    card_Name: "Frost Giant",
    card_Image: "assets/images/frostGiant.png",
    card_Description: "Frost giants are creatures of ice and snow, with hair and beards of pale white or light blue, and flesh as blue as glacial ice. They respect only brute strength and skill in battle.",
  },
  {
    card_Name: "Troll",
    card_Image: "assets/images/troll.png",
    card_Description: "Fearsome green-skinned giants, trolls eat anything they can catch and devour. Only acid and fire can arrest the regenerative properties of a troll’s flesh.",
  },
  {
    card_Name: "Hobgoblin",
    card_Image: "assets/images/hobgoblin.png",
    card_Description: "Hobgoblins are large goblinoids with dark orange or red-orange skin. A hobgoblin measures virtue by physical strength and martial prowess, caring about nothing except skill and cunning in battle.",
  },
  {
    card_Name: "Goblin",
    card_Image: "assets/images/goblin.png",
    card_Description: "Goblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings. Individually weak, they gather in large numbers to torment other creatures.",
  },

  {
    card_Name: "Iron Golem",
    card_Image: "assets/images/ironGolem.png",
    card_Description: "Made entirely out of Iron, these constructs are generally made with a bipedal, humanoid shape, but stylized to suit their creator. Though they typically are built to resemble some form of armor.",
  },
  {
    card_Name: "Bandit Captain & Three Bandits",
    card_Image: "assets/images/bandits.png",
    card_Description: "Bandits rove in gangs and are sometimes led by thugs, veterans, or spellcasters. Not all bandits are evil. Oppression, drought, disease, or famine can often drive otherwise honest folk to a life of banditry. Pirates are bandits of the high seas. They might be freebooters interested only in treasure and murder, or they might be privateers sanctioned by the crown to attack and plunder an enemy nation's vessels.",
  },
  {
    card_Name: "Erinyes",
    card_Image: "assets/images/erinyes.png",
    card_Description: "Erinyes appear as imposing yet beautiful figures, easily mistaken for celestials. Their natural forms normally possess glowing red eyes, as well as large, feathered wings that stay regardless of the form that they take.",
  },
  {
    card_Name: "Berserker",
    card_Image: "assets/images/berserker.png",
    card_Description: "Hailing from uncivilized lands, unpredictable berserkers come together in war parties and seek conflict wherever they can find it.",
  },
  {
    card_Name: "Hill Giant",
    card_Image: "assets/images/hillGiant.png",
    card_Description: "Hill giants are selfish, dimwitted brutes that hunt and raid in constant search of food. Their skins are tan from lives spent beneath the sun, and their weapons are uprooted trees and rocks pulled from the earth.",
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
    card_Description: "Orcs are savage humanoids with stooped postures, piggish faces, and prominent teeth that resemble tusks. They gather in tribes that satisfy their bloodlust by slaying any humanoids that stand against them.",
  },
  {
    card_Name: "Kobold",
    card_Image: "assets/images/kobold.png",
    card_Description: "Kobolds are craven reptilian humanoids that commonly infest dungeons. They make up for their physical ineptitude with a cleverness for trap making.",
  },
  {
    card_Name: "You!",
    card_Image: "assets/images/you1.png",
    card_Description: "An illusory duplicate of yourself appears.",
  },
  {
    card_Name: "You!",
    card_Image: "assets/images/you2.png",
    card_Description: "An illusory duplicate of yourself appears.",
  },
];
