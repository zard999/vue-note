// RegExp一般用来判断某个字符串是否符合某种规则
//  1. 使用new + 构造函数的方式
// const reg1 = new RegExp();
// 2. 字面量
// const reg2 = /\d/gim; // 在双斜线里写正则匹配

// 正则常用的方法 test 去判断其他字符串是否符合这个验证规则
// 1. test
// const str = "123abc";
// console.log(reg2.test(str));

// 2. exec
// const reg3 = /(\w)\1(\w)\2/g;
// const str3 = "iiweecc.sddwwellffooeeeaaaBB";
// console.log(reg3.exec(str3));
// console.log(reg3.exec(str3));

// 3. 匹配双大括号里的内容
const reg4 = /{{\s*(.*?)\s*}}/g;
const str4 = "姓名是：{{ name }} {{ age }}";
console.log(reg4.exec(str4));
// console.log(RegExp.$1);
