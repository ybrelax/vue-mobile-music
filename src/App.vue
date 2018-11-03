<template>

  <div id="app">

    <m-header></m-header>

    <m-tab></m-tab>

    <router-view/>
  </div>

</template>

<script>

import MHeader from '@/view/header/header.vue'
import MTab from '@/view/tab/tab.vue'
export default {
  name: 'App',
  components: {
    MHeader,
    MTab
  }
}
</script>

<style>
</style>
