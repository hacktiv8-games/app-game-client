<template>
  <div v-if="(rooms[1])">
    <tr v-for="(room, index) in rooms" :key="index">
      <div v-if="(index !== 0)">
        <th scope="row">{{index}}</th>
        <td>{{room.name}}</td>
        <td>{{room.host}}</td>
        <td>
            <a href="" class="btn btn-primary btn-sm" @click.prevent="toRoom">masuk</a>
            <a href="" class="btn btn-danger btn-sm">hapus</a>
        </td>
      </div>
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
      this.$store.dispatch('joinRoom')
    }
  }
}
</script>

<style>

</style>
