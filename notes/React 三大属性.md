# React 三大属性

这三大属性是指：

1. State: 组件内部的状态
2. Props: 来自外部的属性
3. Refs：表示组件内的某一个元素

## 1. State

`state` 是一个对象，它包含组件的数据状态，当状态变化时，会触发视图的更新。

state是私有的，完全受控于组件内部，只有使用内置的方法`setState()`，修改后才能触发更新

setState是**合并**更新

函数组件无法使用state，其内部没有`this`

## 2. Props

React 中组件通过 `props` 属性接收外部传入的数据，

一般是子组件接受父组件传递过来的值，函数组件也能使用Props，直接通过函数的参数传递接收

### Props的只读性

无论是函数声明组件函数class声明组件，都不能修改自身的props

严格的规则：**所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。**

### 类型检验

需要引入独立的 `prop-types`库

```jsx
import PropTypes from 'prop-types';
MyComponent.propTypes = {
	// 指定检验的类型
}
```

[PropTypes](https://react.docschina.org/docs/typechecking-with-proptypes.html)

### 默认Prop值

```jsx
// 指定 props 的默认值：
Greeting.defaultProps = {
  name: 'Stranger'
};
```

### 3. Refs

ref能直接拿到元素的真实DOM，直接从this中获取对应的元素

### string类型

```jsx
{/* 使用 ref="" 方式直接定义字符串标识  */}
<input ref="myInput" type="text" />

// 在 refs 中获取定义的 ref 标识
const { myInput } = this.refs;
```

会在以后的版本移出，不建议继续使用

### 回调

采取回调的Refs又有两种方式，直接定义回调函数和类方法

#### 回调形式

```jsx
{/* ref 直接定义成一个回调函数，参数就是节点本身，将它赋值给组件的一个 myInput 属性 */}
<input ref={(ele) => (this.myInput = ele)} type="text" />

// 直接从组件实例上获取 myInput
console.log(this.myInput); // <input type="text">
```

> 如果 `ref` 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

意思是说，像上面这种定义内联函数的方式，在组件更新时，即除第一次外，后面 render 函数再执行时，这个定义的 ref 内联函数会被调用两次，其参数第一次是 null，第二次是 DOM 元素。之所以出现这样的情况，是因为组件更新时，会清空一下之前的 ref，保证更新。

#### 类方法

```jsx
{/* 这里不再直接定义内联函数 */}
<input ref={this.setInputRef} type="text" />
```

### createRef()

现在 React 推荐使用 `React.createRef()`，然后通过 `ref` 属性附加到 React 元素上。

```jsx
// 首先在类中调用方法创建ref
myInput = React.createRef();

{/* 将创建好的 ref 附加到元素上 */}
<input ref={this.myInput} type="text" />

// 获取元素
console.log(this.myInput.current); // 这里需要注意，元素是在 current 属性上
```

*React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是专人专用*

如果另外的元素也指定相同的ref，会**覆盖**之前的

同时，官方也提示不要**过度使用Refs**，下面是几个适合使用 refs 的情况：

- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库。

例如以下情况可以避免使用

- 组件间的通信最好是使用将state的[**状态提升**](https://zh-hans.reactjs.org/docs/lifting-state-up.html)
- 获取事件触发的元素标签，可以利用event.target实现

```jsx
<input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>

showData2 = (event)=>{
  alert(event.target.value);
}
```

- 输入类的组件使用受控组件代替非受控组件

  - 非受控组件指的是输入类的组件采取现用现取

  ```jsx
  <form onSubmit={this.handleSubmit}>
    用户名：<input ref={c=>this.username = c} type="text" name="username"/>
    密码：<input ref={c=>this.password = c} type="password" name="password" />
  <button>登陆</button>
  </form>
  ```

  因为有多个元素输入，不能采取上面的event.target所有只能利用ref获取元素的值

  - 受控组件将输入的状态维护到state中，利用onChange事件回调更新输入到state中

  ```jsx
  <form onSubmit={this.handleSubmit}>
   		用户名：<input onChange={this.saveUsername} type="text" name="username"/>
   		密码：<input onChange={this.savePassword} type="password" name="password" />
   		<button>登陆</button>
   </form>
  // 保存用户名到状态中
  saveUsername = (event)=>{
      this.setState({username:event.target.value})
  }
  ```

  