import React from 'react'
import "./Profile.css"
import bell_icon from "../assets/bell_icon.svg"
import {MdPlayArrow} from "react-icons/md"
import Story from './Story'

function Profile() {
    return (
        <div className='profile'>
            <div className="profile-header">
                    <button>
                        <img src={bell_icon} alt="" />
                    </button>
            </div>

            <div className="profile_body">
                <div className="user-profile">
                        <div className="user-avatar">
                            <img src="https://scontent.fblr5-1.fna.fbcdn.net/v/t39.30808-6/265391722_1394416951003792_8634413253033656272_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3RHOAJcxy70AX_f-p8v&tn=cS7x5Fh8LtrSTDYY&_nc_ht=scontent.fblr5-1.fna&oh=00_AT_bbukUOpQNfD1RcHTnVfD3fGUbXn-LqNv51fwtGJsOJg&oe=61CA3561" alt="" />
                        </div>
                        <h3>sumitbighaniya</h3>
                        <span>FullStack Web Developer</span>
                        <button className="profile_edit_btn">Edit</button>
                        <div className="user-profile-meta">
                            <span className='meta-info'>
                                <h5>98</h5>
                                <p>Posts</p>
                            </span>
                            <span className='meta-info'>
                                <h5>3.5k</h5>
                                <p>Followers</p>
                            </span>
                            <span className='meta-info'>
                                <h5>900</h5>
                                <p>Followings</p>
                            </span>
                        </div>
                </div>

                <div className="user-textual-data">
                    <h4>Sumit Bighaniya</h4>
                    <p>My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks that have the potential to capture the attention while making a very positive first impression on the visitor..</p>
                    <a href="www.sumit.engineer">www.sumit.engineer</a>
                </div>

                <div className="stories_body">
                    <h3>Your Stories</h3>
                    <div className="stories">
                        <Story image="https://images.unsplash.com/photo-1533149335914-0a955b468338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80" title="Featured" />
                        <Story image="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" title="India" />
                        <Story image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" title="Paris" />
                        <Story image="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" title="Food" />
                        <Story image="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" title="Hooman 🐶" />
                        <Story image="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80" title="Travel" />
                        <div className="play-all_btn_wrapper">
                        <button className="play_all_btn">
                            <MdPlayArrow/>
                        </button>
                        <span>Play All</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <button className="new_post_btn">Create Post</button>
        </div>
    )
}

export default Profile
