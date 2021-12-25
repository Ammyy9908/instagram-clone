import React from 'react'
import "./BlankPostCard.css"
function BlankPostCard() {
    return (
        <div className='blank-card'>
            <div className="blank-post-card-wrapper">
                <div className="blank-post-card-header">
                    <div className="blank-post-author">
                        <div className="blank-post-author-avatar">
                            
                        </div>
                        <div className="blank-post-author-meta">
                            <h2></h2>
                            <span className="blank-post-location"></span>
                        </div>
                    </div>

                    <button className="blank-more_btn">
                    </button>
                </div>
                <div className="blank-post_image_wrapper">
                  
                </div>
                <div className="blank-post-controls">
                    <div className="blank-post-controls-left">
                        <button>
                            
                        </button>
                        <button>
                            
                        </button>
                        <button>
                            
                        </button>
                    </div>
                    <div className="blank-post-controls-right">
                        <button>
                           
                        </button>
                    </div>
                </div>
                <div className="blank-post-liked-by">
                    <span></span>
                </div>
                <div className="blank-post-last-comment">
                    <span></span>
                </div>
                <span className="blank-post-timestamp">
               
                </span>
            </div>
        </div>
    )
}

export default BlankPostCard
