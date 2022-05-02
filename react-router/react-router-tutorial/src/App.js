import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import './App.css';
import Home from './Home'
import About from './About'
import Posts from './Posts'
import PostLists from "./PostLists";
import Post from "./Post";

function App() {
  return (
    // 所有的路由都要嵌套在<BrowserRouter>中
    <BrowserRouter>
      {/* 使用Link组件创建导航栏 */}
      <nav>
        <Link to="/" style={{padding: 5}}>
          Home
        </Link>
        <Link to="/about" style={{padding: 5}}>
          About
        </Link>
        <Link to="/posts" style={{padding: 5}}>
          Posts
        </Link>
      </nav>
      <Routes>
        <Route path ="/" element={<Home/> }/>
        <Route path="/about" element={<About />} />
        <Route path="posts" element={<Posts /> }>
          {/* 路由嵌套 */}
          <Route path="" element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
