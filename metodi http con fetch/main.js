
//Esempio


// POST — crea una nuova risorsa

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({ title: 'Nuovo post', userId: 1 }),
//     headers: { 'Content-Type': 'application/json' }
// })
//     .then(response => response.json())
//     .then(data => console.log(data));

// PATCH — modifica solo il titolo

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({ title: 'Titolo aggiornato' }),
//     headers: { 'Content-Type': 'application/json' }
// })
//     .then(response => response.json())
//     .then(data => console.log(data));

// DELETE — elimina la risorsa

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE'
// })
//     .then(response => console.log('Status: ' + response.status));

//*********************************************************************/

// Esercizio

// Invia una richiesta POST a
//  https://jsonplaceholder.typicode.com/posts 
//  con le proprietà title, body e userId. 
//  Nel secondo .then() stampa in console l'id della risorsa creata.


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Il mio post',
        body: 'Contenuto del post',
        userId: 1
    }),
    headers: { 'Content-Type': 'application/json' }
})
    .then(response => response.json())
    .then(data => console.log('Id creato: ' + data.id));
