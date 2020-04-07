<template>
    <div class="canvasAbout">
        <canvas id="canvasRotate" class="rotateCanvas" width="978" height="978" @click="rotate"></canvas>
        <img :src="rotatePanelImage" class="rotatePanelImage" @click="rotateChange" />
    </div>
</template>
<script>
import backRotateImg from './images/rotatePan.png'
import rotatePanel from './images/rotatePanel.png'
import coin from './images/coin.png'
import wallet from './images/wallet.png'
export default {
    data() {
        return {
            rotatePanelImage: rotatePanel
        }
    },
    mounted() {
        this.drawCanvas()
    },
    methods: {
        drawCanvas() {
            let canvas = document.getElementById('canvasRotate')
            let ctx = canvas.getContext('2d')
            let backImgObject = new Image()
            let coinImgObject = new Image()
            let walletImgObject = new Image()
            backImgObject.onload = () => {
                ctx.save()
                ctx.drawImage(backImgObject, 0, 0, 978, 978)
                let num = 6 // 配置转盘中奖品的个数，在下边的if中配置奖品的时候也需要加上相应的代码
                for (var i = 0; i < num; i++) {
                    // 保存当前状态
                    ctx.save()
                    // 开始一条新路径
                    ctx.beginPath()
                    // 位移到圆心，下面需要围绕圆心旋转
                    ctx.translate(489, 489)
                    // 从(0, 0)坐标开始定义一条新的子路径
                    ctx.moveTo(0, 0)
                    // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
                    ctx.rotate(((360 / num) * i * Math.PI) / 180)
                    // ctx.rotate(
                    //     (((360 / num) * i + 360 / num / 2) * Math.PI) / 180 // 在原基础上旋转30度
                    // );
                    // 绘制圆弧
                    ctx.arc(0, 0, 489, 0, (2 * Math.PI) / num, false)
                    if (i % 2 === 0) {
                        ctx.fillStyle = '#b0e0e6'
                    } else {
                        ctx.fillStyle = '#e4c6d0'
                    }
                    // 填充扇形
                    // ctx.fill();
                    // 绘制边框
                    ctx.lineWidth = 0.5
                    ctx.strokeStyle = 'black'
                    // ctx.stroke();

                    // 文字
                    ctx.fillStyle = '#333'
                    ctx.font = '50px sans-serif'
                    ctx.save()
                    ctx.translate(293, 87)
                    ctx.rotate((120 * Math.PI) / 180)

                    if (i === 0) {
                        ctx.fillText('10积分', 0, 0)
                    }
                    if (i === 1) {
                        ctx.fillText('20积分', 0, 0)
                    }
                    if (i === 2) {
                        ctx.fillText('30积分', 0, 0)
                    }
                    if (i === 3) {
                        ctx.fillText('40积分', 0, 0)
                    }
                    if (i === 4) {
                        ctx.fillText('50积分', 0, 0)
                    }
                    if (i === 5) {
                        ctx.fillText('60积分', 0, 0)
                    }
                    if (i % 2 === 0) {
                        ctx.drawImage(walletImgObject, 20, 50, 94, 94)
                    } else {
                        ctx.drawImage(coinImgObject, 50, 50, 51, 51)
                    }
                    ctx.restore()

                    // 恢复前一个状态
                    ctx.restore()
                }
                ctx.restore()
            }
            backImgObject.src = `${backRotateImg}`
            coinImgObject.src = `${coin}`
            walletImgObject.src = `${wallet}`
        },
        rotate() {
            let canvas = document.getElementById('canvasRotate')
            let ctx = canvas.getContext('2d')
            ctx.translate(489, 489)
            // setInterval(() => {
            //     ctx.rotate(1* Math.PI / 180)
            // }, 1000);
        },
        rotateChange() {
            let canvas = document.getElementById('canvasRotate')
            let randommuil = Math.random() * 1000 + 1
            // js实现匀速转动5圈，随后加速，再减速
            canvas.style.transition = 'all 6s linear'
            setTimeout(function () {
                canvas.style.transition = 'all 6s ease-out'
                canvas.style.transform = `rotate(${360 * 10 + 120}deg)`
            }, randommuil)
            setTimeout(() => {
                this.$dialog.alert({
                    title: '提示',
                    message: '您已中奖'
                }).then(() => {
                    canvas.style.transition = ''
                    canvas.style.transform = `rotate(${0}deg)`
                })
            }, 6500)
        }
    }
}
</script>
<style lang="less">
.canvasAbout {
    width: 11.25rem;
    height: 20rem;
    position: relative;
    .rotateCanvas {
        width: 9.78rem;
        height: 9.78rem;
    }
    .rotatePanelImage {
        width: 1.85rem;
        height: 2.35rem;
        position: absolute;
        top: 3.57rem;
        left: 4.02rem;
    }
}
</style>
