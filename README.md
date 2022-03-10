# 手动封装的DOM库
现有以下3个接口
## 1.dom.find()
```javascript
dom.find('selector')
```
`dom.find()`用于获取对应的元素，接收一个符合CSS规范的选择器参数selector
```javascript
dom.find('.parent1>.child3') // 获取.parent1下的类名为.child元素
```
## 2.dom.style()
```javascript
dom.style(selector, attr, value)
```
`dom.style()`用于给选择的元素添加样式style，第一个参数为选择的元素，第二个参数为style的属性名，第三个参数为style的值

```javascript
dom.style('.child1', 'color', 'blue')  // 直接设置 类名为 child1 的 style.color`

const div = dom.find('.parent1>.child3') // 获取对应的元素后
dom.style(div, 'color', 'red') // 再设置 div.style.color
```
## 3.dom.each()
```javascript
dom.each(selector, fn)
```
`dom.each()`用于遍历选择的元素，第一个参数为选择的元素，第2个参数为一个函数，可操作遍历的元素节点
```javascript
const divList = dom.find('.child2') // 获取多个 .child2 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素

dom.each('.child1', (n) => console.log(n))  // 遍历类名为 .child1 的所有元素
```
