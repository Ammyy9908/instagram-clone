import React from 'react'
import "./Auth.css"
import image from "../assets/instaImage.png"
import logo from "../assets/insta__logo.svg"
import { Link } from 'react-router-dom'

function InputField({name,placeholder,value,setValue,type,id}){
    return <div className="custom-field">
            <input type="text" name={name} id={id} placeholder={placeholder} value={value} onChage={(e)=>setValue(e.target.value)}/>
    </div>
}
function Auth() {

    const [username,setUsername] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    return (
        <div className='auth-page'>
            <div className="auth-page-wrapper">
                <div className="auth-image">
                        <img src={image} alt="" />
                </div>

                <div className="auth-form">
                    <div className="auth-form-wrapper">
                       <div className="app__logo">
                       <img src={logo} alt="logo"/>
                       </div>
                    

                    <div className="form-fields">
                        <InputField name="email" placeholder="Phone Number,Username,or Email" value={email} setValue={setEmail}/>
                        <InputField name="email" placeholder="Password" value={password} setValue={setPassword}/>
                    </div>

                    <button className="auth_btn">Login</button>
                    <p className="hr">OR</p>
                    <a href="#" className="forgot_password">Forgot Password ?</a>

                    <div className="auth-switcher">
                        <Link to="/auth/reg">Don't have and account? Sign Up</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
