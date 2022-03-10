const div = dom.find('.parent1>.child3') // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color
dom.style('.child1', 'color', 'blue')  // 设置 类名为 child1 的 style.color

const divList = dom.find('.child2') // 获取多个 .child2 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素
//<div class=​"child2">​text1​</div>​
//<div class=​"child2">​text2​</div>​

dom.each('.child1', (n) => console.log(n))  // 遍历类名为 .child1 的所有元素

//<div class=​"child1" style=​"color:​ blue;​">​text1​</div>
//<div class=​"child1" style=​"color:​ blue;​">​text2​</div>
//<div class=​"child1" style=​"color:​ blue;​">​text3​</div>​
