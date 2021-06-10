<template>
  <div>
    <tr v-for="(room, index) in rooms" :key="index">
        <th scope="row">{{index+1}}</th>
        <td>{{room.name}}</td>
        <td>{{room.host}}</td>
        <td>
            <a href="" class="btn btn-primary btn-sm" @click="toRoom">masuk</a>
            <a href="" class="btn btn-danger btn-sm">hapus</a>
        </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: 'ListRoom',
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },
  methods: {
    toRoom () {
      this.$router.push({ name: 'Room' })
    }
  }
}
</script>

<style>

</style>
