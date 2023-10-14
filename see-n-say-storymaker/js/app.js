// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var speakButton = document.getElementById('speakButton');
const nounButton = document.getElementById("nounButton");
const verbButton = document.getElementById("verbButton");
const adjButton = document.getElementById("adjButton");
const moreNounButton = document.getElementById("moreNounButton");
const placeButton = document.getElementById("placeButton");

const nouns = ["The turkey", "Dad", "The dog", "My teacher", "The elephant", "The cat" ];
const verbs = ["Sat on", "Ate", "Danced with", "Saw", "Doesn’t like", "Kissed"]; 
const adjectives = ["A funny", "A scary", "A goofy", "A slimy", "A barking", "A fat"]; 
const moreNouns = ["Goat", "Monkey", "Fish", "Cow", "Frog", "Bug", "Worm"]; 
const places = ["On the moon", "On the chair", "In my spaghetti ", "In my soup", "On the grass", "In my shoes"]; 

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() { console.log(textToSpeak); 
	speakNow(textToSpeak);
}

nounButton.onclick = function() {
	textToSpeak += nouns[Math.floor(Math.random() * nouns.length)] + ' ';
}

verbButton.onclick = function() {
	textToSpeak += verbs[Math.floor(Math.random() * verbs.length)] + ' ';
}

adjButton.onclick = function(){
	textToSpeak += adjectives[Math.floor(Math.random() * adjectives.length)] + ' ';
}

moreNounButton.onclick = function(){
	textToSpeak += moreNouns[Math.floor(Math.random() * moreNouns.length)] + ' ';
}

placeButton.onclick = function(){
	textToSpeak += places[Math.floor(Math.random() * places.length)] + ' ';
}