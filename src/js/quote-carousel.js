const quotes = [
  {
    text: "È un vigliacco l’uomo!… Ed è un vigliacco chi per questo lo chiama vigliacco.",
    author: "Fëdor Dostoevskij",
    source: "Delitto e Castigo",
    url: "https://it.wikiquote.org/wiki/Delitto_e_castigo"
  },
  {
    text: "Siamo tutti responsabili davanti a tutto e a tutti.",
    author: "Fëdor Dostoevskij",
    source: "Delitto e Castigo",
    url: "https://it.wikiquote.org/wiki/Delitto_e_castigo"
  },
  {
    text: "Non c’è niente di più terribile della solitudine.",
    author: "Fëdor Dostoevskij",
    source: "I fratelli Karamazov",
    url: "https://it.wikiquote.org/wiki/I_fratelli_Karamazov"
  },
  {
    text: "La felicità non è reale se non è condivisa.",
    author: "Fëdor Dostoevskij",
    source: "Memorie dal sottosuolo",
    url: "https://it.wikiquote.org/wiki/Memorie_dal_sottosuolo"
  }
];

const figure = document.querySelector('figure');
const blockquote = figure.querySelector('blockquote');
const figcaption = figure.querySelector('figcaption');
const citeElem = figcaption.querySelector('cite');
const button = figure.querySelector('button');

button.addEventListener('click', () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  blockquote.textContent = quote.text;
  blockquote.setAttribute('cite', quote.url);
  figcaption.firstChild.textContent = `— ${quote.author}, `;
  citeElem.textContent = quote.source;
});