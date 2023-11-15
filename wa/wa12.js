document.addEventListener("DOMContentLoaded", function() {
    const newQuoteB = document.querySelector("#js-new-quote");
    const loading = document.getElementById("loading");

    getQuote();

    newQuoteB.addEventListener("click", getQuote);

    function getQuote() {
        loading.style.display = "block";
    setTimeout(() => {
        const api = "https://api.quotable.io/random";

    fetch(api) 
        .then(response => {
            if(!response.ok) {
                throw new Error("Response INVALID");
            }
            return response.json();
        })
        .then(data => {
            loading.style.display = "none";
            displayQuote(data.content);
        })
        .catch(error => {
            console.error("Problem fetching quote:", error);
            alert("Error fetching. Try again please and thank you!");
            loading.style.display = "none";
        });
    }, 1000);
    }

    function displayQuote(quote) {
        const quoteTextElement = document.getElementById("js-quote-text");
        quoteTextElement.innerHTML= `<p>${quote}</p>`;
    }


});