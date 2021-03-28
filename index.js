

let getQuoteBtn = document.querySelector("#getQuote");
let text = document.querySelector("#text");
let author = document.querySelector("#author");
let tweet = document.querySelector("#twitter");



function tweetQuote() {
  let post = `https://twitter.com/intent/tweet?text=${quote.text}%20${quote.author}`;
  window.open(post)
}


let quote
const getRandomQuote = (info) => {

  let randomNbr = Math.floor(Math.random() * info.length);
  quote = info[randomNbr]
  text.innerText = `${quote.text}`;
  quote.author == null ?
    (author.innerText = 'unknown')
    : (author.innerText = `${quote.author}`)
}


const quoteAxios = async () => {

  try {
    let info = await axios.get("https://type.fit/api/quotes");
    console.log(info)
    getRandomQuote(info.data)
  } catch (error) {
    console.log(error)
  }


}

getQuoteBtn.addEventListener("click", quoteAxios)
tweet.addEventListener("click", tweetQuote)




// git remote add origin https://github.com/MandyNeumeyer/recordShop-mongoose.git
// git branch -M main
// git push -u origin main