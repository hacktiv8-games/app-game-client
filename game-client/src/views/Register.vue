<template>
  <div class="container">
    <h1>JUDUL: menghitung cepat</h1>
    <form>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="USERNAME">
      </div>
      <!-- <button type="submit" class="btn btn-primary">Enter</button> -->
      <router-link to="/home" class="btn btn-primary">Enter</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
