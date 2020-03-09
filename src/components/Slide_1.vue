<template>
  <div id="slide_one">
    <div class="userInfo">
      <div class="user">
        <img src="../common/109951163849735697.jpg" alt />
        <div class="ac_top">
          <div class="ac">24岁</div>
          <div class="ac">青岛</div>
        </div>
        <div class="ac_bottom">
          <div class="ac">在职</div>
          <div class="ac" style="margin: 10px 0 0 30px">本科</div>
        </div>
      </div>
      <div class="brave">
        <span>千里之行，矣始于足下</span>
        <span>江东子弟，何惧于天下</span>
      </div>
    </div>
    <div class="infoView">
      <div class="um">
        <span>我是xxx，前端工程师</span>
        <span>目前就职于青岛优米信息技术有限公司</span>
        <span>Mingyouqingsi@163.com</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    inject: ['test'],
    props: [
        'summer'
    ],
    data () {
        return {
        }
    },
    mounted () {
    // console.log(this.summer)
    // console.log(this.$attrs)
    // console.log(this.test)
    },
    methods: {},
    computed: {},
    components: {}
}
</script>
<style lang="scss">
#slide_one {
  width: 100%;
  height: 100%;
  background: rgb(224, 224, 194);
  // min-width: 500px;
  .userInfo {
    width: 100%;
    height: 50%;
    // background: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    // transform: scale(2,2);
    .user {
      width: 300px;
      height: 300px;
      // background: rgb(10, 241, 126);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        width: 50%;
        height: 50%;
        border-radius: 50%;
        position: absolute;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .ac {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: inset 0 0 1.5625rem 0.3125rem hsla(0, 0%, 100%, 0.67);
        color: #fff;
        // transition: all 2s;
        animation: Info 5s infinite;
        // animation-iteration-count: infinite;
      }
      .ac_top {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .ac_bottom {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .brave {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #ffffff;
      color: #87b0a5;
      font-size: 16px;
    }
  }
  .infoView {
    width: 100%;
    height: 50%;
    background: rgb(224, 224, 194);
    .um {
      width: 50%;
      height: 50%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      color: #87b0a5;
      font-size: 16px;
    }
  }

  @keyframes Info {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }
}
</style>
