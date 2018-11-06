<template>
  <div class="recommend">

    <scroll class="recommend-content" ref="scroll" :data="recommendList">

      <div>

         <slider v-if="swiperImgs.length > 0" class = "slider-wrapper">
            <div v-for="(item, index) of swiperImgs" :key="index">
              <img :src="item.picUrl">
            </div>
          </slider>

        <div class="decorection"> </div>

        <p class="song-sheet"> 推荐歌单 </p>

        <ul class="song-sheet-lit">

          <li v-for="(item, index) of recommendList" :key="index">

            <div class="img-ico">

              <img :src="item.picUrl">

              <span class="img-text">
                  <i class = "fa fa-headphones"> </i> {{Math.floor(item.playCount / 1000)}}万
                  </span>
            </div>

            <p class="text"> {{item.name}}</p>
          </li>

        </ul>

        <p class="song-sheet"> 推荐歌曲 </p>

        <ul class="song-sheet-lit">

          <li v-for="(item, index) of recommendMusic" :key="index">

            <div class="img-ico">

              <img :src="item.song.album.picUrl">

              <span class="img-text">
                  <i class = "fa fa-headphones"> </i> {{Math.floor(item.playCount / 1000)}}万
                  </span>

            </div>

            <p class="song-name"> {{item.song.name}}</p>

            <p class="singer-name"> <span v-for="(sitem, sindex) of item.song.artists" :key="sindex">{{sitem.name}}</span></p>

          </li>

        </ul>
      </div>

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
        recommendList: [],
        recommendMusic: []
      }
    },
    mounted() {
      this.getSwiperImgs();
      this.getRecommendList();
      this.getRecommendMusic();
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
        this.axios('/personalized').then(function(response) {
          _this.recommendList = response.data.result;
        })
      },

      getRecommendMusic() {
        let _this = this;
        this.axios('/personalized/newsong').then(function(response) {
          _this.recommendMusic = response.data.result;
        })
      }
    }

  }
</script>
