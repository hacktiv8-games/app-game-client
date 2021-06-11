<template>
  <div class="container">
    <h1>Lomba Mengetik Cepatttt</h1>
    <form>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="USERNAME" v-model="username">
      </div>
      <!-- <button type="submit" class="btn btn-primary">Enter</button> -->
      <button type="button" class="btn btn-primary text-center" @click.prevent="addUser">Enter</button>
    </form>
  </div>
</template>

<script>
import Toastify from 'toastify-js'
export default {
  name: 'Register',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    addUser () {
      this.$store.dispatch('addUser', this.username)
      this.$router.push({ name: 'Home' })
      Toastify({
        text: 'Hi.. selamat bermain',
        duration: 3000,
        gravity: 'bottom', // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: '#3CB371'
      }).showToast()
    }
  },
  mounted () {
    this.$store.dispatch('userConnect')
    this.$store.dispatch('addedUser')
  }
}
</script>

<style>

</style>
