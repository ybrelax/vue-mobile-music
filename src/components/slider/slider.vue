<template>
  <div class = "slider" ref="slider">

    <div class = "slider-group" ref="sliderGroup">

      <slot> </slot>

    </div>

       <div class = "dots">
          <span class = "dot" v-for="(item, index) in dots" :key = "index" :class="{'active' : currentPageIndex == index}"></span>
      </div>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {addClass} from '@/common/dom'

  export default {
    props: {
      // 循环轮播
      loop: {
        type: Boolean,
        default: true
      },
      // 自动轮播
      autoPlay: {
        type: Boolean,
        default: true
      },
      // 间隔
      interval: {
        type: Number,
        default: 4000
      }
    },

    data() {
      return {
        dots: [],
        currentPageIndex: 0,
        slider: null,
        children: null
      }
    },

    mounted() {
      setTimeout(() => {
        this.setSliderWidth();
        this.initSlider();
        this.initDots();
        this.onScrollEnd();
      });
    },

    methods: {
      setSliderWidth() {
        this.children = this.$refs.sliderGroup.children;
        let width = 0;
        let sliderWidth = this.$refs.slider.clientWidth;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          addClass(child, 'slider-item');
          child.style.width = sliderWidth + 'px';
          width += sliderWidth;
        }

        if (this.loop) {
          width += 2 * sliderWidth;
        }
        this.$refs.sliderGroup.style.width = width + 'px';
      },

      initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          momentum: false, // 当快速在屏幕上滑动一段距离的时候，会根据滑动的距离和时间计算出动量，并生成滚动动画。
          snap: {
            loop: this.loop,
            threshold: 0.3,
            seed: 400,
            dots: true
          },
          snapSpeed: 400,
          bounce: false, // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画。
          stopPropagation: true,
          click: true
        })
        this.slider.on('scrollEnd', this.onScrollEnd);
      },

      onScrollEnd() {
        let pageIndex = this.slider.getCurrentPage().pageX;
        this.currentPageIndex = pageIndex;
        if (this.autoPlay) {
          this.play();
        }
      },

      initDots() {
        this.dots = new Array(this.children.length);
      },

      play() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.slider.next();
        }, this.interval);
      },

      destroyed() {
        clearTimeout(this.timer);
      }

    }
  }
</script>
