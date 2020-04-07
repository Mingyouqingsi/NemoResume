/*
 * 创建一个包含所有卡片的数组
 */
import $ from 'jquery'
var Myarr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
export default {
    data() {
        return {
            myArrInfo: Myarr
        }
    },
    created() {
        // 刷新数组的顺序
        this.shuffle()
    },
    mounted() {
        this.run()
    },
    methods: {
        // 刷新数组顺序
        shuffle() {
            var currentIndex = this.myArrInfo.length; var temporaryValue; var randomIndex
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex)
                currentIndex -= 1
                temporaryValue = this.myArrInfo[currentIndex]
                this.myArrInfo[currentIndex] = this.myArrInfo[randomIndex]
                this.myArrInfo[randomIndex] = temporaryValue
            }
        },
        // 初始化函数，进入页面或重新开始时用到
        run() {
            this.fclick()// 对每个卡片注册点击事件
            sessionStorage.setItem('ss', 0)// 初始化点击次数
            sessionStorage.setItem('pp', 0)// 初始化已匹配数量
            sessionStorage.setItem('tt', 'xx')// 用来判断当前匹配效果是否完成，xx为已完成
            $('.moves').html(0)// 点击次数初始化赋值
        },

        fclick() {
            $('#deck li').click(function () {
                if ($(this).hasClass('open') || $(this).hasClass('match')) {
                    return false// 如果当前卡片是打开或者已经匹配了的状态则点击无效
                }
                if (sessionStorage.getItem('tt') !== 'xx') {
                    return false// 如果匹配效果还未完成点击无效，防止一次点三个
                }
                var ss = parseInt(sessionStorage.getItem('ss')) + 1// 点击次数加1
                var pp = parseInt(sessionStorage.getItem('pp'))
                sessionStorage.setItem('ss', ss)
                $('.moves').html(ss)
                if (parseInt(sessionStorage.getItem('ss')) % 2 === 0) {
                    // 如果是第二次点击，则进入匹配机制
                    sessionStorage.setItem('tt', 'yy')
                    $(this).addClass('open show open2')// 第二个加上open2
                    // console.log($(".open1").html());
                    // console.log($(".open2").html());
                    if ($('.open1').html() === $('.open2').html()) { // 如果两个里面的html都是一样的  则匹配成功
                        setTimeout(function () {
                            $('.open1,.open2').addClass('match')
                            $('.open1').removeClass('show open1')
                            $('.open2').removeClass('show open2')
                            sessionStorage.setItem('tt', 'xx')
                            sessionStorage.setItem('pp', pp + 1)
                            if (pp === 7) { // 当匹配成功次数达到8，则匹配完成
                                setTimeout(function () {
                                    alert('恭喜游戏通关，你共用了' + ss + '步')
                                }, 500)
                            }
                        }, 500)
                    } else {
                        setTimeout(function () {
                            // 匹配不成功，关闭卡片
                            $('.open1').removeClass('open show open1')
                            $('.open2').removeClass('open show open2')
                            sessionStorage.setItem('tt', 'xx')
                        }, 500)
                    }
                } else {
                    $(this).addClass('open show open1')// 第一个加上open1
                }
            })
        }
    }

}
