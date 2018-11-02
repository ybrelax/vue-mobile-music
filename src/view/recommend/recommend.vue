<template>
  <div class="recommend">

    <scroll>

      <ul class="nav">

        <li> 推荐 </li>

        <li> 排行 </li>

        <li> 歌手 </li>

      </ul>

    </scroll>

  </div>
</template>

<script>
  import scroll from '@/components/scroll/scroll'

  export default {
    components: {
      scroll
    },
    mounted () {
      window.onresize = function () {
        console.log('3423')
      }
    },
    watch: {
      screenWidth (val) {
        console.log(val)
      }
    }

  }
</script>
