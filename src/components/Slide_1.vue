<template>
  <div id="slide_one">
    <div class="userInfo">
      <div class="user">
        
      </div>
    </div>
    <div class="infoView">

    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
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
  background: skyblue;
  .userInfo {
    width: 100%;
    height: 50%;
    background: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    // animation-name: Info
    .user{
      width: 20%;
      height: 50%;
      background: rgb(10, 241, 126);
    }
  }
  .infoView {
     width: 100%;
    height: 50%;
    background: rgb(224, 224, 194);
  }
}
</style>
