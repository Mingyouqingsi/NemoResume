<template>
    <div>
        <div>
            <span class="demonstration">单选选择主表:</span>
            <el-select v-model="value1" placeholder="请选择" @change="changeOption1">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </div>
        <div class="block">
            <span class="demonstration">单选选择副表:</span>
            <el-select v-model="value2" placeholder="请选择" @change="changeInput2">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </div>
        <div>
            <el-input v-model="input" @change="NumberCheck(num)"></el-input>
            <el-input v-model="input2"></el-input>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-input value="100" placeholder="请输入内容"></el-input>
        </div>
        <el-checkbox v-model="checked">A</el-checkbox>
        <el-checkbox v-model="checked1">B</el-checkbox>
        <el-checkbox v-model="checked2">C</el-checkbox>
        <!-- <a
            href="http://wechatscrm.chcedo.com/membercenter-beta/memberCenterIndex?url=31311331134&activateTicket=12345"
        >点我~</a>-->
        <div class="border-image-clip-path"></div>
        <!-- <div class="dj-box">
            <div class="g-container">
                <div class="j"></div>
                <div class="j"></div>
            </div>
        </div>-->
        <!-- <div>
            <img class="rotate" src="../common/大转盘.png" alt />
        </div>-->
        <div class="create_boom"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '素材'
            }, {
                value: '选项2',
                label: '行为'
            }, {
                value: '选项3',
                label: '用户'
            }],
            options1: [{
                value: '选项1',
                label: '素材'
            }, {
                value: '选项2',
                label: '行为'
            }, {
                value: '选项3',
                label: '用户'
            }],
            input: '',
            input2: '',
            value1: '',
            value2: '',
            value: '',
            checked: false,
            checked1: false,
            checked2: false,
            options2: [{
                value: '选项1',
                label: '>'
            }, {
                value: '选项2',
                label: '<'
            }, {
                value: '选项3',
                label: '='
            }]
        }
    },
    components: {},
    mounted() { },
    methods: {
        changeOption1(val) {
            let option = [{
                value: '选项2',
                label: '行为'
            }, {
                value: '选项3',
                label: '用户'
            }]
            let options = [{
                value: '选项1',
                label: '素材'
            }, {
                value: '选项3',
                label: '用户'
            }]
            let optionness = [{
                value: '选项1',
                label: '素材'
            }, {
                value: '选项2',
                label: '行为'
            }]
            if (this.value1 === '选项1') {
                this.options1 = option
                this.value2 = ''
            } if (this.value1 === '选项2') {
                this.options1 = options
                this.value2 = ''
            } if (this.value1 === '选项3') {
                this.options1 = optionness
                this.value2 = ''
            }
            let obj = {}
            let getName = ''
            obj = this.options.find((item) => {
                return item.value === val
            })
            this.input = getName = obj.label
            console.log(getName)
        },
        changeInput2(val2) {
            let obj = {}
            let getName = ''
            obj = this.options1.find((item) => {
                return item.value === val2
            })
            this.input2 = getName = obj.label
            console.log(getName)
        },
        NumberCheck(num) {
            var re = /^\d*\.{0,1}\d{0,1}$/
            if (!re.test(this.input)) {
                alert('不可以')
            } else {
                alert('可以了')
            }
        }
    },
    computed: {}
}
</script>
<style lang="scss" scoped>
.el-input {
    width: 200px;
}

.border-image-clip-path {
    position: relative;
    width: 200px;
    height: 100px;
    border: 10px solid;
    border-image: linear-gradient(45deg, gold, deeppink) 1;
    clip-path: inset(0 round 10px);
    animation: huerotate 6s infinite linear;
    filter: hue-rotate(360deg);
}
.dj-box {
    background: #000;
    overflow: hidden;
    width: 500px;
    height: 500px;
}
.g-container {
    position: relative;
    width: 200px;
    margin: 100px auto;
    filter: contrast(150%) brightness(110%);
}

.j {
    position: absolute;
    top: 0;
    left: 0;
    width: 47px;
    height: 218px;
    z-index: 1;
    background: #24f6f0;

    &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border: 47px solid #24f6f0;
        border-top: 47px solid transparent;
        border-radius: 50%;
        top: 121px;
        left: -147px;
        transform: rotate(45deg);
    }

    &::after {
        content: "";
        position: absolute;
        width: 140px;
        height: 140px;
        border: 40px solid #24f6f0;
        border-right: 40px solid transparent;
        border-top: 40px solid transparent;
        border-left: 40px solid transparent;
        top: -110px;
        right: -183px;
        border-radius: 100%;
        transform: rotate(45deg);
        z-index: -10;
    }
}

.j:last-child {
    left: 10px;
    top: 10px;
    background: #fe2d52;
    z-index: 100;
    mix-blend-mode: lighten;
    animation: moveLeft 10s infinite;

    &::before {
        border: 47px solid #fe2d52;
        border-top: 47px solid transparent;
    }
    &::after {
        border: 40px solid #fe2d52;
        border-right: 40px solid transparent;
        border-top: 40px solid transparent;
        border-left: 40px solid transparent;
    }
}
.rotate {
    animation: turn 0.5s linear infinite;
}

@keyframes huerotate {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rorate(360deg);
    }
}
@keyframes moveLeft {
    0% {
        transform: translate(200px);
    }
    50% {
        transform: translate(0px);
    }
    100% {
        transform: translate(0px);
    }
}
// @keyframes turn {
//     0% {
//         -webkit-transform: rotate(0deg);
//     }
//     25% {
//         -webkit-transform: rotate(90deg);
//     }
//     50% {
//         -webkit-transform: rotate(180deg);
//     }
//     75% {
//         -webkit-transform: rotate(270deg);
//     }
//     100% {
//         -webkit-transform: rotate(360deg);
//     }
// }
</style>
