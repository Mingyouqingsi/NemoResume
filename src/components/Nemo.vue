<template>
  <swiper :options="swiperOption" id="layout">
    <swiper-slide>
      <s1 />
    </swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import s1 from './Slide_1.vue'
export default {
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"><span class="iconfont icon-comment"></span></span>'
          }
        }
      }
    }
  },
  components: {
    s1
  }
}
</script>
<style lang="scss">
@import "../assets/css/reset.scss";
@import "../assets/font/iconfont.css";

.swiper-container {
  width: 100vw;
  height: 100vh;
}
#layout {
  .swiper-pagination-bullet {
    background: rgb(5, 148, 167);
    width: 12px;
    height: 12px;
  }
  .swiper-pagination-bullets{
        width: 13px;
  }
}
</style>
