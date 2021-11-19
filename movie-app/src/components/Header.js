import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Header.css'

export const Header = () => {
    return (
        <div>
            <div className="header sticky">
                {/* <div className="menu" onClick={this.menuToggle} style={{ filter: "brightness(0) invert(1)" }}>
                    <img src={Menu} alt="" width="20" />
                </div> */}
                <div className="logo">
                    <h2><Link to="/movies">movie</Link></h2>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/movies">Home</Link></li>
                        <li><Link to="/schedule">Schedule</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
