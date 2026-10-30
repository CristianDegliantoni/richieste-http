
//Esempio

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({ title: 'Test', userId: 1 }),
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer il-mio-token'
//     }
// })
//     .then(response => {
//         const contentType = response.headers.get('Content-Type');
//         console.log('Tipo di risposta: ' + contentType);
//         return response.json();
//     })
//     .then(data => console.log(data));

//***********************************************************************/

// Esercizio

// Invia una richiesta POST con l'header Content-Type: application/json 
// e un body con title e userId. 
// Nel primo.then() leggi e stampa il valore dell'header Content-Type della risposta,
// poi restituisci i dati come JSON.
// Nel secondo.then() stampa il titolo del post creato.

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title: 'Prova header', userId: 2 }),
    headers: { 'Content-Type': 'application/json' }
})
    .then(response => {
        const tipo = response.headers.get('Content-Type');
        console.log('Content-Type risposta: ' + tipo);
        return response.json();
    })
    .then(data => console.log(data.title));