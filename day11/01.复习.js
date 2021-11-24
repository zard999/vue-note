/**
 * 1. 路由的基本步骤
 *      1. 下载路由插件 npm i vue-router
 *      2. 引入路由文件     html -- script  组件    import VueRouter from 'vue-router'
 *      3. 支持插件 Vue.use(VueRouter)
 *      4. 创建路由实例对象 const router = new VueRouter({})
 *      5. 关联到vm 将router对象添加到vm中
 *      6. 添加路由规则 const routers = []
 *      7. 设置出口    router-view 在这个位置显示对应的组件 默认为push模式，直接添加history可以更改模式
 *
 * 2. 设置导航路由
 *      声明式导航  使用router-link替换a    href替换成to
 *          使用router-link的时候会自动的生成两个类 可以关联别人写好的高亮的样式
 *      编程式导航
 *          所谓编程式导航就是使用js的方式实现页面切换 跳转
 *              传参：this.$router.push({name: 'hhh', query{id: 1}})
 *
 * 3. 设置多级路由  相当于父子组件嵌套
 *      使用children继续设置路由规则
 * 4. 设置模式
 *      默认是hash模式  地址栏中带# 兼容性好
 *     history 兼容性差点
 * 5. 命名路由
 *      使用name给当前的规则添加一个名称  如果设置多个命名路由      名字不要城府
 * 6. 参数传递
 *      实现思路：类似于url传参   http://127.0.0.1/category
 *          参数又分两种
 *              params：特点：http://127.0.0.1/category/10/aaa/bbb
 *              query：特点：http:127.0.0.1/category?id=10&title=aaa&content=bbb
 *      实现步骤：
 *          1. 准备数据
 *          2. 设置路由路径 path
 *                 如果是params参数形式值参 需要设置占位符  path:'detail/:id/:title/:content'
 *          3. 到子组件找那个通过this.$route.(params|query)
 *          当我们的路由对象和vm关联以后，在vm就多了两个对象    $router $route
 *          任何组件中都可以直接访问这两个对象 this.$router $this.route
 *
 * */
