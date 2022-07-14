import React from 'react'
import { Link } from "react-router-dom"

function Navbar({ user }) {

  const logout =() =>{
    window.open("http://localhost:5032/auth/logout", "_self")
  }
  return (
    <div className='navbar'>
      <span className='logo'>
        <Link className='link' to="/">Japa APP</Link>
      </span>{
        user ? (


          <ul className='list'>
            <li className="listItem">
              <img src="https://i.pinimg.com/564x/f8/89/6b/f8896beae3eca03331637a77ebbac018.jpg" alt="" className="avatar" />
            </li>
            <li className="listItem">Japa2430</li>
            <li className="listItem" onClick={logout}>Logout</li>
          </ul>
        ) : (<Link className="link" to="/login">Login</Link>)}
    </div>
  )
}

export default Navbar