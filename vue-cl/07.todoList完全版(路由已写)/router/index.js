import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Message from "../views/Message.vue";
import News from "../views/News.vue";
import MsgDetail from "../views/MsgDetail.vue";
import NewsDetail from "../views/NewsDetail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "news",
        component: News,
        children: [
          {
            path: "news",
            name: "newsxiangqing",
            component: NewsDetail,
          },
        ],
      },
      {
        path: "message",
        component: Message,
        children: [
          {
            // 加：是为了配合params使用
            path: "detail/:id/:title/:content",
            name: "detail",
            component: MsgDetail,
            // 开启props传值（只能用于params）
            // props: true,
            props(route) {
              return route.query;
            },
          },
        ],
      },
    ],
  },
];

const route = new VueRouter({
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default route;
