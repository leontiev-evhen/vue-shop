<template>
  <div class="todos">
	<h1>{{ message }}</h1>
	
	<ul>
		<li v-for="todo, key in todos">{{ todo }} <button @click="removeTodo(key)">Remove</button></li>
	</ul>
	<input type="text" v-model="todo_new"/>
	<button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'todos',
  data () {
    return {
      message: 'My new route',
      todos: ['test1', 'test2'],
      todo_new: ''
    }
  },
  methods: {
    addTodo: function () {
      this.todos.push(this.todo_new)
      this.todo_new = ''
    },
    removeTodo: function (key) {
      this.todos.splice(key, 1)
    }
  }
}
</script>

