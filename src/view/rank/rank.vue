<template>
  <div class = "rank">

    <scroll class = "rank-content">

      <div>

        <ul class= "rank-ul">
        
          <li v-for = "(item, index) of rankList" :key = "index">

            <div>
                <img :src = "item.coverImgUrl">
            </div>

            <div>

              <p v-for = "(sitem, sindex) of item.top" :key = "sindex"> 
              
              <span> {{sindex + 1}} </span> 
              
              <span> {{sitem.name}} - </span>

              <span> {{sitem.ar[0].name}} </span>

              </p>

            </div>

          </li>

        </ul>

      </div>

    </scroll>

  </div>

</template>

<script>
    import scroll from '@/components/scroll/scroll'
  export default {
    components: {
      scroll
    },
    data () {
      return {
        rankList: []
      }
    },

    mounted() {
      for (let index = 0; index < 10; index++) {
        this.getRankList(index);
      }
    },

    methods: {
      getRankList(index) {
        let _this = this;
        _this.axios.get('/top/list?idx=' + index).then(function(response) {
          let list = response.data.playlist;
          list.top = response.data.playlist.tracks.slice(0, 3);
          _this.rankList.push(list);
        })
      }

    }
  }
</script>
