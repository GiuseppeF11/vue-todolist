const {createApp} = Vue;

createApp ({
    data() {
        return {
            newTodo:'',
            todos: [],
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim().length > 0) {
                this.todos.push(this.newTodo.trim());
                this.newTodo = '';
            }
        },
        removeTodo(i) {
            console.log(i, this.todos[i]);
            this.todos.splice(i, 1);
        }
    }
}).mount('#app');