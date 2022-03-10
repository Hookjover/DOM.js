# 手动封装的DOM库
提供以下3个接口
## 1.find()
```javascript
find('selector')
```
find接收一个符合CSS规范的选择器参数selector
```javascript
dom.find('.parent1>.child3') // 获取.parent1下的类名为.child元素
```
## 2.style()
```javascript
style(selector, attr, value)
```
style的第一个参数为选择的元素，第二个参数为style的属性名，第三个参数为style的值

```javascript
dom.style('.child1', 'color', 'blue')  // 直接设置 类名为 child1 的 style.color`

const div = dom.find('.parent1>.child3') // 获取对应的元素后
dom.style(div, 'color', 'red') // 再设置 div.style.color
```
## 3.each()