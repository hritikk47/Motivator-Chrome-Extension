fetch("http://api.quotable.io/random")
  .then((response) => response.json())
  .then((data) => {
  
    const content = data.content;
    const author = data.author;

    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = content;

    const authorElement = document.getElementById("author");
    authorElement.textContent = author;
  })
  .catch((error) => {
    console.error("Error fetching data from API:", error);
  });
