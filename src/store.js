import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid/v4'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.todos.push({
        id: uuid(),
        name: payload,
        completed: false
      })
    },
    EDIT_TODO(state, payload) {
      let { todos } = state
      todos.map((todo, index) => {
        if (payload.prevTodo.id === todo.id) {
          // Set reactivy to the next object
          Vue.set(todos, index, payload.nextTodo)
        }
      })
      state.todos = todos
    },
    REMOVE_TODO(state, todo) {
      let todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
    },
    COMPLETE_TODO(state, payload) {
      let i = state.todos.indexOf(payload)
      if (state.todos[i].completed) {
        state.todos[i].completed = false
      } else {
        state.todos[i].completed = true
      }
    },
    SET_TODOS(state, payload) {
      state.todos = payload
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      commit('ADD_TODO', payload)
    },
    editTodo({ commit }, todo) {
      commit('EDIT_TODO', todo)
    },
    removeTodo({ commit }, todo) {
      commit('REMOVE_TODO', todo)
    },
    completeTodo({ commit }, payload) {
      commit('COMPLETE_TODO', payload)
    },
    setTodos({ commit }, payload) {
      commit('SET_TODOS', payload)
    }
  },
  getters: {
    last(state) {
      return state.todos.length > 0 ? state.todos[state.todos.length - 1] : ''
    },
    todos(state) {
      return state.todos
    }
  }
})
