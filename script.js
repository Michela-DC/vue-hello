// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue World!',
        inputMessage: '',
        imgUrl: 'https://picsum.photos/200/300',
    }
})

console.log(app);