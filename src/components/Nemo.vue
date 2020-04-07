<template>
    <swiper :options="swiperOption" id="layout">
        <!-- <swiper-slide>
            <s1 title="JinX" />
        </swiper-slide>
        <swiper-slide>
            <s2 />
        </swiper-slide>
        <swiper-slide>
            <s3 />
        </swiper-slide>-->
        <!-- <swiper-slide>
            <s4 />
        </swiper-slide>
        <swiper-slide>
            <s5 />
        </swiper-slide>
         <swiper-slide>
            <s6 />
        </swiper-slide>-->
        <swiper-slide>
            <s7 />
        </swiper-slide>
        <swiper-slide>
            <s8 />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
// import s1 from './Slide_1.vue'
// import s2 from './Slide_2.vue'
// import s3 from './Slide_3.vue'
// import s4 from './Slide_4.vue'
// import s5 from './Slide_5.vue'
// import s6 from './Slide_6.vue'
import s7 from './Slide_7.vue'
import s8 from './Slide_8.vue'

export default {
    provide: {
        test: '卧槽，无情'
    },
    data() {
        return {
            // num: '你好',
            swiperOption: {
                direction: 'vertical',
                slidesPerView: 1,
                mousewheel: true,
                noSwiping: true,
                noSwipingClass: 'stop-swiping',
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
        // s1,
        // s2,
        // s3,
        // s4,
        // s5,
        // s6,
        s7,
        s8
    },
    mounted() {
        // console.log(this.$children)
        // console.log(this.$root)
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
    .swiper-pagination-bullets {
        width: 13px;
    }
}
</style>
