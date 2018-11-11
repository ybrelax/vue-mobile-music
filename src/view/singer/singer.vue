<template>
  <div class = "singer">
  
    <div class = "singer-content">

      <ul >

      <li class = "c-li" v-for = "(item, index) of singerList" :key = "index" >

        <p> {{item.name}}</p>

        <div>

          <img :src  = "item.picUrl">

          <p> {{item.name}}  </p>

        </div>

      </li>

      </ul>

    </div>

  </div>

</template>

<script>
  const pinyin = require("pinyin");
  export default{
    data () {
      return {
        singerList: []
      }
    },

    created() {
      this.getSingerList();
    },
    
    methods: {
      getSingerList() {
        let _this = this;
        _this.axios('/top/artists?limit=100').then(function (response) {
          let list = response.data.artists;
          list.map((item) => {
            item.name[0], {
              style: pinyin.STYLE_FIRST_LETTER
            }
          })
        })
      }
    }
  }
</script>