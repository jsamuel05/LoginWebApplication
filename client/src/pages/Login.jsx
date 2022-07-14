import React from 'react'
import Google from "../img/google.png"
import Facebook from "../img/facebook.png"
import Steam from "../img/steam.png"

function Login() {

    const google = () => {
        window.open("http://localhost:5032/auth/google", "_self")
    }

    return (
        <div className='login'>
            <h1 className="loginTitle">Choose a login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src={Steam} alt="" className="icon" />
                        Steam
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <button className='submit'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login