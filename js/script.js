//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.

let app = new Vue({
    el: '#messaggio',
    data: {
        message: prompt("Inserisci il tuo nome") + " " + "Welcome on board !!!",
        foto: "https://media.giphy.com/media/ftT4iNMuGuqOc/giphy.gif",
        nomePhoto : "welcome",
        classImg : "immagine"
    }

});
