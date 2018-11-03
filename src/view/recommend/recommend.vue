<template>
  <div class="recommend">
  
    <scroll>
  
  
  
  
    </scroll>
  
    <div v-for="item of swiperImgs" :key="item" style="
      text-align: center;
    ">
      <img :src="item.picUrl" style="width: 90%">
    </div>
  
  </div>
</template>

<script>
  import scroll from '@/components/scroll/scroll'
  
  export default {
    components: {
      scroll
    },
    data() {
      return {
        swiperImgs: []
      }
    },
    mounted() {
      this.getSwiperImgs();
    },
  
    methods: {
      getSwiperImgs() {
        let _this = this;
        this.axios('/banner').then(function(response) {
          _this.swiperImgs = response.data.banners;
          console.log(response.data);
        })
      }
    }
  
  }
</script>
