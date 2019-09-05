<template>
  <div id="slide_two">
    <div class="wrap">
      <div class="rote">
        <div class="ch ch_1">Webpack</div>
        <div class="ch ch_2">NodeJS</div>
        <div class="ch ch_3">Vue.js</div>
        <div class="ch ch_4">JQuery</div>
        <div class="ch ch_5">Vue-cli</div>
        <div class="ch ch_6">小程序</div>
        <div class="ch ch_7">SCSS</div>
        <div class="ch ch_8">CommonJS</div>
        <div class="rote_in">
          <div class="ph ph_1">HTML</div>
          <div class="ph ph_2">CSS</div>
          <div class="ph ph_3">JS</div>
          <div class="ph ph_4">PS</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  components: {},
  methods: {},
  computed: {}
}
</script>
<style lang="scss">
#slide_two {
  width: 100%;
  height: 100%;
  background: hsla(46, 89%, 29%, 0.308);
  overflow: hidden;
  .wrap {
    width: 80%;
    height: 30%;
    background: #fff;
    position: relative;
    flex-wrap: wrap;
    margin: 10% auto;
    .rote {
      width: 300px;
      height: 300px;
      border: 2px dashed #999;
      border-radius: 50%;
      // position: absolute;
      // top: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: myfirst 10s infinite linear ;
      // left: 70px;
      .ch {
        width: 60px;
        height: 60px;
        background: #000;
        position: absolute;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 700;
        // animation: yourfirst 10s infinite linear ;
      }
      .ch_1 {
        top: -30px;
        background: rgba(147, 147, 189, 0.8);
      }
      .ch_2 {
        top: 270px;
        background: rgba(121, 100, 102, 0.8);
      }
      .ch_3 {
        left: -30px;
        background: rgba(193, 131, 106, 0.8);
      }
      .ch_4 {
        left: 270px;
        background: rgba(76, 157, 160, 0.8);
      }
      .ch_5 {
        top: 16px;
        left: 230px;
        background: rgba(117, 148, 179, 0.8);
      }
      .ch_6 {
        top: 225px;
        left: 230px;
        background: rgba(117, 148, 179, 0.8);
      }
      .ch_7 {
        top: 225px;
        left: 15px;
        background: rgba(11, 121, 231, 0.8);
      }
      .ch_8 {
        top: 16px;
        left: 15px;
        background: rgba(240, 169, 230, 0.308);
      }
    }
    .rote_in {
      width: 150px;
      height: 150px;
      border: 2px dashed #999;
      border-radius: 50%;
      position: relative;
      animation: yourfirst 10s infinite linear ;
      .ph {
        width: 40px;
        height: 40px;
        background: #000;
        border-radius: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 8px;
      }
      .ph_1 {
        left: 110px;
        background: rgba(179, 164, 140, 0.8);
      }
      .ph_2 {
        left: 110px;
        top: 105px;
        background: rgba(171, 209, 220, 0.8);
      }
      .ph_3 {
        // left: 110px;
        top: 105px;
        background: rgba(238, 215, 163, 0.8);
      }
      .ph_4 {
        background: rgba(207, 184, 178, 0.8);
      }
    }
  }
}
@keyframes myfirst {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg)
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes yourfirst {
 0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-360deg);
  }
  75% {
    transform: rotate(-540deg)
  }
  100% {
    transform: rotate(-720deg);
  }
  
  //蒸羊羔、蒸熊掌、蒸鹿尾儿、烧花鸭、烧雏鸡、烧子鹅
  //卤煮、卤鸭、酱鸡、腊肉、松花、小肚儿
  //晾肉、香肠儿、什锦苏盘、白肚儿、清蒸八宝猪、江米酿鸭子
}

</style>
