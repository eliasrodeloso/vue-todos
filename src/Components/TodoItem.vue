<template>
  <div class="todo" :class="{'todo--completed': completed}">
    <div :class="cls">
      <i v-if="todo.completed" class="mdi mdi-checkbox-marked-circle-outline mdi-30px"></i>
      <i v-else class="mdi mdi-close-circle-outline mdi-30px"></i>
    </div>
    <div class="todo__name">
      {{todo.name}}
    </div>
    <div class="todo__options">
      <span @click="removeTodo" class="todo__option todo__option--delete">
        <i class="mdi mdi-delete mdi-30px"></i>
      </span>
      <span @click="markReady" :class="{'todo__option--disabled': readyDisabled}" class="todo__option todo__option--complete">
        <i class="mdi mdi-check-circle-outline mdi-30px"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      readyDisabled: false,
      completed: false
    }
  },
  computed: {
    cls() {
      return {
        todo__status: true,
        'todo__status--completed': this.todo.completed,
        'todo__status--incompleted': !this.todo.completed
      }
    }
  },
  methods: {
    markReady() {
      if (!this.readyDisabled) {
        this.$store.dispatch('completeTodo', this.todo)
        this.readyDisabled = this.todo.completed
        this.completed = this.todo.completed
      }
    },
    removeTodo() {
      this.$store.dispatch('removeTodo', this.todo)
    }
  }
}
</script>

<style lang="sass">
  .todo
    text-align: left
    display: flex
    width: 100%
    padding: 0.5rem 0.25rem
    justify-content: flex-start
    align-items: center
    border-bottom: 1px solid rgba(0, 0, 0, 0.2)

    &--completed
      background-color: rgba(0, 122, 22, 0.25)

    &:first-of-type
      border-top: 1px solid rgba(0, 0, 0, 0.2)

    &:hover
      background-color: rgba(55, 55, 55, 0.1)

    &__status
      margin-right: 1rem

    &__name
      font-size: 1.5rem
      max-width: 70%
      word-wrap: break-word
    
    &__options
      display: inline-block
      margin: 0 0 0 auto

    &__option
      display: inline-block

      &:hover
        cursor: pointer
        transition: 0.3s linear all
      
      &--delete
        color: rgb(199, 0, 0)

        &:hover
          color: rgb(155, 10, 15)
      
      &--complete
        color: rgb(0, 155, 55)
      
        &:hover
          color: rgb(0, 122, 22)
      
      &--disabled
        cursor: not-allowed
        pointer-events: none;
        color: rgba(200, 200, 200, 0.8)
</style>

