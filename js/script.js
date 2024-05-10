const containerEl = document.querySelector(".container");

// inizializzo il ciclo for
for (let i = 1; i <= 100; i++) {
    let articleEl = document.createElement("article"); // creo un nuovo elemento
    containerEl.appendChild(articleEl); // aggiungo l'elemento al container
    let articleContent = '';

    if ( i % 3 == 0 ) { // se multiplo di 3
        articleEl.classList += "fizz"
    }
    if (i % 5 == 0) { // se multiplo di 5
        articleEl.classList += "buzz"
    }
    if (i % 3 != 0 && i % 5 != 0) {
        articleContent += i
    }

    articleEl.innerHTML = articleContent; // inserisco il contenuto dentro il nuovo elemento
}