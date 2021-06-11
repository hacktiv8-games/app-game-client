<template>
    <div class="addRoom">
        <form @submit.prevent="addRoom">
          <div class="mb-2 row">
            <label class="col-sm-3 col-form-label">Nama Room</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" placeholder="Masukan nama room" v-model="room">
            </div>
          </div>
          <div class="mb-2 row">
            <label class="col-sm-3 col-form-label"></label>
            <div class="col-sm-8">
              <button class="btn btn-primary mb-4" style="margin-right:10px; width:90px;">Simpan</button>
              <button class="btn btn-warning mb-4" type="reset" style="margin-right:10px; width:90px;">Reset</button>
            </div>
          </div>
        </form>
      </div>
</template>

<script>
import Toastify from 'toastify-js'

export default {
  name: 'FormAddRoom',
  data () {
    return {
      room: ''
    }
  },
  methods: {
    addRoom () {
      this.$store.dispatch('addRoom', this.room)
      this.$emit('changePage', 'listRoom')
      Toastify({
        text: 'Anda menambahkan Room',
        duration: 3000,
        gravity: 'bottom', // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: '#3CB371'
      }).showToast()
    }
  }
}
</script>

<style>

</style>
