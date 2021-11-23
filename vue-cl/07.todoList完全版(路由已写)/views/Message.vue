<template>
  <div>
    <ul>
      <li v-for="item in msgList" :key="item.id">
        <router-link
          :to="{
            name: 'detail',
            query: item,
          }"
          >{{ item.title }}</router-link
        >&nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      msgList: [
        {
          id: "1",
          title: "猜谜语",
          content: "胸前挂钥匙",
        },
        {
          id: "2",
          title: "打一字",
          content: "王姑娘白姑娘坐在石头上",
        },
        {
          id: "3",
          title: "歇后语",
          content: "猪八戒照镜子",
        },
      ],
    };
  },
};
</script>

<style>
</style>