<template>
  <div class="container">
    <h1>JUDUL: Peraturan</h1>
    <ul>
      <li>1. Buat room terlebih dahulu</li>
      <li>2. Minimal permainan dimainakn 2 orang maksimal 5</li>
      <li>3. Game akan dimulai ketika ketika pemain sudah ada 2 dan di klic start</li>
      <li>4. akan ada beberapa kata random siapa yang lebih cepet menyelesaikan pemainan dia pemenanngya</li>
    </ul>

    <button class="btn btn-primary mb-4">Buat room</button>
    <form>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Nama Room</label>
        </div>
        <div class="col-auto">
          <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
