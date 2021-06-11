<template>
    <tr>
      <th scope="row">{{index + 1}}</th>
      <td>{{room.name}}</td>
      <td>{{room.host}}</td>
      <td>
        <a href="" class="btn btn-primary btn-sm" style="margin-right:4px" @click.prevent="toRoom">masuk</a>
        <!-- <a href="" class="btn btn-danger btn-sm">hapus</a> -->
      </td>
    </tr>
</template>

<script>
export default {
  name: 'ListRoom',
  props: ['room', 'index'],
  // computed: {
  //   rooms () {
  //     return this.$store.state.rooms
  //   }
  // },
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
