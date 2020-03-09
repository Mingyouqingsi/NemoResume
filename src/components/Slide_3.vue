<template>
  <div id="slide_three">
    <div class="worker">
      <div class="um">
        <img style="width: 100px" src="../common/um.png" />
        <div class="">青岛优米信息有限公司</div>
        <div>"前端开发工程师"</div>
      </div>
      <ul class="um-skill">
        <li class="skills">2019年7月~至今</li>
        <li class="skills">· 小程序活动页的开发与维护</li>
        <li class="skills">· 网站后台管理系统页面开发</li>
        <li class="skills">· 根据设计图纸还原相应的页面</li>
        <li class="skills">· 参与客户需求体验会议</li>
      </ul>
    </div>
    <ul class="listdot">
      <li class=""></li>
      <li class=""></li>
      <li class=""></li>
    </ul>
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
// 蒸羊羔、蒸熊掌、蒸鹿尾儿、烧花鸭、烧雏鸡、烧子鹅
// 卤煮、卤鸭、酱鸡、腊肉、松花、小肚儿
// 晾肉、香肠儿、什锦苏盘、熏鸡白肚儿、清蒸八宝猪、江米酿鸭子
// 罐儿野鸡、罐儿鹌鹑、卤什锦、卤子鹅
// 山鸡、兔脯、菜蟒、银鱼、清蒸哈什蚂
// 烩鸭丝、烩鸭腰、烩鸭条、清拌鸭丝
</script>
<style lang="scss">
#slide_three {
  width: 100%;
  height: 100%;
  background: #945c4c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .worker {
    width: 80%;
    height: 68%;
    background: #fff;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .um {
      width: 200px;
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    .um-skill {
      width: 50%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .skills {
        width: 218px;
        font-size: 14px;
      }
    }
  }
  .listdot {
    width: 80%;
    height: 5%;
    background: #333;
  }
}
</style>
