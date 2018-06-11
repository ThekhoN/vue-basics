<template>
  <div id="todo-app">
    <h4>{{title}}</h4>
    <div class="todo__container">
      <ul class="todo__ul">
        <li class="todo__li" v-for="todo in todos" v-bind:key="todo.id">
          <input v-model="todo.completed" type="checkbox" @click="toggleCompleted(todo.id)"><p class="todo__text" v-bind:class="{completed: todo.completed === true}">{{todo.text}}</p> 
          <button class="todo__button--delete" @click="deleteTodo(todo.id)">X</button>
        </li>
      </ul>
      <div>
        <input type="text" class="todo__input--add-todo" v-model="todo" @keyup.enter="addTodo">
        <button @click="addTodo" class="todo__button--add-todo">Add Todo</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      title: "Todo App",
      todo: "",
      todos: [
        {
          id: "01",
          text: "Wake up!",
          completed: true
        },
        {
          id: "02",
          text: "Cook up something yummy!",
          completed: false
        }
      ]
    };
  },
  methods: {
    toggleCompleted(id) {
      let thisPos = -1;
      const thisTodo = this.todos.filter((todo, index) => {
        if (todo.id === id) {
          thisPos = index;
          return true;
        }
      });
      let updatedTodo = thisTodo[0];
      if (updatedTodo.completed) {
        updatedTodo.completed = false;
      } else {
        updatedTodo.completed = true;
      }
      const updatedTodos = [
        ...this.todos.slice(0, thisPos),
        updatedTodo,
        ...this.todos.slice(thisPos + 1, this.todos.length)
      ];
      this.todos = updatedTodos;
    },
    deleteTodo(id) {
      let thisPos = -1;
      const thisTodo = this.todos.filter((todo, index) => {
        if (todo.id === id) {
          thisPos = index;
          return true;
        }
      });
      const updatedTodos = [
        ...this.todos.slice(0, thisPos),
        ...this.todos.slice(thisPos + 1, this.todos.length)
      ];
      this.todos = updatedTodos;
    },
    addTodo() {
      this.todos.push({
        id: new Date().getTime(),
        text: this.todo,
        completed: false
      });
      this.todo = "";
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.todo__input--add-todo {
  padding: 0.6rem;
}

.todo__container {
  max-width: 320px;
  margin: 0 auto;
  text-align: left;
  padding: 1rem;
  border: 1px dashed greenyellow;
}

.todo__button--delete {
  padding: 0.6rem;
}

.todo__text {
  padding: 0 1rem;
}

.todo__text.completed {
  text-decoration: line-through;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo__li {
  list-style: none;
  display: flex;
  padding: 1rem 0;
  align-items: center;
}

.todo__button--add-todo {
  padding: 0.6rem;
}
</style>
