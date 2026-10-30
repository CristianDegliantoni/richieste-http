
// Esercizio finale

// Invia una richiesta POST a https://jsonplaceholder.typicode.com/posts 
// con le proprietà title, body e userId, impostando l'header Content-Type: application/json.
// Nel primo .then() stampa il codice di stato e il valore di response.ok,
// poi restituisci i dati come JSON. Nel secondo .then() 
// stampa il messaggio 'Risorsa creata con id: ' seguito dall'id restituito dal server.


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Dispensa HTTP',
        body: 'Contenuto della dispensa',
        userId: 1
    }),
    headers: { 'Content-Type': 'application/json' }
})
    .then(response => {
        console.log(response.status);
        console.log(response.ok);
        return response.json();
    })
    .then(data => console.log('Risorsa creata con id: ' + data.id));