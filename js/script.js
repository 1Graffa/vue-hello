//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.
const topolino1 = "https://i.pinimg.com/originals/51/f3/e3/51f3e359eeac92865a42007bc8e89748.gif";
const topolino2 = "https://i.pinimg.com/originals/81/65/a3/8165a365a674c537f941924622f27a56.gif";
const topolino3 = "https://i.pinimg.com/originals/1b/5d/9b/1b5d9b032fb0bdd36b41eb92947cec8b.gif"
let app = new Vue({
    el: '#messaggio',
    data: {
        message: "Ciao " + prompt("Inserisci il tuo nome") + ", " + "guarda topolino !!!",
        gif: topolino1,
        nomePhoto : "welcome",
        classImg : "immagine",
        color: "orange"
    },
        methods:{
          changeImg() {
        if (this.gif == topolino1) {
          this.gif = topolino2;
        } else if (this.gif == topolino2){
          this.gif = topolino3;
        } else {
          this.gif = topolino1;
        }
      }
    }
});
