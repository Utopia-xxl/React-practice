// 1.导入counterStore
import { useStore } from './store/index'
// 2.导入中间件连接mobx react 完成响应式变化
import {observer} from 'mobx-react-lite'

function App() {
  // 注意解构赋值 到store实例对象就可以了
  // 防止破坏响应式 用哪个store就解构哪个store
  const {counterStore} = useStore();
  console.log(counterStore)
  return (
    <div className="App">
      {counterStore.count}
      <button onClick={counterStore.addCount}>+</button>
    </div>
  );
}

// 包裹App
export default observer(App);
