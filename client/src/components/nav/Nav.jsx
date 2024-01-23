import React from 'react'
import "./nav.css"
import p1 from "../../Assets/Rectangle10.png"


const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav-left">
           <h3> Good Morning ! 🌞</h3>
        </div>
        <div className="nav-right">
            <div className="profile">
                <div className="name">
                    <p>John Deo</p>
                    <p>johndeo@g.com</p>
                </div>
                <div className="profile-pic">
                    {/* <img src={p1} alt="" /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav