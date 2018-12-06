<template>
  <div class="singer">

    <scroll class = "scroll-content" :data = "singerList">

      <div>

        <ul class="singer-content">

          <li class="c-li" v-for="(item, index) of singerList" :key="index">

            <p>

              <a :name="item.title">{{item.title}} </a>

            </p>

            <div v-for="sitem in item.items" :key="sitem.id">

              <img :src="sitem.avater">

              <p> {{sitem.name}} </p>

            </div>

          </li>

        </ul>

      </div>

    </scroll>

    <div class="sortline">

       <a v-for="(item, index) of singerList" :key="index" :href = "'#' + item.title" :class = "{active: activeChar.indexOf(item.title) >= 0} " @click = "activeChar = item.title" > {{item.title == "热门" ? "热" : item.title}} </a>

    </div>
  </div>
</template>

<script>
import scroll from '@/components/scroll/scroll'
const pinyin = require('pinyin');
export default {
  components: {
    scroll
  },
  data () {
    return {
      singerList: [],
      hotName: '热门',
      activeChar: '热'
    }
  },

  created () {
    this.getSingerList();
  },

  methods: {
    getSingerList () {
      let _this = this;
      _this.axios('/top/artists?limit=100').then(function (response) {
        let list = response.data.artists;
        list.map((item) => {
          let py = pinyin(item.name[0], {
            style: pinyin.STYLE_FIRST_LETTER
          })
          item.initial = py[0][0].toUpperCase();
        })
        _this.singerList = _this._normalizeSinger(list);
        console.log('singer:', _this.singerList);
      })
    },

    _normalizeSinger (list) {
      let map = {
        hot: {
          title: this.hotName,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index < 10) {
          map.hot.items.push({
            id: item.id,
            name: item.name,
            avater: item.img1v1Url,
            aliaName: item.alias[0]
          })
        }

        const key = item.initial;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push({
          id: item.id,
          name: item.name,
          avater: item.img1v1Url,
          aliaName: item.alias[0]
        })
      })
      let hot = [];
      let ret = [];
      for (const key in map) {
        let val = map[key];
        if (val.title.match(/[A-Z/]/)) {
          ret.push(val)
        } else if (val.title === this.hotName) {
          hot.push(val);
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      })
      return hot.concat(ret);
    }
  }
}
</script>
