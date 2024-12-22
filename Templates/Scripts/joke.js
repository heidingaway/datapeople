const apiUrl = "http://api.quotable.io/random?tags=";

async function start() {
  var quote;
  var cite;
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (response.ok) {
    quote = data.content;
    cite  = data.author;
  } else {
    quote = "An error occurred";
    console.log(data);
  }
  
  return `>[!quote] Quote of the Day
>${quote}
>— ${cite}`;
}
module.exports = start;
