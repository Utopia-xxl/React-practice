# React-practice
 关于react的练习汇总，包含多个小的项目

# react-demo
这个项目是跟着[React官方教程](https://zh-hans.reactjs.org/tutorial/tutorial.html)完成的一个#字棋游戏，主要的内容包括：

- [环境准备](https://zh-hans.reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial)是学习该教程的**起点**。
- [概览](https://zh-hans.reactjs.org/tutorial/tutorial.html#overview)介绍了 React 的**基础知识**：组件、props 和 state。
- [游戏完善](https://zh-hans.reactjs.org/tutorial/tutorial.html#completing-the-game)介绍了在 React 开发过程中最常用的技术。
- [时间旅行](https://zh-hans.reactjs.org/tutorial/tutorial.html#adding-time-travel)可以让你更加深刻地了解 React 的独特优势。

## 总结

1. 利用node创建一个新项目
   - 执行命令`npx create-react-app my-app`生成名字为my-app的项目
   - `npm start`启动一个html开始页面，有代码发生修改就会实时编译
2. 通过Props传递数据
   - 利用状态提升更好地控制数据
3. 不可变性在React中非常重要
   - 能够方便获取历史记录
   - 跟踪数据的改变，避免修改整个对象树
   - 确定在React中何时重新渲染
4. 函数式组件，如果一个组件只有一个render()方法使用函数式组件会更简单
5. 对数据追加数据使用concat()代替push
   - concat(),合并数组，并且返回一个新的数组，确保了不可变性

