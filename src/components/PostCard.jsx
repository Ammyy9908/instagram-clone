import React from 'react'
import "./PostCard.css"
import more_icon from "../assets/more_icon.svg"
import heart from "../assets/heart.svg"
import comment from "../assets/comment.svg"
import send from "../assets/send.svg"
import BookMarkIcon from "../assets/BookMarkIcon"
import HeartIcon from "../assets/HeartIcon"
import { connect } from 'react-redux'
import { addBookmark, addToLikes, removeBookmark, removeFromLikes } from '../redux/actions/_appAction'
function PostCard({author,image,likes,comments,timestamp,location,addToLikes,liked_posts,id,removeFromLikes,addBookmark,removeBookmark,bookmarks}) {
    console.log(id)
    const [liked, setLiked] = React.useState(false);
    const [bookmarked, setBookMark] = React.useState(false);
    const [total_likes,setTotalLikes] = React.useState(likes)

    console.log(liked_posts)
    const index = liked_posts.findIndex(post=>+post.id===+id)
    const bookmarkIndex = bookmarks.findIndex(post=>+post.id===+id)

    console.log(index)



    const handleLikes = ()=>{
        addToLikes({id,author,image,likes,comments,timestamp,location});
        setLiked(true);
    }

    const handleDislike = ()=>{
        removeFromLikes(id);
        setLiked(false);
    }

    const handleBookmarkAdd = ()=>{
        addBookmark({id,author,image,likes,comments,timestamp,location});
    }

    const handleRemoveBookmark = ()=>{
        removeBookmark(id);
    }

    return (
        <div className='post-card'>
            <div className="post-card-wrapper">
                <div className="post-card-header">
                    <div className="post-author">
                        <div className="post-author-avatar">
                            <img src={author.avatar} alt="author_avatar" />
                        </div>
                        <div className="post-author-meta">
                            <h2>{author && author.name}</h2>
                            <span className="post-location">{location}</span>
                        </div>
                    </div>

                    <button className="more_btn">
                        <img src={more_icon} alt="more-icon" />
                    </button>
                </div>
                <div className="post_image_wrapper">
                    <img src={image} alt="post_thumb" loading='lazy'/>
                </div>
                <div className="post-controls">
                    <div className="post-controls-left">
                        <button onClick={index>=0?handleDislike:handleLikes}>
                            <HeartIcon liked={liked || index>=0}/>
                        </button>
                        <button>
                            <img src={comment} alt="comment-icon" />
                        </button>
                        <button>
                            <img src={send} alt="send-icon" />
                        </button>
                    </div>
                    <div className="post-controls-right">
                        <button onClick={bookmarkIndex>=0?handleRemoveBookmark:handleBookmarkAdd}>
                            <BookMarkIcon bookmarked={bookmarked || bookmarkIndex>=0}/>
                        </button>
                    </div>
                </div>
                <div className="post-liked-by">
                    <span>Liked by <strong>{index>=0?"You and "+total_likes+" others":total_likes}</strong></span>
                </div>
                <div className="post-last-comment">
                    <span>{comments[0]}</span>
                </div>
                <span className="post-timestamp">
                {timestamp}
                </span>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addToLikes:(post)=> dispatch(addToLikes(post)),
    removeFromLikes:(id)=> dispatch(removeFromLikes(id)),
    addBookmark:(post)=> dispatch(addBookmark(post)),
    removeBookmark:(id)=> dispatch(removeBookmark(id))
})


const mapStateToProps = state => ({
    liked_posts:state.appReducer.likes,
    bookmarks:state.appReducer.bookmarks
})
export default connect(mapStateToProps,mapDispatchToProps)(PostCard)
