<template>
  <ul class="todo__list">
    <transition-group name="todo">
      <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id" />
    </transition-group>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ListTodo',
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(['todos'])
  },
  watch: {
    todos () {
      localStorage.setItem(this.$localStorageKey, JSON.stringify(this.todos))
    }
  }
}
</script>

<style lang="sass">

  .todo

    &__list
      width: 650px
      list-style: none
      margin: 2rem auto 0 auto
      padding: 0

    &-enter-active, &-leave-active
      transition: all 0.3s ease

    &-enter, &-leave-to
      opacity: 0

</style>
