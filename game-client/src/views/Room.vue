<template>
  <div style="background-color:white; width:100%; height:100vh;">
    <div class="list-player p-3">
      <h2>List Player:</h2>
      <h3>oki</h3>
      <h3>rendy</h3>
      <h3>ade</h3>
      <h3>erick</h3>
    </div>
    <button class="btn-keluar">Keluar</button>
    <div v-if="isPlay" class="star-btn">
      <h1>Are you ready?</h1>
      <button v-on:click="changeIsPlay(false)" class="btn-start">Start</button>
    </div>
    <div v-if="!isPlay" class="play-game">
      <div class="tatakan mb-3">
        <p class="soal">"Jjfalsd312"</p>
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
  methods: {
    changeIsPlay (param) {
      this.isPlay = param
    },

    giveUp () {
      this.$router.push({ path: '/home' })
    }
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
