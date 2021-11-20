<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader></TodoHeader>
      <TodoMain></TodoMain>
      <TodoFooter></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader/TodoHeader.vue";
import TodoMain from "./components/TodoMain/TodoMain.vue";
import TodoFooter from "./components/TodoFooter/TodoFooter.vue";
import TodoItem from "./components/TodoItem/TodoItem.vue";
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
    TodoItem,
  },
};
/**
 * 使用Vuex对项目进行管理的基本步骤
 * 1. 在项目中下载Vuex  npm i vuex
 * 2. 在main.js中引入Vuex
 * 3. 注册Vuex  Vuex.use(Vuex)
 * 4. 在当前项目的src文件夹下面新建一个store文件夹  并新建index.js
 * 5. 在index.js文件中去初始化 Vuex实例
 * 6. 将store引入到main.js中 并和vm进行关联
 */
</script>


<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>