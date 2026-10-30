

// //Esempio

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.id);       // 1
//         console.log(data.title);    // "sunt aut facere..."
//         console.log(data.body);     // testo del post
//         console.log(data.userId);   // 1
//     });

//*********************************************************************/

// Esercizio

// Fai una richiesta a https://jsonplaceholder.typicode.com/users/1 
// e nel secondo .then() stampa in console il nome, 
// l'email e il nome della città dell'utente (data.address.city).

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
        console.log(data.email);
        console.log(data.address.city);
    });
