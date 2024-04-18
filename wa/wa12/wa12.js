const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const tweetBtn = document.querySelector("#js-tweet");
tweetBtn.addEventListener('click', addToFavorites);

const endpoint = 'https://api.quotable.io/random';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        displayQuote(json.content);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote) {
    const quoteContainer = document.querySelector("#js-quote-container");
    quoteContainer.textContent = quote;
}

function addToFavorites() {
    const currentQuote = document.querySelector("#js-quote-container").textContent;
    const listItem = document.createElement("li");
    listItem.textContent = currentQuote;
    const favoritesList = document.querySelector("#js-favorites-list");
    favoritesList.appendChild(listItem);
}

getQuote();
