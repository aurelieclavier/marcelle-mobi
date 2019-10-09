<template>
  <div id="pointsPage">
    <p>{{ $store.state.pointsCounter.counter }}</p>
    <p>{{ $store.state.pointsCounter.kiloCounter }}</p>
    <p>{{ $store.state.pointsCounter.msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
