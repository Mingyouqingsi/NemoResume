<template>
    <div class="xn-container">
        <button class="type1" @click="showCssPopup(true)">css transition</button>
        <button class="type1" @click="showVuePopup(true)">vue transition</button>
        <button class="type1">下一页 >></button>

        <!-- 方法一：通过css3的transition实现  -->
        <div class="css-popup">
            <div class="mask" v-show="show" @click="showCssPopup(false)"></div>
            <div class="popup-content" :class="{show}">
                <HW v-if="HW" />
            </div>
        </div>

        <!-- 方法二：通过vue的transition配合css3动画实现  -->
        <div class="vue-popup">
            <div class="mask" v-show="show2" @click="showVuePopup(false)"></div>
            <transition name="slide">
                <div class="popup-content" v-show="show2">
                    <CA />
                </div>
            </transition>
        </div>
        <div class="nineGame">
            <Nine/>
        </div>
    </div>
</template>
<script>
import HW from '../common/RotateCards/HelloWorld.vue'
import CA from '../common/Canvas/Canvas.vue'
import Nine from '../common/NineLuck/NineLuck.vue'

export default {
    name: 'Fixed',
    components: {
        HW,
        CA,
        Nine
    },
    data() {
        return {
            show: false,
            show2: false,
            HW: false
        }
    },
    methods: {
        showCssPopup(flag) {
            this.show = flag
            this.HW = flag
        },
        showVuePopup(flag) {
            this.show2 = flag
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.xn-container {
    height: 100%;
}
button {
    display: block;
    width: 300px;
    height: 44px;
    margin: 20px auto;
    border-radius: 4px;
    background-color: #3884ff;
    color: #fff;
}
.css-popup {
    .popup-content {
        position: absolute;
        height: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: white;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
        z-index: 1;
        &.show {
            height: 400px;
        }
        p {
            line-height: 30px;
            text-align: center;
        }
    }
}
.vue-popup {
    .popup-content {
        position: absolute;
        height: 400px;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: white;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        p {
            line-height: 30px;
            text-align: center;
        }
    }
}
.mask {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-in;
    z-index: 1;
}

.slide-enter-active {
    animation-name: slideInUp;
    animation-duration: 0.2s;
    animation-fill-mode: both;
}
.slide-leave-active {
    animation-name: slideOutDown;
    animation-duration: 0.2s;
    animation-fill-mode: both;
}
@keyframes slideInUp {
    0% {
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }

    to {
        transform: translateZ(0);
    }
}
@keyframes slideOutDown {
    0% {
        transform: translateZ(0);
    }

    to {
        visibility: hidden;
        transform: translate3d(0, 100%, 0);
    }
}
.delay-leave-active {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -o-animation-delay: 0.2s;
    animation-delay: 0.2s;
}
</style>
