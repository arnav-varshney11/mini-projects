const fetchRandomQuote = async () => {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes');
        const data = await response.json();
        return data;
};
const button = document.getElementById('butt');
const quoteDisplay = document.getElementById('two');
button.addEventListener('click', async () => {
    const quote = await fetchRandomQuote();
         if (quote) {
                quoteDisplay.textContent = quote;
            } else {
            quoteDisplay.textContent = "Failed to fetch quote.";
        }
 });
