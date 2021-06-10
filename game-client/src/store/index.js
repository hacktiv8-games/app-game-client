import Vue from 'vue'
import Vuex from 'vuex'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    username: '',
    users: []
  },
  mutations: {
    setId (state, payload) {
      state.id = payload
    },
    setUsername (state, payload) {
      state.username = payload
    },
    setUsers (state, payload) {
      state.users.push(payload)
    }
  },
  actions: {
    // generateWord () {
    //   let result = ''
    //   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    //   for (let i = 0; i < 5; i++) {
    //     result += characters.charAt(Math.floor(Math.random() * characters.length))
    //   }
    //   return result
    // },
    addUser ({ commit }, payload) {
      commit('setUsername', payload)
      socket.emit('entry', { username: this.state.username })
    },
    userConnect ({ commit }) {
      socket.on('connection', () => {
        console.log(`connect with id : ${socket.id}`)
        commit('setId', socket.id)
      })
    },
    userListen ({ commit }) {
      socket.on('clientUser', (payload) => {
        const { username } = payload
        commit('setUsers', username)
      })
    }
  },
  modules: {
  }
})
