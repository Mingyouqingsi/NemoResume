<template>
    <div class="content">
        <div class="chooseTest" v-if="page===1">
            <el-radio v-model="radio1" label="1" @change="getValue()">中国</el-radio>
            <el-radio v-model="radio1" label="2" @change="getValue()">法国</el-radio>
            <el-radio v-model="radio1" label="3" @change="getValue()">英国</el-radio>
            <el-radio v-model="radio1" label="4" @change="getValue()">俄罗斯</el-radio>
            <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="textarea"
                maxlength="20"
                show-word-limit
            ></el-input>
            <el-button type="primary" @click="goNext">
                下一页
                <i class="el-icon-arrow-right el-icon--right"></i>
            </el-button>
        </div>
        <div class="chooseTest2" v-if="page===2">
            <el-radio v-model="radio2" label="1" @change="getValue()">地中海</el-radio>
            <el-radio v-model="radio2" label="2" @change="getValue()">红海</el-radio>
            <el-radio v-model="radio2" label="3" @change="getValue()">黑海</el-radio>
            <el-radio v-model="radio2" label="4" @change="getValue()">罗布泊</el-radio>
            <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="textarea"
                maxlength="30"
                show-word-limit
            ></el-input>
            <el-button type="primary" icon="el-icon-arrow-left" @click="goLast">上一页</el-button>
            <el-button type="primary" icon="el-icon-arrow-right" @click="goNext">下一页</el-button>
        </div>
        <div>
            <div v-for="(i,index) in dataList" :key="index">
                <el-select v-model="i.value1" placeholder="请选择">
                    <el-option
                        v-for="item in i.options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-select v-model="i.value2" placeholder="请选择">
                    <el-option
                        v-for="item in i.options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-input v-model="i.value3" placeholder="请输入内容"></el-input>
                <el-input v-model="i.value4" placeholder="请输入内容"></el-input>
                <el-button type="primary" @click="cutter(index)">-</el-button>
            </div>
        </div>
        <div>
            <el-select v-model="input1" placeholder="请选择">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-select v-model="input2" placeholder="请选择">
                <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            <el-input v-model="input3" placeholder="请输入内容"></el-input>
            <el-input v-model="input4" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="add">+</el-button>
        </div>
        <el-form class="form-wrapper" ref="myForm" :model="myForm" label-width="110px">
            <el-form-item label="滑块验证：">
                <div>
                    <slider ref="slider"></slider>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="toSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import slider from './slider'
export default {
    data() {
        return {
            myForm: {},
            radio1: '',
            textarea: '',
            page: 1,
            radio2: '',
            dataList: [],
            value1: '',
            value2: '',
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input: '',
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
            options2: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }]
        }
    },
    components: {
        slider
    },
    methods: {
        getValue() {
            console.log(this.radio1)// 打印的值，就是被选中的radio的值，1,2
            console.log(this.radio2)
        },
        goNext() {
            if (this.page === 1) {
                this.page = this.page + 1
                return
            }
            if (this.page === 2) {
                this.$message.error('这是最后一页了~')
            }
        },
        goLast() {
            this.page = this.page - 1
        },
        add() {
            var dataNew = {
                options1: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                options2: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value1: '',
                value2: '',
                value3: '',
                value4: ''
            }
            dataNew.value1 = this.input1
            dataNew.value2 = this.input2
            dataNew.value3 = this.input3
            dataNew.value4 = this.input4
            this.dataList.push(dataNew)
            // let num = this.dataList.length - 1
            // this.dataList[num].value1 = this.input1
            // this.dataList[num].value2 = this.input2
            // this.dataList[num].value3 = this.input3
            // this.dataList[num].value4 = this.input4
            console.log(this.dataList)
            this.input1 = ''
            this.input2 = ''
            this.input3 = ''
            this.input4 = ''
            // dataAdd.value1 = this.input1
            // dataAdd.value2 = this.input2
            // dataAdd.value3 = this.input3
            // dataAdd.value4 = this.input4
        },
        cutter(index) {
            this.dataList.splice(index, 1)
        },
        toSubmit() {
            if (this.$refs['slider']) {
                // 未通过验证时，提示错误信息并返回
                if (!this.$refs['slider'].confirmSuccess) {
                    this.$message.error('请拖动滑块验证')
                    return
                }
            }
            // 通过验证后提交
            // TO DO ...
            this.$message.success('验证成功，可提交')
        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100%;
}
.chooseTest {
    margin: auto;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid #333;
}
.chooseTest2 {
    margin: auto;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid skyblue;
}
.el-button + .el-button {
    margin: 0;
}
.el-input {
    width: 200px;
}
.form-wrapper {
    margin-top: 50px;
    width: 500px;
}
</style>
