<template>
  <view class="index-page">
    <AtList>
      <AtListItem
        title="多端开发"
        arrow="right"
        :on-click="handleClick1"
      />
      <AtListItem
        title="页面生命周期"
        arrow="right"
        :on-click="handleClick2"
      />
    </AtList>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { AtList, AtListItem } from 'taro-ui-vue'
import './index.less' 

export default {
  name: 'Index',
  components: {
    AtList,
    AtListItem
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick1() {
      Taro.navigateTo({
        url: '/pages/page01/index'
      })
    },
    handleClick2() {
      Taro.navigateTo({
        url: '/pages/page02/index'
      })
    },
  }
  
}
</script>