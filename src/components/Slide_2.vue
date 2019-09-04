<template>
  <div id="slide_two">
      <div class="wrap">
          <div class="rote">

          </div>
          <div class="rote_in">  

          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
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
    display: flex;
    justify-content: center;
    align-items: center;
    .wrap {
        width: 80%;
        height: 30%;
        background: #fff;
        position: relative;
        .rote {
            width: 280px;
            height: 280px;
            border: 2px dashed #999;
            border-radius: 50%;
            position: absolute;
        }
        .rote_in {
           width: 140px;
            height: 140px;
            border: 2px dashed #999;
            border-radius: 50%;
            position: absolute;
        }
    }
}
@keyframes myfirst {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
