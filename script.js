const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

async function fetchQuote() {
    // Show loading state
    quoteText.innerText = "Finding inspiration...";
    quoteAuthor.innerText = "";

    try {
        // Fetching from a free, public quote API
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();

        // Updating the DOM with new data
        quoteText.innerText = `"${data.quote}"`;
        quoteAuthor.innerText = `- ${data.author}`;
    } catch (error) {
        quoteText.innerText = "Oops! Could not fetch a quote at the moment.";
        console.error("Error fetching quote:", error);
    }
}

// Load a quote immediately when the page loads
window.onload = fetchQuote;