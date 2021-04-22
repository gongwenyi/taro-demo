<template>
  <view class="page02-page">
    <text>生命周期</text>
    <view style="height: 3000px" />
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import './index.less' 

export default {
  name: 'Page02',
  components: {
  },
  data () {
    return {
    }
  },
  onReady() {
    console.log('page02 onReady')
  },
  onReady(options) {
    console.log('page02 onReady options=', options)
  },
  onShow() {
    console.log('page02 onShow')
  },
  onHide() {
    console.log('page02 onHide')
  },
  created() {
    console.log('page02 created')
  },
  mounted() {
    console.log('page02 mounted')
  },
  beforeUpdate() {
    console.log('page02 beforeUpdate')
  },
  updated() {
    console.log('page02 updated')
  },
  onPullDownRefresh() {
    console.log('page02 onPullDownRefresh')
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 2000);
  },
  onReachBottom() {
    console.log('page02 onReachBottom')
  },
  onPageScroll() {
    console.log('page02 onPageScroll')
  },
  onShareAppMessage() {
    console.log('page02 onShareAppMessage')
  },
  onShareTimeline() {
    console.log('page02 onShareTimeline')
  },
  methods: {

  },
}
</script>