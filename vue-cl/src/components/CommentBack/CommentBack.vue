<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <ListItem
        v-for="item in commentList"
        :key="item.id"
        :item="item"
        @del="del"
      ></ListItem>
    </ul>
  </div>
</template>

<script>
import ListItem from "../ListItem/ListItem.vue";
export default {
  name: "CommentBack",
  components: {
    ListItem,
  },
  props: ["commentList", "delItem"],

  methods: {
    del(id) {
      this.delItem(id);
      //   console.log(id);
    },
  },
};
</script>

<style>
</style>