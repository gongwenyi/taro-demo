import Vue from 'vue'
import 'taro-ui-vue/dist/style/index.scss' // 全局引入一次即可
import './app.less'

const App = {
  onLaunch() {
    console.log('app onLaunch')
  },
  created() {
    console.log('app created')
  },
  onShow (options) {
    console.log('app onShow options=', options)
  },
  onHide () {
    console.log('app onHide')
  },
  onError (error) {
    console.log('app onError error=', error)
  },
  onPageNotFound (object) {
    console.log('app onPageNotFound object=', object)
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
