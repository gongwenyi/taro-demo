<template>
  <view class="page01-page">
    <text>当前环境：{{ taroEnv }}</text>
    <avatar />
    <at-button
      type="secondary"
      :on-click="handleClick"
    >
      修改标题
    </at-button>
  </view>
</template>

<script>
import { AtButton } from 'taro-ui-vue'
import './index.less' 
import Avatar from './components/Avatar'
import setTitle from './settitle/set_title'

export default {
  name: 'Page01',
  components: {
    Avatar,
    AtButton
  },
  data () {
    return {
      taroEnv: ''
    }
  },
  created() {
    console.log('page01 created')
    this.taroEnv = process.env.TARO_ENV
  },
  methods: {
    handleClick() {
      setTitle('hello world')
    }
  }
}
</script>