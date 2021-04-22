<template>
  <view class="todo-page">
    <view class="todo-header">
      <at-input
        class="todo-header-input"
        clear
        type="text"
        :max-length="50"
        placeholder="请输入todo"
        :value="todo"
        :on-change="handleChange"
      >
        <at-button
          class="todo-header-btn"
          size="small"
          type="primary"
          :on-click="handleAdd"
        >
          添加
        </at-button>
      </at-input>
    </view>
    <view>
      <todo-item
        v-for="item in todoList"
        :key="item.name"
        :item="item"
        :on-complete="handleItemComplete"
        :on-delete="handleItemDelete"
      >
        {{ item }}
      </todo-item>
    </view>
    <avatar />
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { AtInput, AtButton } from 'taro-ui-vue'
import TodoItem from './components/TodoItem'
import Avatar from './components/Avatar'
import './todo.less' 
const KEY = 'MY_TODO_LIST';
export default {
  name: 'Todo',
  components: {
    AtInput,
    AtButton,
    TodoItem,
    Avatar
  },
  data () {
    return {
      todo: '',
      todoList: []
    }
  },
  onShow() {
    console.log('todo onShow')
  },
  created() {
    console.log('todo created')
    this.getTodoListFormStorage();
  },
  methods: {
    getTodoListFormStorage() {
      const todoList = Taro.getStorageSync(KEY);
      if (todoList.length) {
        this.todoList = todoList;
      }
    },
    setTodoListToStorage() {
      Taro.setStorageSync(KEY, this.todoList);
    },
    handleChange(value) {
      const todo = value && value.trim()
      if (todo) {
        this.todo = todo
      }
    },
    handleAdd() {
      if (this.todo) {
        this.todoList.push({
          name: this.todo,
          complete: false
        })
        this.todo = ''
        this.setTodoListToStorage();
      }
    },
    handleItemComplete(todo) {
      const index = this.todoList.findIndex(item => item.name === todo.name)
      this.todoList.splice(index, 1, {name: todo.name, complete: !todo.complete})
      this.setTodoListToStorage();
    },
    handleItemDelete(todo) {
      Taro.showModal({
        title: '提示',
        content: `你确定要删除 ${todo.name} 吗？`,
        success: (res) => {
          if (res.confirm) {
            const index = this.todoList.findIndex(item => item.name === todo.name)
            this.todoList.splice(index, 1)
            this.setTodoListToStorage();
          }
        }
      })
    },
  },
}
</script>