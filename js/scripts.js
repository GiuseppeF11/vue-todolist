const {createApp} = Vue;

createApp ({
    data() {
        return {
            newTodo:'',
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
    methods: {
        addTodo() {
            if (this.newTodo.trim().length > 0) {
                let obj = {};
                obj.text = this.newTodo;
                obj.done = false;
                this.todos.push(obj);
                this.newTodo = '';
            }
        },
        submit() {
            if (this.newTodo.trim().length > 0) {
                let obj = {};
                obj.text = this.newTodo;
                obj.done = false;
                this.todos.push(obj);
                this.newTodo = '';
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
}).mount('#app');