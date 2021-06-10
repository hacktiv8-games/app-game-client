<template>
  <div class="container">
    <h1>JUDUL: menghitung cepat</h1>
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
