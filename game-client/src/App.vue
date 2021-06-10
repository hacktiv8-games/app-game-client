<template>
  <div id="app">
    <router-view/>
    <input type="text" v-model="username">
    <button type="button" class="btn btn-primary text-center" @click.prevent="addUser">Submit</button>
    <ul>
      <li v-for="user, index in users" :key="index">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      username: ''
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    addUser () {
      this.$store.dispatch('addUser', this.username)
    }
  },
  mounted () {
    this.$store.dispatch('userConnect')
    this.$store.dispatch('userListen')
  }
}
</script>

<style>

</style>
