import React from 'react'
import Profile from '../components/Profile'
import Sidebar from '../components/Sidebar'
import logo from "../assets/instagram_logo.svg"
import search_icon from "../assets/search_icon.svg"
import "./Home.css"
import {posts} from '../data/posts'
import PostCard from '../components/PostCard'
import BlankPostCard from '../components/BlankPostCard'
import Logo from '../assets/Logo'
import Story from '../components/Story'
import {stories} from "../data/stories"
function Home() {

    console.log(posts)

    const [rendered,setRendered] = React.useState(false);
    

    // React.useEffect(()=>{
    //     setTimeout(() => {
    //             setRendered(true);
    //     }, 5000);
    // },[])
    return (
        <div className="main-page">
            <Sidebar active="home"/>
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

                <div className="public_stories_wrapper">
                
                       
                       

                        {
                            stories.map((s,index)=>{
                                return  <Story image={s.owner.avatar} titleHidden={true} active_story={true} id={s.id} key={index}/>
                            })
                        }
                </div>

                <div className="posts_wrapper">
                    
                    {
                        posts.map((post,i)=>{
                            return <PostCard key={post.id} author={post.author} image={post.photo} location={post.location} comments={post.comments} likes={post.likes} id={post.id} timestamp={post.timestamp}/>
                        })
                    }
                    {/* {!rendered && <><BlankPostCard/>
                    <BlankPostCard/>
                    <BlankPostCard/>
                    <BlankPostCard/>
                    <BlankPostCard/>
                    <BlankPostCard/>
                    <BlankPostCard/>
                    <BlankPostCard/>
                    <BlankPostCard/>
                    </>} */}
                </div>
            </div>
            <Profile/>
        </div>
    )
}

export default Home
