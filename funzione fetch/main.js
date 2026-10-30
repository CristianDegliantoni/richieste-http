// Esempio

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data));

// Esercizio

// Usa fetch() per richiedere i dati del post con id 5 da 
// https://jsonplaceholder.typicode.com/posts/5 
// e stampa in console l'intero oggetto ricevuto.


fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then(response => response.json())
    .then(data => console.log(data))