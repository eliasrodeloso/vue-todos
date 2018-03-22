<template>
  <div class="main">
    <h1>TODOS</h1>
    <AddTodo />
    <ListTodo />
  </div>
</template>

<script>
import AddTodo from './Components/AddTodo.vue'
import ListTodo from './Components/TodoList.vue'

export default {
  name: 'Main',
  components: {
    AddTodo,
    ListTodo
  }
}
</script>

<style lang="sass">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px

  h1, h2
    font-weight: normal
    text-transform: uppercase
  
  .mdi-30px.mdi-set, .mdi-30px.mdi:before
    font-size: 30px
</style>

<style src="./assets/mdi/materialdesignicons.css"></style>
