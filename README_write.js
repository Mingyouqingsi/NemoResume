const NODE_FS = require('fs')
const NODE_PATH = require('path')
const NODE_CHILDPROCESS = require('child_process')
const OBJ = { path: './', name: '', deep: 1, type: 'directory', objItemFileTreeMd: '', children: [] }
let packageDevdependencies = {}
let originPath = ''
let fileTreeArray = []
const GITGNORE = [ 'node_modules', '.git', 'dist' ]
const TEXT = [
    [ '# [项目名]项目的前端[功能名]项目：', '---' ],
    [ ' ', '## 1', '**此仓库的存储内容**', ' ', '此仓库用于保存[项目名]项目中的[功能描述]功能的源代码。', ' ' ],
    [ ' ', '## 2', '**此项目的线上版本**', ' ', '开发服：', ' ', '<<<<-', 'http://[URL]', '|', 'https://[URL]', '->>>>', ' ', '测试服：', ' ', '<<<<-', 'http://[URL]', '|', 'https://[URL]', '->>>>', ' ', '正式服：', ' ', '<<<<-', 'http://[URL]', '|', 'https://[URL]', '->>>>', ' ', '<<<<-', '- 账号：本系统无手动登陆账号', '|', '- 账号：请联系[负责人]', '->>>>', ' ' ],
    [ ' ', '## 3', '**此项目的开发语言**', ' ', '[框架名]框架的前端项目', ' ' ],
    [ ' ', '## 4', '**此项目的分支作用**' ],
    [ ' ', '## 5', '**此项目的文件索引**', ' ', '```' ],
    [ ' ', '## 6', '**此项目的本地运行**', ' ', '请见wiki', ' ', '<<<<-', 'http://[URL]', '|', '1.[步骤1]', '2.[步骤2]', '3.[步骤3]', '->>>>', ' ' ],
    [ ' ', '## 7', '**此项目的编译方式**', ' ', '请见wiki', ' ', '<<<<-', 'http://[URL]', '|', '1.[步骤1]', '2.[步骤2]', '3.[步骤3]', '->>>>', ' ' ],
    [ ' ', '## 8', '**此项目的部署地址**', ' ', '请见wiki', ' ', '<<<<-', 'http://[URL]', '|', '1.[步骤1]', '2.[步骤2]', '3.[步骤3]', '->>>>', ' ' ],
    [ ' ', '## 9', '**此项目的前端监控或数据跟踪**', ' ', '请见wiki', ' ', '<<<<-', 'http://[URL]', '|', '此项目无数据跟踪。', '|', '[数据跟踪前端监控描述]', '->>>>', ' ' ],
    [ ' ', '## 10', '**此项目的第三方插件**', ' ' ],
    [ ' ', '## 11', '**此项目的原型图、效果图**', ' ', '<<<<-', '此项目无原型图。', '|', '此项目无效果图。', '|', '此项目无原型图、效果图。', '->>>>', ' ', '原型图：', '<<<<-', 'http://[URL]', '|', '- 请联系[负责人]', '->>>>', ' ', '效果图：', '<<<<-', 'http://[URL]', '|', '- 请联系[负责人]', '->>>>', ' ' ],
    [ ' ', '## 12', '**此项目的交接者首要注意项**', ' ', '[注意项描述]', ' ' ],
    [ ' ', '## 13', '**此项目的其他补充说明以及文件**', ' ', '[补充说明描述]', ' ' ]
]
const MODEL_LIST = [
    [ 'vue', '前端框架工具' ],
    [ 'vuex', 'vue的状态管理模式' ],
    [ 'vue-router', 'vue路由管理器' ],
    [ 'webpack', '模块打包器' ],
    [ 'webpack-cli', 'webpack脚手架' ],
    [ 'webpack-dev-server', '本地运行环境搭建工具' ],
    [ 'less', 'CSS 预处理语言' ],
    [ '@vue/cli-service', 'vue-cli服务' ],
    [ 'sass', 'CSS扩展语言' ],
    [ '@babel/core', 'Babel编译器核心' ],
    [ 'babel-core', 'Babel编译器核心' ]
]
const PLUGIN_LIST = [
    [ 'stylelint-loader', 'webpack的stylelint过滤器' ],
    [ 'babel-loader', 'webpack的babel过滤器' ],
    [ 'vue-loader', 'webpack的vue过滤器' ],
    [ 'vue-md-loader', 'webpack的将md转换为vue组件的过滤器' ],
    [ 'css-loader', 'webpack的css过滤器' ],
    [ 'eslint-loader', 'webpack的eslint过滤器' ],
    [ 'file-loader', 'webpack的file过滤器' ],
    [ 'less-loader', 'webpack的less过滤器' ],
    [ 'sass-loader', 'webpack的sass过滤器' ],
    [ 'style-loader', 'webpack的style过滤器' ],
    [ 'thread-loader', 'webpack的子进程工作管理工具' ],
    [ 'url-loader', 'webpack的url过滤器' ],
    [ 'mini-css-extract-plugin', 'webpack的将CSS提取为独立的文件的插件' ],
    [ 'node-sass', '允许用户以极快的速度将scss文件本地编译为css' ],
    [ 'happypack', 'webpack的子进程分发插件' ],
    [ 'clean-webpack-plugin', '自动清除构建文件夹' ],
    [ 'hard-source-webpack-plugin', '为模块提供中间缓存步骤,加快速度' ],
    [ 'html-webpack-harddisk-plugin', '插件生成一个在 body 内使用 script 标签引入所有 webpack 打包文件的html5文件。' ],
    [ 'html-webpack-plugin', '插件的基本作用就是生成html文件' ],
    [ 'image-webpack-loader', '图片的压缩优化' ],
    [ 'optimize-css-assets-webpack-plugin', '用于优化或者压缩CSS资源' ],
    [ 'stylelint-webpack-plugin', 'webpack的stylelint运行插件' ],
    [ 'uglifyjs-webpack-plugin', '用于优化或者压缩CSS资源' ],
    [ '@vue/test-utils', 'Vue官方的单元测试实用工具库' ],
    [ 'vue-jest', 'Vue单元测试工具' ],
    [ 'jasmine-core', '单元测试工具' ],
    [ 'karma', '单元测试工具' ],
    [ 'karma-chrome-launcher', 'karma的chrome检查器' ],
    [ 'karma-jasmine', 'karma的jasmine插件' ],
    [ 'karma-sourcemap-loader', 'karma的javascript插件' ],
    [ 'karma-webpack', 'karma的webpack插件' ],
    [ 'vue-template-compiler', 'vue的将template语法转为render函数的插件' ],
    [ 'vue-clipboard2', 'vue剪切板功能插件' ],
    [ 'vue-color', 'vue拾色器插件' ],
    [ 'vuedraggable', 'vue的拖拽插件' ],
    [ 'vue-tel-input', 'Vue的国际电话格式的input插件' ],
    [ 'stylelint', 'css代码审查工具' ],
    [ 'stylelint-config-recommended-scss', '包含rule，code format的scss标准' ],
    [ 'stylelint-scss', 'stylelint的scss标准' ],
    [ 'eslint', 'JavaScript 语法规则和代码风格的检查工具' ],
    [ 'eslint-plugin-html', '支持类 html 文件（如 vue）的内联脚本检测' ],
    [ 'emoji-regex', 'emoji编码正则插件' ],
    [ 'jest', '测试框架' ],
    [ 'jquery', 'JavaScript框架' ],
    [ 'cross-env', '运行跨平台设置和使用环境变量的脚本' ],
    [ 'lodash', 'JavaScript 实用工具库' ],
    [ 'web-model', '前端api层管理工具,依靠superagent作为ajax工具' ],
    [ 'superagent', '客户端请求代理模块' ],
    [ 'echarts', '数据可视化库' ],
    [ 'vue-quill-editor', 'vue的quill插件' ],
    [ 'echarts-gl', '数据可视化库-webGL支持库' ],
    [ 'date-fns', '日期日历工具插件' ],
    [ 'tinycolor2', 'JavaScript中的颜色处理和转换库' ],
    [ 'html2canvas', 'html转canvas插件' ],
    [ 'jspdf', '用于生成各种用途的 PDF 文档的插件' ],
    [ 'smoothscroll-polyfill', '纯JS页面的平滑滚动插件' ],
    [ 'wangeditor', '基于javascript和css开发的 Web富文本编辑器' ],
    [ 'quill', '富文本编辑器插件' ],
    [ 'parchment', 'Quill的文档模型' ],
    [ 'eslint-plugin-vue', 'Vue.js的官方ESLint插件' ],
    [ 'lodash.throttle', '节流防抖插件' ],
    [ 'extract-text-webpack-plugin', '把css代码从js文件中抽离出来' ],
    [ 'js-cookie', '处理Cookie' ],
    [ 'moment', 'JavaScript 日期处理类库' ],
    [ 'vue-datepicker-simple', 'vue日期选择组件' ],
    [ 'vue-datepicker-simple', 'vue日期选择组件' ],
    [ '@vue/cli-plugin-babel', 'vue-cli的babel插件' ],
    [ '@vue/cli-plugin-eslint', 'vue-cli的eslint插件' ],
    [ 'babel-eslint', '对所有有效的babel代码进行lint处理' ],
    [ 'core-js', '@babel/polyfill的核心依赖' ],
    [ 'normalize.css', '浏览器CSS规范化' ],
    [ '@babel/plugin-proposal-class-properties', '转换静态类属性以及使用属性初始值设定项语法声明的属性' ],
    [ '@babel/plugin-proposal-decorators', '将类和对象装饰器编译为ES5' ],
    [ '@babel/plugin-proposal-export-namespace-from', '将导出名称空间编译到ES2015' ],
    [ '@babel/plugin-proposal-function-sent', '将function.sent的元属性编译为有效的ES2015代码' ],
    [ '@babel/plugin-proposal-json-strings', '用JS字符串转义U + 2028线分隔符和U + 2029参数分隔符' ],
    [ '@babel/plugin-proposal-numeric-separator', '从十进制，二进制，十六进制和八进制文字中删除数字分隔符' ],
    [ '@babel/plugin-proposal-throw-expressions', '在IIFE中包装引发表达式' ],
    [ '@babel/plugin-syntax-dynamic-import', '允许解析import（）' ],
    [ '@babel/plugin-syntax-import-meta', '允许解析import.meta' ],
    [ '@babel/plugin-syntax-jsx', '允许解析import.jsx' ],
    [ '@babel/plugin-transform-runtime', '外部化对助手和内置函数的引用，自动填充代码而不会污染全局变量' ],
    [ '@babel/polyfill', '在任何es2015+的环境中编写代码' ],
    [ '@babel/preset-env', '每个环境的Babel预设。' ],
    [ '@babel/runtime-corejs2', 'babel的带有core-js @ 2 polyfilling的模块化运行时帮助程序' ],
    [ 'babel-helper-vue-jsx-merge-props', 'Vue jsx传播的babel助手。' ],
    [ 'babel-plugin-transform-vue-jsx', 'Vue 2.0 JSX的Babel插件' ],
    [ 'postcss-cssnext', '先进的css写法' ],
    [ '@vue/eslint-config-standard', 'Vue CLI设置' ],
    [ 'bootstrap', '栅格布局' ],
    [ 'element-ui', 'element-ui组件' ],
    [ 'popper.js', 'rem计算插件' ],
    [ 'vue-awesome-swiper', '轮播图插件' ]
]
const SYMBOL = [ './', '## ', '**', '    ', '├── ', '└── ', ' ', '\\', '[ ', ' ](#', ')', '- ', ' :  ', '  //', '\n', '/', '```', '","', '":"', '└', '├', '│', '     #' ]
const SHORT_SENTENCE = [ 'git branch -a', '/origin/', '> [分支作用的语言描述]', './README.md', 'utf8', 'directory', 'file', 'objItemFileTreeMd' ]

