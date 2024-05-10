// inizializzo il ciclo for
for (let i = 1; i <= 100; i++) {
    let articleContent = '';

    if ( i % 3 == 0 ) { // se multiplo di 3
        articleContent += "Fizz";
    }
    if (i % 5 == 0) { // se multiplo di 5
        articleContent += "Buzz"
    }
    if (i % 3 != 0 && i % 5 != 0) {
        articleContent += i
    }

    console.log(articleContent);
}