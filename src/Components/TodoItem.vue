<template>
  <div class="todo" >
    <div class="todo__status">
      <span @click="markReady" 
            :class="{'todo__option--disabled': completed}" 
            class="todo__option todo__option--complete">
        <i class="mdi mdi-check-circle-outline mdi-30px"></i>
      </span>
    </div>
    <div class="todo__name " :class="{'todo__name--editing': editing}" @dblclick="editTodo">
      <input 
        type="text" 
        class="todo__edit" 
        v-if="editing" 
        @keypress.enter.exact="saveEdit" 
        @keypress.esc.exact="cancelEdit"
        v-model="editingTodo" 
        name="editTodo" 
        id="editTodo"
      >
      <span 
        :class="{'todo--completed': completed}" 
        
        v-else
      >
          {{todo.name}}
      </span>
    </div>
    <div class="todo__options">
      <span 
        @click="editTodo"
        :class="{'todo__option--disabled': completed || editing}" 
        class="todo__option todo__option--edit"
      >
        <i class="mdi mdi-pencil mdi-30px"></i>
      </span>
      <span 
        @click="removeTodo" 
        class="todo__option todo__option--delete"
      >
        <i class="mdi mdi-delete mdi-30px"></i>
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
      completed: false,
      editing: false,
      editingTodo: this.todo.name
    }
  },
  methods: {
    markReady() {
      if (!this.completed) {
        this.$store.dispatch('completeTodo', this.todo)
        this.completed = true
      }
    },
    removeTodo() {
      this.$store.dispatch('removeTodo', this.todo)
    },
    editTodo() {
      if (!this.completed) {
        this.editing = true
      }
    },
    saveEdit() {
      let payload = {
        prevTodo: this.todo,
        nextTodo: {
          ...this.todo,
          name: this.editingTodo
        }
      }
      this.$store.dispatch('editTodo', payload)
      this.editing = false
    },
    cancelEdit() {
      this.editing = false
    }
  }
}
</script>

<style lang="sass">
  .todo
    text-align: left
    display: flex
    width: 100%
    padding: 0 0.25rem
    justify-content: flex-start
    align-items: center
    border-bottom: 1px solid rgba(0, 0, 0, 0.2)

    &--completed
      color: rgba(0, 122, 22, 1)
      text-decoration: line-through

    &:first-of-type
      border-top: 1px solid rgba(0, 0, 0, 0.2)

    &__status
      margin-right: 1rem

    &__name
      padding: 0.5rem 0.25rem
      font-size: 1.5rem
      width: 70%
      word-wrap: break-word

      span
        transition: 0.2s all linear

      &--editing
        border-left: 1px solid rgba(55, 55, 55, 0.25)
        border-right: 1px solid rgba(55, 55, 55, 0.25)
        padding: 0
    
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
        color: rgba(#2c3e50, 0.25)
      
      &--disabled
        cursor: not-allowed
        pointer-events: none
        color: rgba(200, 200, 200, 0.8)

        &.todo__option--complete
          color: rgb(0, 122, 22)
    
    &__edit
      display: block
      border: 0
      font-size: 1em
      padding: 0.5rem 0.25rem
      width: 100%
      font-family: 'Avenir'
      color: #2c3e50

      &:active, &:focus
        outline: 0

</style>