if (NODE_FS.readdirSync('./').includes('package.json') && JSON.parse(NODE_FS.readFileSync('./package.json', 'utf-8')).devDependencies && JSON.parse(NODE_FS.readFileSync('./package.json', 'utf-8')).dependencies) {
    packageDevdependencies = Object.assign(JSON.parse(NODE_FS.readFileSync('./package.json', 'utf-8')).devDependencies, JSON.parse(NODE_FS.readFileSync('./package.json', 'utf-8')).dependencies)
} else if (NODE_FS.readdirSync('./').includes('package.json') && JSON.parse(NODE_FS.readFileSync('./package.json', 'utf-8')).devDependencies && !JSON.parse(NODE_FS.readFileSync('./package.json', 'utf-8')).dependencies) {
    packageDevdependencies = JSON.parse(NODE_FS.readFileSync('./package.json', 'utf-8')).devDependencies
} else if (NODE_FS.readdirSync('./').includes('package.json') && !JSON.parse(NODE_FS.readFileSync('./package.json', 'utf-8')).devDependencies && JSON.parse(NODE_FS.readFileSync('./package.json', 'utf-8')).dependencies) {
    packageDevdependencies = JSON.parse(NODE_FS.readFileSync('./package.json', 'utf-8')).dependencies
}

function displayFileOne() {
    // 1.赋值项目名
    TEXT[0][0] += NODE_PATH.resolve(SYMBOL[0]).substring(NODE_PATH.resolve(SYMBOL[0]).lastIndexOf(SYMBOL[7]) + 1, NODE_PATH.resolve(SYMBOL[0]).length)

    // 2.赋值目录名

    let chapterArray = new Array().concat(TEXT)
    chapterArray.splice(0, 1)
    for (let i = 0; i < chapterArray.length; i++) {
        TEXT[0].splice(TEXT[0].length - 1, 0, `${SYMBOL[6]}`)
        TEXT[0].splice(TEXT[0].length - 1, 0, `${SYMBOL[8]}${chapterArray[i][2].substring(chapterArray[i][2].indexOf(SYMBOL[2]) + SYMBOL[2].length, chapterArray[i][2].lastIndexOf(SYMBOL[2]))}${SYMBOL[9]}${chapterArray[i][1].substring(chapterArray[i][1].lastIndexOf(SYMBOL[1]) + SYMBOL[1].length, chapterArray[i][1].length)}${SYMBOL[10]}`)
        TEXT[0].splice(TEXT[0].length - 1, 0, `${SYMBOL[6]}`)
    }

    // 3.赋值开发语言
    if (Object.keys(packageDevdependencies).length == 0) {
        TEXT[3].push(`${SYMBOL[11]}[语言名]${SYMBOL[12]}[版本号]`)
        TEXT[3].push(SYMBOL[6])
    }
    for (let i of Object.keys(packageDevdependencies)) {
        if (MODEL_LIST.find(item => item[0] === i)) {
            const VERSION = packageDevdependencies[i].indexOf('^') === 0 ? packageDevdependencies[i].substring(1) : packageDevdependencies[i]
            TEXT[3].push(`${SYMBOL[11]}${i}${SYMBOL[12]}${VERSION}${SYMBOL[13]}${MODEL_LIST.find(item => item[0] === i)[1]}`)
            TEXT[3].push(SYMBOL[6])
        }
    }

    // 4.赋值分支
    const BRANCH = NODE_CHILDPROCESS.execSync(SHORT_SENTENCE[0]).toString().split('\n').filter(item => item.includes('remotes/origin/') && !item.includes(' -> ')).map(item => item.substring(item.lastIndexOf(SYMBOL[15]) + SYMBOL[15].length, item.length))
    for (let i of BRANCH) {
        TEXT[4].push(SYMBOL[6])
        TEXT[4].push(`${SYMBOL[11]}${i}`)
        TEXT[4].push(SHORT_SENTENCE[2])
        TEXT[4].push(SYMBOL[6])
    }

    // 10.赋值第三方插件
    if (Object.keys(packageDevdependencies).length == 0) {
        TEXT[10].push(`<<<<-`)
        TEXT[10].push(`${SYMBOL[11]}[插件名]${SYMBOL[12]}[版本号]`)
        TEXT[10].push(`|`)
        TEXT[10].push(`此项目无第三方插件`)
        TEXT[10].push(`->>>>`)
        TEXT[10].push(SYMBOL[6])
    }
    for (let i of Object.keys(packageDevdependencies)) {
        if (PLUGIN_LIST.find(item => item[0] === i)) {
            const VERSION = packageDevdependencies[i].indexOf('^') === 0 ? packageDevdependencies[i].substring(1) : packageDevdependencies[i]
            TEXT[10].push(`${SYMBOL[11]}${i}${SYMBOL[12]}${VERSION}${SYMBOL[13]}${PLUGIN_LIST.find(item => item[0] === i)[1]}`)
            TEXT[10].push(SYMBOL[6])
        }
    }

    // 5.赋值文件路径
    displayFile(OBJ)
    let fileTreeRegex = ''
    const FIRE_TREE_INTERVAL = setInterval(() => {
        if (fileTreeRegex == JSON.stringify(fileTreeArray)) {
            clearInterval(FIRE_TREE_INTERVAL)
            let mdItemLen = 0
            for (let i of fileTreeArray) { mdItemLen = i.length > mdItemLen ? i.length : mdItemLen }
            for (let i = 0; i < mdItemLen; i++) {
                for (let j = fileTreeArray.length - 1; j >= 0; j--) {
                    if (fileTreeArray[j][i] == SYMBOL[19]) {
                        for (let z = j - 1; z >= 0; z--) {
                            if (fileTreeArray[z][i] && fileTreeArray[z][i] != SYMBOL[6] && fileTreeArray[z][i] != SYMBOL[20]) { break }
                            if (fileTreeArray[z][i] == SYMBOL[6]) {
                                const TEMPORARY_ARRAY = fileTreeArray[z].split('')
                                TEMPORARY_ARRAY[i] = SYMBOL[21]
                                fileTreeArray[z] = TEMPORARY_ARRAY.join('')
                            }
                        }
                    }
                }
            }
            for (let i = 0; i < fileTreeArray.length; i++) { fileTreeArray[i] += SYMBOL[22] }
            TEXT[5] = TEXT[5].concat(fileTreeArray)
            TEXT[5].push(SYMBOL[16])
            TEXT[5].push(SYMBOL[6])
            writeFile()
        } else {
            fileTreeRegex = JSON.stringify(fileTreeArray)
        }
    }, 1000)
}

