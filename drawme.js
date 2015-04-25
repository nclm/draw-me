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
 verb3 = pick.apply(this, verbs);

 // Contexts
 context1 = pick.apply(this, contexts);
 context2 = pick.apply(this, contexts);
 context3 = pick.apply(this, contexts);

 // Sentences
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
 var what =  document.getElementById('what');
 if (what) {
  what.innerHTML = sentence;
 }

};

// Make colours 
function colours() {
 r = Math.floor(Math.random()*200);
 g = Math.floor(Math.random()*200);
 b = Math.floor(Math.random()*200);
}

// Colour things
function colouring() {
 var home = document.getElementById('home');
 if (home) {
  colours();
  home.style.background = 'rgb('+r+','+g+','+b+')';
 }
};

// Do everything
function update() {
 drawme();
 colouring();
};
