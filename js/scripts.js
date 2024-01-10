// Estraggo la funzione createApp dall'oggetto Vue
const {createApp} = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp ({
    // Definisco le strutture dati
    data() {
        return {
            newTodo:'',
            // Creo un array di oggetti
            todos: 
            [
                {
                    text: 'fare compiti',
                    done: false,
                },
                {
                    text: 'fare la spesa',
                    done: true,
                }
            ]
        };
    },
    // Definisco le funzioni da utilizzare
    methods: {
        //Funzione per aggiungere 
        addTodo() {
            if (this.newTodo.trim().length > 0) { //con trim escludiamo gli spazi dalla stringa
                let obj = {}; //creo un oggetto vuoto
                obj.text = this.newTodo.trim(); //metto nell'oggetto la chiave text uguale a newToDo
                obj.done = false; //metto nell'oggetto la chiave done con valore di base false
                this.todos.push(obj); //pusho l'oggetto completo di text e done dentro la mia lista di cose da fare (todos)
                this.newTodo = ''; // Per svuotare il v-model ovvero il value dell'input
            }
        },

        removeTodo(i) {
            console.log(i, this.todos[i]);
            this.todos.splice(i, 1);
        },
        
        doIt(i) {
            console.log('Cliccato text')
            this.todos[i].done = !(this.todos[i].done);
        }
    }
    // Monto l'istanza di Vue in pagina
}).mount('#app');