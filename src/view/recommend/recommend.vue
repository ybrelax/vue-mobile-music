<template>
  <div class="recommend">

    <scroll class="slider-wrapper">

      <div>
        <slider>
          <div v-for="(item, index) of swiperImgs" :key="index">
            <img :src="item.picUrl">
          </div>
        </slider>
      </div>

      <div class="decorection"> </div>

      <p class="song-sheet"> 推荐歌单 </p>

      <ul class="song-sheet-lit">

        <li v-for = "(item, index) of recommendList" :key = "index">

          <div class="img-ico">

            <img :src="item.picUrl">

            <span class="img-text">
                <i class = "fa fa-headphones"> </i> {{Math.floor(item.playCount / 1000/2)}}万
                </span>

          </div>

          <p class = "text"> {{item.name}}</p>
        </li>

      </ul>

    </scroll>

  </div>
</template>

<script>
  import scroll from '@/components/scroll/scroll'
  import slider from '@/components/slider/slider'

  export default {
    components: {
      scroll,
      slider
    },
    data() {
      return {
        swiperImgs: [],
        recommendList: []
      }
    },
    mounted() {
      this.getSwiperImgs();
      this.getRecommendList();
    },

    methods: {
      getSwiperImgs() {
        let _this = this;
        this.axios('/banner').then(function(response) {
          _this.swiperImgs = response.data.banners;
        })
      },

      getRecommendList() {
        let _this = this;
        this.axios('/personalized').then(function (response) {
          _this.recommendList = response.data.result;
        })
      }
    }

  }
</script>
