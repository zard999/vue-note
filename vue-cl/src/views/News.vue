<template>
  <div>
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <router-link
          :to="{
            name: 'newsxiangqing',
            query: item,
          }"
          >{{ item.title }}</router-link
        >
      </li>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        { id: "001", title: "国家新闻", content: "十九届六中全会有多重要" },
        {
          id: "002",
          title: "军事新闻",
          content: "空军与外机对峙超2小时将其逼退",
        },
        { id: "003", title: "社会新闻", content: "东北雪大到模糊" },
      ],
    };
  },
};
</script>

<style>
</style>