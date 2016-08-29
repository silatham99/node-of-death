const shuffle = (array) => {
  var currentIndex = array.length,
    clone = array.slice(0),
    temporaryValue, randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = clone[currentIndex];
    clone[currentIndex] = clone[randomIndex];
    clone[randomIndex] = temporaryValue;
  }

  return clone;
};

const getNewLocations = () => {
  var locations = [], stack, cards, remainingLocations;

  // Create all of the card stack locations
  for (var stack = 1; stack < 8; stack++) {
    for (cards = 0; cards < stack; cards++) {
      locations.push(stack);
    }
  }

  // Allocate the rest of the cards to the flipping deck
  for (remainingLocations = locations.length; remainingLocations < 52; remainingLocations++) {
    locations.push('f');
  }

  return shuffle(locations);
};

module.exports = () => {
  var	suits = ['s','c','h','d'],
      cardNumbers = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'],
      unusedLocations = getNewLocations(),
      deck;

  deck = [].concat.apply([], suits.map((suit) => {
    return cardNumbers.map((cardNumber) => {
      return {
        id: suit + cardNumber,
        suit: suit,
        cardNumber: cardNumber,
        location: unusedLocations.pop()
      };
    });
  }));

  return shuffle(deck);
};
