/**
 * 1. Vuex
 *      基本步骤：
 *          引入时一定要先引入Vue.js文件
 *          然后再引入当前的插件文件
 *          用之前先注册
 *              Vue.use(插件)
 *
 *          mapState
 *          mapGetters
 *          mapMutations(只能同步)
 *          mapActions（既能异步也能同步）
 * 2. 路由 也是基于Vue的插件
 *      1. 下载 yarn add vue-router
 *      2. 引入 普通html页面引入script      如果是组件 import VueRouter form 'vue-router'
 *      3. 注册插件 Vue.use(VueRouter)
 *      4. 创建路由实例对象
 *          const router = new VueRouter({
 *              routes: [
 *                  {path: '/home',component: Home},
 *                  {path: '/hello', component: {render: h => h('router-view')}},
 *                  {path: '/user', component: ()=> import('./views/user')}
 *              ]
 *          })
 *      5. 设置路由规则
 *      6. 将路由对象与Vue实例对象关联起来
 *      7. 一定要在对应显示组件的位置添加一个 router-view
 *          如果页面中有a标签需要跳转的话，最好是替换成 router-link to=''
 *
 *      多级路由或是嵌套路由
 */
