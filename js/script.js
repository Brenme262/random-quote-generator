/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***

List of quotes for the getRandomQuote function to choose from.
***/
var quotes = [
  {
  quote: "Climate is what you expect, weather is what you get",
  source: "Robert A Heinlein",
  citation: "Time Enough for Love",
  year: 1973
  },
  {
  quote: "After a time, you may find that ‘having’ is not so pleasing a thing, after all, as “wanting.” It is not logical, but it is often true.",
  source: "Spock",
  citation: "Star Trek, The Original Series"
  },
  {
  quote: "All we have to decide is what to do with the time that is given us.",
  source: "Gandalf",
  citation: "The Return of the King"
  },
  {
  quote: "Curse your sudden but inevitable betrayal!",
  source: "Hoban 'Wash' Washburne",
  citation: "Firefly"
  },
  {
  quote: "No. Try not. Do. Or do not. There is no try.",
  source: "Yoda"
  }
]



/***
  getRandomQuote uses a random number to access the index of the array that is
  passed to it, and returns that object.
***/
function getRandomQuote(arr){
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};



/***
  function printQuote() calls the getRandomQuote() function and passes it the
  quotes array. It then builds up the string, using 'if' statements to add the
  citation and year if available. It then returns the string to the 'quote-box'
  div of 'index.html'
***/
function printQuote(){
  var quote = getRandomQuote(quotes);
  var html ="";
  html += '<p class = "quote">' + quote.quote + "</p>";
  html += '<p class = "source">' + quote.source;
  if(typeof(quote.citation) != "undefined"){
    html += '<span class="citation">' + quote.citation + '</span>'
  };
  if(typeof(quote.year) != "undefined"){
    html += '<span class = "year">' + quote.year + '</span>'
  };
  html+= '</p>';
  return document.getElementById('quote-box').innerHTML = html;
};



/***

***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
