<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <AddMessage @add="add"></AddMessage>
      <CommentBack :commentList="commentList" :delItem="delItem"></CommentBack>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import AddMessage from "./components/AddMessage/AddMessage.vue";
import CommentBack from "./components/CommentBack/CommentBack.vue";
import "./App.css";
export default {
  name: "App",
  components: {
    Header,
    AddMessage,
    CommentBack,
  },
  data() {
    return {
      commentList: [
        {
          id: 0,
          user: "zyh",
          content: "React真不错！",
        },
        {
          id: 1,
          user: "cqh",
          content: "Redux！",
        },
        {
          id: 2,
          user: "wyf",
          content: "Hooks真不错！",
        },
      ],
    };
  },

  methods: {
    delItem(id) {
      this.commentList = this.commentList.filter((item) => item.id !== id);
    },

    add(username, commentConent) {
      this.commentList.unshift({
        id: Date.now(),
        user: username,
        conent: commentConent,
      });
    },
  },
};
</script>

<style>
</style>
