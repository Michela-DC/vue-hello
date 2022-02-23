// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue World!',
        inputMessage: '',
        imgUrl: 'https://picsum.photos/200/300',
        className: 'p-font', //gli aggiungo la classe p-font
    },

    methods:{
        printMessage: function(){
            alert(`Messagio dell'utente: ${this.inputMessage}`)
        }
    }
})

console.log(app.title);
console.log(app.className);