function writeFile() {
    NODE_FS.writeFileSync(SHORT_SENTENCE[3], '', SHORT_SENTENCE[4])
    for (let i of TEXT) {
        for (let j of i) { NODE_FS.appendFileSync(SHORT_SENTENCE[3], `${j}${SYMBOL[14]}`, SHORT_SENTENCE[4]) }
    }
}

function displayFile(objTree) {
    // 生成绝对路径
    const PARAMS = objTree.path.indexOf(SYMBOL[0]) == 0 ? NODE_PATH.resolve(objTree.path) : objTree.path
    // 循环检索路径
    NODE_FS.stat(PARAMS, function (err, stats) {
        if (err) { throw (err) };
        if (GITGNORE.filter(item => PARAMS === `${originPath}${SYMBOL[7]}${item}` || PARAMS.indexOf(`${originPath}${SYMBOL[7]}${item}${SYMBOL[7]}`) === 0).length === 0) {
            if (OBJ.name === '') { originPath = PARAMS }
            let objFileTree = ''
            if (objTree.deep == 1) { objFileTree = `${PARAMS.substring(PARAMS.lastIndexOf(SYMBOL[7]) + 1, PARAMS.length)}` } else if (objTree.isLast && objTree.isLast == true) { objFileTree = `${SYMBOL[5]}${PARAMS.substring(PARAMS.lastIndexOf(SYMBOL[7]) + 1, PARAMS.length)}` } else { objFileTree = `${SYMBOL[4]}${PARAMS.substring(PARAMS.lastIndexOf(SYMBOL[7]) + 1, PARAMS.length)}` }
            for (let i = 2; i < PARAMS.replace(originPath, '').split(SYMBOL[7]).length; i++) { objFileTree = `${SYMBOL[3]}${objFileTree}` }
            let items = Object.assign({
                children: [],
                path: PARAMS,
                objItemFileTreeMd: objFileTree,
                deep: PARAMS.replace(originPath, '').split(SYMBOL[7]).length,
                type: stats.isDirectory() ? SHORT_SENTENCE[5] : SHORT_SENTENCE[6],
                name: PARAMS.substring(PARAMS.lastIndexOf(SYMBOL[7]) + 1, PARAMS.length)
            })
            if (stats.isDirectory()) {
                const ITEM_DIR_ARRAY = NODE_FS.readdirSync(PARAMS)
                for (let i = 0; i < ITEM_DIR_ARRAY.length; i++) {
                    const absolutePath = NODE_PATH.resolve(NODE_PATH.join(PARAMS, ITEM_DIR_ARRAY[i]))

                    if (NODE_FS.statSync(absolutePath).isDirectory() && GITGNORE.filter(item => absolutePath.includes(`${originPath}${SYMBOL[7]}${item}`)).length === 0 || !NODE_FS.statSync(absolutePath).isDirectory()) {
                        items.children.push({
                            deep: items.deep + 1,
                            path: absolutePath,
                            isLast: i + 1 == ITEM_DIR_ARRAY.length,
                            name: absolutePath.substring(absolutePath.lastIndexOf(SYMBOL[7]) + 1, absolutePath.length),
                            type: NODE_FS.statSync(absolutePath).isDirectory() ? SHORT_SENTENCE[5] : SHORT_SENTENCE[6],
                            children: []
                        })
                    }
                }
            }
            objTree = Object.assign(objTree, items)
            fileTreeArray = []
            deepTraversal(OBJ)
            for (let i = 0; i < objTree.children.length; i++) { displayFile(objTree.children[i]) }
        }
    })
}

function deepTraversal(node) {
    if (node != null) {
        let childrens = node.children
        fileTreeArray.push(node.objItemFileTreeMd)
        if (!node.objItemFileTreeMd) {
            fileTreeArray.push(node.name)
        }
        if (node.type == 'directory') {
            for (let i = 0; i < childrens.length; i++) { deepTraversal(childrens[i]) }
        }
    }
}

displayFileOne()
