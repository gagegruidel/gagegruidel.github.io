document.addEventListener("DOMContentLoaded", function() {
    const newQuoteB = document.querySelector("#js-new-quote");

    getQuote();

    newQuoteB.addEventListener("click", getQuote);

    function getQuote() {
        const api = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

        fetch(api) 
        .then(response => {
            if(!response.ok) {
                throw new Error("Response INVALID");
            }
            return response.json();
        })
        .then(data => {
            displayQuote(data.question);
        })
        .catch(error => {
            console.error("Problem fetching quote:", error);
            alert("Error fetching. Try again please and thank you!")
        });
    }

    function displayQuote(quote) {
        const quoteTextElement = document.getElementById("js-quote-text");
        quoteTextElement.textContent = quote;
    }


});