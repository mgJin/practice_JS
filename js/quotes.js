const quotes = [
    {
        quote: "I never dreamed about success , I worked for it" ,
        author: "unknown author"
    },
    {
        quote: "Do not try to be original, just try to be good",
        author: "Paul Rand"
    },
    {
        quote: "Do not be afraid to give up the good to go for the great",
        author: "John D.Rockefeller"
    },
    {
        quote: "No sweat, no sweet",
        author: "unknown author"
    },
    {
        quote: "You will never know until you try",
        author: "unknown author"
    },
    {
        quote: "Whatever you do, make it pay",
        author:"unknown author"
    },
    {
        quote: "Let bygones be bygones",
        author:"unknown author"
    },
    {
        quote:"Do not count the eggs before they hatch" ,
        author:"unknown author"
    },
    {
        quote:"No pain, no gain" ,
        author:"unknown author"
    },
    {
        quote: "Life is venture or nothing",
        author:"unknown author"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;