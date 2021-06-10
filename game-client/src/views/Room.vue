<template>
  <div style="background-color:white; width:100%; height:100vh;">
    <div class="list-player p-3">
      <h2>List Player:</h2>
      <div v-for="(user, index) in usersJoin" :key="index">
        <h3>{{ user }}</h3>
      </div>
    </div>
    <button class="btn-keluar">Keluar</button>
    <div v-if="isPlay" class="star-btn">
      <h1>Are you ready?</h1>
      <button v-on:click="startInterval(false)" class="btn-start">Start</button>
    </div>
    <div v-if="!isPlay" class="play-game">
      <div class="tatakan mb-3">
        <p class="soal">{{ word }}</p>
      </div>
      <input type="text" placeholder="type here">
      <button v-on:click="giveUp()" class="btn btn-warning mt-3">Menyerah</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Room',
  data () {
    return {
      isPlay: true
    }
  },
  computed: {
    usersJoin () {
      return this.$store.state.usersJoin
    },
    word () {
      return this.$store.state.randomWord
    }
  },
  methods: {
    changeIsPlay (param) {
      this.isPlay = param
      this.$store.dispatch('addWord')
    },
    startInterval: function (param) {
      this.isPlay = param
      setInterval(() => {
        this.$store.dispatch('addWord')
      }, 3000)
    },
    giveUp () {
      this.$router.push({ path: '/home' })
    }
  },
  mounted () {
    this.$store.dispatch('addedWord')
  }
}
</script>

<style>
.play-game{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.soal{
  font-size: 70px;
}
.tatakan{
  background-color: wheat;
  width: 450px;
  align-items: center;
  border-radius: 30px;
  display: flex;
  justify-content: center;
}

.star-btn{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-keluar{
  position: right;
}
</style>
