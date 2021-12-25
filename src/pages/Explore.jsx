import React from 'react'
import Profile from '../components/Profile'
import Sidebar from '../components/Sidebar'
import search_icon from "../assets/search_icon.svg"
import "./Explore.css"
import Logo from '../assets/Logo'
function Explore() {
    return (
        <div className="main-page">
            <Sidebar active="explore"/>
            <div className="body">
                <div className="body-nav">
                    <div className="body-nav-wrapper">
                        <a href="#">
                            <Logo/>
                        </a>

                        <div className="searchbar">
                            <img src={search_icon} alt="" />
                            <input type="text" name="key" id="key" placeholder='Search'/>
                        </div>
                    </div>
                </div>

                <div className="explore_wrapper">
                    <h1>Explore Comes Here</h1>
                </div>
            </div>
            <Profile/>
        </div>
    )
}

export default Explore
