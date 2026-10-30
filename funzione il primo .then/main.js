
//Esempio
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         console.log(response.status);       // 200
//         console.log(response.statusText);   // "OK"
//         console.log(response.ok);           // true

//         const tipo = response.headers.get('Content-Type');
//         console.log(tipo);                  // "application/json; charset=utf-8"

//         return response.json();
//     })
//     .then(data => console.log(data));


// Esercizio

// Fai una richiesta a https://jsonplaceholder.typicode.com/posts/1 
// e nel primo .then() stampa in console:
// il codice di stato, 
// il valore di response.ok 
// e il valore dell'header Content-Type della risposta. 
// Poi restituisci i dati come JSON per il secondo .then().


fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.status);
        console.log(response.ok);
        console.log(response.headers.get('Content-Type'));
        return response.json();
    })
    .then(data => console.log(data));