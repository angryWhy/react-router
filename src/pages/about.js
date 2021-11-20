import React from 'react'
import { NavLink,Routes,Route,useNavigate } from 'react-router-dom'
 function Culture(props) {
    return (
        <div>
            <h2>企业文化</h2>
            <h2>企业文化</h2>
            <h2>企业文化</h2>

        </div>
    )
}
function Connect(props) {
    return (
        <div>
             <h2>企业联系</h2>
             <h2>企业联系</h2>
             <h2>企业联系</h2>
        </div>
    )
}
  function Env(props) {
        return (
            <div>
                 <h2>企业环境</h2>
                 <h2>企业环境</h2>
                 <h2>企业环境</h2>
            </div>
        )
    }
    
    function MyButton() {
        let navigate = useNavigate();
        function handleClick() {
          navigate('/about');
        };
        return <button onClick={handleClick}>跳转</button>;
      };
export default function About() {

     useNavigate(()=>{

     });
   
    return (
        <div>
            <NavLink exact to="/about" >联系-</NavLink>
            <NavLink exact to="/about/cul">文化-</NavLink>
            <NavLink exact to="/about/env" >环境</NavLink>
             <MyButton/>
             <Routes>
                <Route  path="/" element={<Connect/>}/>
                <Route  path="/cul" element={<Culture/>}/>
                <Route  path="/env" element={<Env/>}/>
            </Routes> 
          
        </div>
    )
}
