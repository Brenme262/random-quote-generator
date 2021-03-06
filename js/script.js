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
  year: 1973,
  tag: "Literature"

  },
  {
  quote: "After a time, you may find that ‘having’ is not so pleasing a thing, after all, as “wanting.” It is not logical, but it is often true.",
  source: "Spock",
  citation: "Star Trek - The Original Series",
  tag: "Television"
  },
  {
  quote: "All we have to decide is what to do with the time that is given us.",
  source: "Gandalf",
  citation: "The Return of the King",
  tag: "Literature"
  },
  {
  quote: "Curse your sudden but inevitable betrayal!",
  source: "Hoban 'Wash' Washburne",
  citation: "Firefly",
  tag: "Television"
  },
  {
  quote: "No. Try not. Do. Or do not. There is no try.",
  source: "Yoda",
  tag: "Movie"
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
  function to randomly change background color. Pulled inspiration and some
  code from MDN and w3resource to make it work.
***/
function getColor(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var color = "rgb("+ x + "," + y + "," + z + ")"
  console.log(color);
  document.body.style.background = color;
};
/***
  function printQuote() calls the getRandomQuote() function and passes it the
  quotes array. It then builds up the string, using 'if' statements to add the
  citation and year if available. It then returns the string to the 'quote-box'
  div of 'index.html' It also calls the function getcolor().
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
  if(typeof(quote.tag) != "undefined"){
    html += '<span class = "tag">' + quote.tag + '</span>'
  };
  html+= '</p>';

  getColor();

  return document.getElementById('quote-box').innerHTML = html;

};
/// run function when page loads to override basic quote on html

window.onload = printQuote();

/***
auto runs the printQuote() function every 20 seconds. Used the article covering
setInterval() on MDN
***/

var autoRun = setInterval(printQuote, 20000);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
