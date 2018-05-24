<template>
  <div class="todo__add">
    <div class="text__todo">
      <label for="todo">Add Todo</label>
      <input @keypress.enter.exact="addTodo" v-model="todo" type="text" name="todo" id="todo">
    </div>
    <input class="button__todo" type="button" value="add" @click="addTodo">
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      todo: '' || this.$store.getters.toEditTodo
    }
  },
  methods: {
    addTodo() {
      let { todo } = this
      if (todo) {
        this.$store.dispatch('addTodo', todo)
        this.todo = ''
      }
    }
  }
}
</script>

<style lang="sass">
  .todo__add
    width: 650px
    position: relative
    margin: 0 auto
    display: flex
    align-items: center
    justify-content: center

    .text__todo
      display: inline-block
      margin-right: 1rem
      text-align: left
      width: 60%

      label
        display: block
        font-size: 0.9rem
        padding-left: 0.5rem

      input[type="text"]
        display: blocK
        width: 100%
        border: 0
        border-bottom: 2px solid rgba(0, 0, 0, 0.1)
        padding: 0.5rem
        font-size: 1.25rem;

        &:active, &:focus
          outline: 0
          border-bottom: 2px solid rgb(26, 35, 126)
          transition: 0.2s ease-in all

    .button__todo
      outline: none
      color: white
      background-color: rgb(26, 35, 126)
      border: 0
      transition: 0.2s linear all
      padding: 0.5rem 1.5rem
      font-size: 1rem
      font-weight: bolder
      margin-left: 1rem
      text-transform: uppercase
      border-radius: 3px
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5)

      &:hover
        cursor: pointer

      &:hover, &:active
        outline: none
        background-color: rgba(26, 35, 126, 0.8)

</style>
