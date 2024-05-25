const quotes = [
    { author: "Oscar Wilde", 
    quote: "Be Your Self;everyone else is already token" },
    { author: "Frank Zappa", 
    quote: " so many books so little time" },
    { author: "Yoda", 
    quote: "Do, or do not. There is no try." },
    { author: "Confucius",
     quote: "It does not matter how slowly you go as long as you do not stop." }
];

let lastQuoteIndex = null;

function generateQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    const randomQuote = quotes[randomIndex];
    document.getElementById('quoteParagraph').innerText = `"${randomQuote.quote}"`;
    document.getElementById('quoteAuthor').innerText = `- ${randomQuote.author}`;
    lastQuoteIndex = randomIndex;
}