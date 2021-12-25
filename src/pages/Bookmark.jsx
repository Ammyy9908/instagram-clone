import React from 'react'
import Profile from '../components/Profile'
import Sidebar from '../components/Sidebar'
import search_icon from "../assets/search_icon.svg"
import "./Bookmark.css"
import Logo from '../assets/Logo'
import { connect } from 'react-redux'
import PostCard from '../components/PostCard'
function BookMark({bookmarks}) {
    return (
        <div className="main-page">
            <Sidebar active="bookmarks"/>
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

                <div className="bookmark_wrapper">
                    {
                        bookmarks.map((post)=>{
                            return <PostCard key={post.id} author={post.author} image={post.image} location={post.location} comments={post.comments} likes={post.likes} isLiked={true} id={post.id}/>
                        })
                    }
                </div>
            </div>
            <Profile/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    bookmarks: state.appReducer.bookmarks
})

export default connect(mapStateToProps,null)(BookMark)
