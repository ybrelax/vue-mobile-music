<template>
  <div class = "singer">
  
    <div class = "singer-content">

      <ul >

      <li class = "c-li" v-for = "(item, index) of singerList" :key = "index" >

        <p> 热门</p>

        <div>

          <img>

          <p>  </p>

        </div>

      </li>

      </ul>

    </div>

  </div>

</template>

<script>
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
          _this.singerList = response.data.artists;
        })
      }
    }
  }
</script>