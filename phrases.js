const phrases = ["hey", "hello", "welcome", "coming soon!", ];

let phrasesLength = phrases.length;

let rand = Math.floor(Math.random() * phrasesLength); 

function ranWord() {
for (let i = rand; i < phrasesLength; i++) {
    return phrases[i];
}
}