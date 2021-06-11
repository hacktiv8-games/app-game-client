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
    joined: '',
    rooms: [{ name: '', host: '' }],
    usersJoin: [],
    randomWord: '',
    result: [{ name: '', score: '' }],
    timer: 0
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
    },
    setJoined (state, payload) {
      state.joined = payload
    },
    setUsersJoin (state, payload) {
      state.usersJoin.push(payload)
    },
    setRandomWord (state, payload) {
      state.randomWord = payload
    },
    setResult (state, payload) {
      state.result.push(payload)
    },
    setTimer (state, payload) {
      state.timer = payload
    }
  },
  actions: {
    generateWord ({ commit }) {
      let result = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      commit('setRandomWord', result)
    },
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
    },
    joinRoom ({ commit }) {
      socket.emit('joinRoom', { toJoin: this.state.room, toLeave: this.state.joined, username: this.state.username })
      commit('setJoined', this.state.room)
    },
    joinedRoom ({ commit }) {
      socket.on('clientJoin', (payload) => {
        console.log(payload)
        // const { room, host } = payload
        commit('setUsersJoin', payload)
      })
    },
    addWord ({ dispatch }) {
      dispatch('generateWord')
      socket.emit('createWord', { randomWord: this.state.randomWord }, this.state.room)
    },
    addedWord ({ commit }) {
      socket.on('clientWord', (payload) => {
        const { randomWord } = payload
        commit('setRandomWord', randomWord)
      })
    },
    addScore ({ commit }, payload) {
      commit('setResult', payload)
      socket.emit('setScore', payload, this.state.room)
    },
    addedScore ({ commit }) {
      socket.on('clientScore', (payload) => {
        commit('setResult', payload)
      })
    },
    addTimer ({ commit }, payload) {
      commit('setTimer', payload)
      socket.emit('serverTimer', { timer: payload }, this.state.room)
    },
    addedTimer ({ commit }) {
      socket.on('clientTimer', (payload) => {
        // const { timer } = payload
        // commit('setTimer', timer)
      })
    }
  },
  modules: {
  }
})
