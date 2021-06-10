import Vue from 'vue'
import Vuex from 'vuex'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    username: '',
    users: [],
    room: '',
    rooms: [{ name: '', host: '' }]
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
    },
    setRoom (state, payload) {
      state.room = payload
    },
    setRooms (state, payload) {
      state.rooms.push(payload)
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
    userConnect ({ commit }) {
      socket.on('connection', () => {
        console.log(`connect with id : ${socket.id}`)
        commit('setId', socket.id)
      })
    },
    addUser ({ commit }, payload) {
      commit('setUsername', payload)
      socket.emit('entry', { username: this.state.username })
    },
    addedUser ({ commit }) {
      socket.on('clientUser', (payload) => {
        const { username } = payload
        commit('setUsers', username)
      })
    },
    addRoom ({ commit }, payload) {
      commit('setRoom', payload)
      socket.emit('createRoom', { name: this.state.room, host: this.state.username })
    },
    addedRoom ({ commit }) {
      socket.on('clientRoom', (payload) => {
        console.log(payload)
        // const { room, host } = payload
        commit('setRooms', payload)
      })
    }
  },
  modules: {
  }
})
