# 参考文档

[一篇文章总结redux、react-redux、redux-saga](https://juejin.cn/post/6844903846666321934)

[Redux 入门教程（一）：基本用法](https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

# redux

## 前言

React有props和state:

1. props意味着父级分发下来的属性
2. state意味着组件内部可以自行管理的状态，并且整个React没有数据向上回溯的能力，这就是react的**单向数据流**

这就意味着如果是一个数据状态非常复杂的应用，更多的时候发现**React根本无法让两个组件互相交流**，使用对方的数据，react的通过层级传递数据的这种方法是非常难受的，这个时候，迫切需要一个机制，**把所有的state集中到组件顶部，能够灵活的将所有state各取所需的分发给所有的组件**，是的，这就是redux

## 简介

1. redux是的诞生是为了给 React 应用提供「可预测化的状态管理」机制。
2. Redux会将整个应用状态(其实也就是数据)存储到到一个地方，称为store
3. 这个store里面保存一棵状态树(state tree)
4. 组件改变state的唯一方法是通过调用store的dispatch方法，触发一个action，这个action被对应的reducer处理，于是state完成更新
5. 组件可以派发(dispatch)行为(action)给store,而不是直接通知其它组件
6. 其它组件可以通过订阅store中的状态(state)来刷新自己的视图

## 工作流程

![img](pictures/bg2016091802.jpg)

首先，用户发出 Action。

> ```javascript
> store.dispatch(action);
> ```

然后，Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State 。

> ```javascript
> let nextState = todoApp(previousState, action);
> ```

State 一旦有变化，Store 就会调用监听函数。

> ```javascript
> // 设置监听函数
> store.subscribe(listener);
> ```

`listener`可以通过`store.getState()`得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。

## 使用步骤

**创建reducer**

- 可以使用单独的一个reducer,也可以将多个reducer合并为一个reducer，即：`combineReducers()`
- action发出命令后将state放入reucer加工函数中，返回新的state,对state进行加工处理

**创建action**

- 用户是接触不到state的，只能有view触发，所以，这个action可以理解为指令，需要发出多少动作就有多少指令
- action是一个对象，必须有一个叫type的参数，定义action类型

**创建的store，使用createStore方法**

- store 可以理解为有多个加工机器的总工厂
- 提供subscribe，dispatch，getState这些方法。