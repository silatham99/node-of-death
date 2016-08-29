var firebase = require('firebase');
var createDeck = require('./create-deck');

const app = firebase.initializeApp({
  serviceAccount: "path/to/serviceAccountCredentials.json",
  serviceAccount: {
   projectId: "node-of-death",
   clientEmail: "silatham99@gmail.com",
   privateKey: "AIzaSyCcrOLEduR5DYe1oYngPR0Br50isJOMiHk"
 },
  databaseURL: "https://node-of-death.firebaseio.com"
});

// console.log(createDeck().map(card => card.id));
console.log(app);
