<template>

  <div id="app">

    <m-header></m-header>

    <router-view/>
  </div>

</template>

<script>

import MHeader from '@/view/header/header.vue'
export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style>
</style>
