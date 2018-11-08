<template>
  <div class = "rank">

    <ul class= "rank-ul">
      <li>

        <div>

        </div>

        <div>

          <p> 1 </p>

          <p> 2 </p>

          <p> 3 </p>

        </div>

      </li>

    </ul>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        rankList: []
      }
    },

    mounted() {
      this.getRankList();
    },

    methods: {
      getRankList() {
        let _this = this;
        _this.axios.post('').then(function(response) {
          _this.rankList = response.data.data;
        })
      }

    }
  }
</script>
