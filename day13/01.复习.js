/**
 *  1. 将伪数组转换成真数组的方式
 *      Array.from()
 *      Array.prototype.slice.call()
 *  2. call和apply和bind
 *      相同点：
 *          1. 都可以改变this指向
 *      不同点：
 *          1. apply和call会立即执行
 *          2. bind不会让函数立即执行 只会返回当前函数的返回值
 *          3. apply和call的第二个参数不同
 *  3. 节点类型
 *      文档是由节点组成的
 *                     nodeType     nodeName        nodeValue
 *          元素节点       1          标签名            null
 *          属性节点       2          属性名           属性值
 *          文本节点       3          #text            字符串
 *          注释节点       8
 *          childNodes 是标准的或是官方的获取标签子节点的方式
 *                      不但可以获取子标签节点，还可以获取文本节点
 *  4. 文档碎片 documentFragment
 *  5. hasOwnProperty
 *  6. RegExp
 *  7. vue源码
 *      先实现劫持 再实现代理
 *      劫持目的：
 *          为了给传进来的data中的数据都添加对应的get和set，让vue知道哪些数据被访问了或是被修改了
 *      代理的目的：
 *          代理就是将传进来的data中的数据添加到vm实例对象上，目的是为了让我们访问或是使用起来更加方便
 *  8. 发布订阅模式
 *      DOM相当于订阅者
 *      Dep类相当于是发布者
 * */
