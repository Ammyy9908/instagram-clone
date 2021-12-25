import React from 'react'
import "./Sidebar.css"
import home_icon from "../assets/home_icon.svg"
import chat_icon from "../assets/chat_icon.svg"
import explore_icon from "../assets/explore_icon.svg"
import heart_icon from "../assets/heart_icon.svg"
import reels_icon from "../assets/reels_icon.svg"
import igtv_icon from "../assets/igtv_icon.svg"
import bookmark_icon from "../assets/bookmark_icon.svg"
import gear_icon from "../assets/gear_icon.svg"
import { Link } from 'react-router-dom'

function Sidebar({active}) {
    return (
        <div className='sidebar'>
            <div className="sidebar_wrapper">
            <div className="sidebar-options">
                <Link to="/" className={active =="home" && 'home__active'}>
                    <img src={home_icon} alt="" />
                </Link>
                <Link to="/chats" className={active =="chats" && 'chats__active'}>
                    <img src={chat_icon} alt="" />
                </Link>
                <Link to="/explore" className={active =="explore" && 'explore__active'}>
                    <img src={explore_icon} alt="" />
                </Link>
                <Link to="/likes" className={active =="likes" && 'likes__active'}>
                    <img src={heart_icon} alt="" />
                </Link>
                <a href="#">
                    <img src={reels_icon} alt="" />
                </a>
                <a href="#">
                    <img src={igtv_icon} alt="" />
                </a>
                <Link to="/bookmark" className={active =="bookmarks" && 'bookmarks__active'}>
                    <img src={bookmark_icon} alt="" />
                </Link>
            </div>
            <div className="sidebar-footer">
                <button>
                    <img src={gear_icon} alt="gear-icon" />
                </button>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
