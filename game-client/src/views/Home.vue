<template>
  <div class="container">
    <div class="row">
      <div class="col-5">
        <div class="list-user mb-4">
          <h2>User Login</h2>
          <div v-for="(user, index) in users" :key="index" class="shadow-lg p-3 mb-3 bg-white">
            <div class="row">
                <div class="col">
                  <h2>{{ user }}</h2>
                </div>
            </div>
          </div>
        </div>
        <h1>JUDUL: Peraturan</h1>
        <ul>
          <li>1. Buat room terlebih dahulu</li>
          <li>2. Minimal permainan dimainakn 2 orang maksimal 5</li>
          <li>3. Game akan dimulai ketika ketika pemain sudah ada 2 dan di klic start</li>
          <li>4. akan ada beberapa kata random siapa yang lebih cepet menyelesaikan pemainan dia pemenanngya</li>
        </ul>
      </div>

      <div class="col-1"></div>

      <div class="col">
        <button class="btn btn-primary act-btn-add-room mb-4" v-on:click="changePage('formAdd')" v-if="isPage === 'listRoom'">Buat Room</button>
        <button class="btn btn-warning act-btn-add-room mb-4" v-on:click="changePage('listRoom')" v-if="isPage === 'formAdd'">List Room</button>
        <!-- add room -->
        <FormAddRoom
         v-if="isPage === 'formAdd'"
         @changePage="changePage"
         ></FormAddRoom>
        <!-- add room end -->

        <!-- list room -->
        <div class="list-room" v-if="isPage === 'listRoom'">
          <h1>List Room:</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Room</th>
                <th scope="col">Host</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <ListRoom
                v-for="(room, index) in rooms"
                :key="room.index"
                :room="room"
                :index="index"
              ></ListRoom>
            </tbody>
          </table>
          <!-- nanti component List room di looping -->
        </div>
        <!-- list room end -->
      </div>
    </div>
</div>
</template>

<script>
import FormAddRoom from '../components/FormAddRoom.vue'
import ListRoom from '../components/ListRoom.vue'

export default {
  name: 'Home',
  data () {
    return {
      isPage: 'listRoom'
    }
  },
  components: {
    FormAddRoom,
    ListRoom
  },
  computed: {
    users () {
      return this.$store.state.users
    },

    rooms () {
      return this.$store.state.rooms
    }
  },
  methods: {
    changePage (param) {
      this.isPage = param
    }
  },
  mounted () {
    this.$store.dispatch('addedRoom')
    this.$store.dispatch('joinedRoom')
  }
}
</script>

<style>
  .act-btn-add-room{
    margin-right:10px;
    width:110px;
  }

  .container{
    margin-top: 70px;
  }
</style>
