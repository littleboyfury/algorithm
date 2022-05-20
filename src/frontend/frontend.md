# 实现 arrange('William').wait(5).do('commit').wait(5).do('push').execute();
[arrange](arrange.ts)
# 实现函数柯里化
[curry](curry.ts)

3. 实现一个Scheduler类，使下面的代码能正确输出。
[scheduler](scheduler.ts)

```javascript
// Usage
const timeout = (time, value) => new Promise(resolve => {
  setTimeout(() => resolve(value), time)
})
const scheduler = new Scheduler(2)
const addTask = (time, order, value) => {
  return scheduler.add(() => timeout(time, value))
    .then((value) => {
      console.log(order)
      return value;
    })
}

addTask(1000, '1', 'value111111').then(value => console.log(value))
addTask(500, '2')
addTask(300, '3', '311111').then(value => console.log(value))
addTask(400, '4')
// output: 2 3 1 4
```

4. 实现 Promise.all Promise.any Promise.race Promise.allsettled
5. 实现订阅发布，支持 on off once trigger
6. 实现 new 关键字
7. 实现 bind call apply
8. 实现 debounce throttle
防抖
[debounce](debounce.ts)
节流
[throttle](throttle.ts)

9. 实现拍平数组
10. 实现拍平对象
11. 实现 semversion，如 1.2.1 > 1.2.0 > 1.1.2.rc.1 > 1.1.2.beta.1 > 1.1.2.alpha.1 > 1.0.0
12. 写一个加法函数sum，支持sum(1)(2)(3,4)(5,6,7….)，console.log(sum(1,2,3)(4)) => 输出 10
13. 实时 fps 计算
14. 实现深拷贝
15. 实现模版变量
16. 实现如下链式调用

```javascript
let users = new user("xwl", 25)
users.getAge().getName().getAge()

```
17. 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度,以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
```javascript
// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list);
```
[convert](convert.ts)

18. 实现千位分隔符
```javascript
a = 123456789.12345
console.log(numFormat(a))
// 123,456,789.12345


b = -123456789.12345
console.log(numFormat(b))
// -123,456,789.12345


c = 0.12345
console.log(numFormat(c))
// 0.12345
```

19. 实现并发请求
20. 实现数组去重
```javascript
// 去除下列数组重复内容
var arr =[1, '1', 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN,'NaN', 0, 0, 'a', 'a', {}, {}]
```
