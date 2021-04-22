<template>
  <view
    class="todo-item-comontent"
  >
    <checkbox
      :value="item.name"
      :checked="item.complete"
      :class="{complete: item.complete}"
      @tap="handleComplete"
    >
      {{ item.name }}
    </checkbox>
    <view
      class="at-icon at-icon-trash"
      @tap="handleDelete"
    />
  </view>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    onComplete: {
      type: Function,
      default: () => {}
    },
    onDelete: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  methods: {
    handleComplete() {
      this.onComplete(this.item)
    },
    handleDelete() {
      this.onDelete(this.item)
    }
  }
}
</script>
<style lang="less">
.todo-item-comontent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  .complete {
    color: #999;
  }
  .at-icon-trash {
    padding: 10px;
    font-size: 36px;
  }
}
</style>