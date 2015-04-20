// Pick a random word in a list
function pick() {
 var word = arguments[Math.floor(Math.random()*arguments.length)];
 return word;
}

// Make a sentence
function drawme() {

// Adjectives
adjective1 = pick.apply(this, adjectives);
adjective2 = pick.apply(this, adjectives);
adjective3 = pick.apply(this, adjectives);
// Nouns
noun1 = pick.apply(this, nouns);
noun2 = pick.apply(this, nouns);
noun3 = pick.apply(this, nouns);
// Transitive verbs
verb1 = pick.apply(this, verbs);
verb2 = pick.apply(this, verbs);
verb3 = pick.apply(this, nouns);
// Contexts
context1 = pick.apply(this, contexts);
context2 = pick.apply(this, contexts);
context3 = pick.apply(this, contexts);

// Sentences
// Todo: make a sentence structure generator
sentences = new Array(
// adjective1+' '+noun1+' '+verb1+' '+adjective2+' '+noun2+' '+'and'+' '+adjective3+' '+noun3+' '+context1,
// adjective1+' '+noun1+' '+verb1+' '+adjective2+' '+noun2+' '+'and'+' '+adjective3+' '+noun3,
 adjective1+' '+noun1+' '+verb1+' '+adjective2+' '+noun2+' '+context1,
 adjective1+' '+noun1+' '+verb1+' '+adjective2+' '+noun2,
 adjective1+' '+noun1+' '+context1,
 adjective1+' '+noun1
);
sentence = sentences[Math.floor(Math.random()*sentences.length)]+'.';

// Write it!
document.getElementById('what').innerHTML = sentence;

};

// Turn the background into a random colour
function colour() {

var r = Math.floor(Math.random()*200);
var g = Math.floor(Math.random()*200);
var b = Math.floor(Math.random()*200);
document.getElementById('page').style.background = 'rgb('+r+','+g+','+b+')';

};

// Do everything
function update() {
 drawme();
 colour();
};