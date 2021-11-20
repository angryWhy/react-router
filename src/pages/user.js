import React,{useState} from 'react'
import {Navigate,Route} from"react-router-dom"
export default function User() {
    const [isLogin] = useState(true)
    return (
        isLogin?
        <div>
            <h2>user</h2>
            <h2>用户</h2>
        </div>:<Route path="/about" element={<Navigate to="/" />}/>
    )
}
