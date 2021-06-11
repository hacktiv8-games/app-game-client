<template>
  <div class="container">
    <div class="row">
      <div class="col-5">
        <button v-on:click="changeGuide(true)" v-if="!isGuide" class="btn btn-primary">User Guide</button>
        <button v-on:click="changeGuide(false)" v-if="isGuide" class="btn btn-primary">Back</button>
        <div class="list-user mb-4 mt-4" v-if="!isGuide">
          <h2>User Login</h2>
          <div v-for="(user, index) in users" :key="index" class="shadow-lg p-3 mb-3 bg-white">
            <div class="row">
                <div class="col">
                  <h2>{{ user }}</h2>
                </div>
            </div>
          </div>
        </div>
        <Guide v-if="isGuide"></Guide>
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
          <h2>List Room:</h2>
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
                v-for="room, index in rooms"
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
import Guide from '../components/Guide.vue'
import FormAddRoom from '../components/FormAddRoom.vue'
import ListRoom from '../components/ListRoom.vue'

export default {
  name: 'Home',
  data () {
    return {
      isGuide: false,
      isPage: 'listRoom'
    }
  },
  components: {
    Guide,
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
    },

    changeGuide (param) {
      this.isGuide = param
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
