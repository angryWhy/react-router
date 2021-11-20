// eslint-disable-next-line no-unused-vars
import {BrowserRouter,NavLink,Routes,Route}from"react-router-dom"
import About from "./pages/about";
import Profile from "./pages/profile";
import Home from "./pages/home";
import User from"./pages/user"
import Detail from "./pages/detail";
function App() {
  let sty={
    color:"red"
  }
  const id="abc "
  return (
    <div className="App">
     <BrowserRouter>
     {/*activeStyle已被移除，使用style，接受回调函数，参数为{isActive}*/}
     <NavLink to="/" style={({isActive})=>isActive?sty:undefined}>首页</NavLink>
       <NavLink to="/about" style={({isActive})=>isActive?sty:undefined} >关于</NavLink>
       <NavLink to="/profile"style={({isActive})=>isActive?sty:undefined} >我的</NavLink>
       <NavLink to="/user"style={({isActive})=>isActive?sty:undefined} >用户</NavLink>
       <NavLink to={`/detail/${id}`}style={({isActive})=>isActive?sty:undefined} >动态</NavLink>
    
       {/*Switch已更名为Routes*/}
       <Routes>    
       <Route exact  path="/" element={<Home/>}/> 
       <Route  path="/about/*" element={<About/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/user" element={<User/>}/>
       <Route path={`/detail/${id}`} element={<Detail/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
