import React from 'react'
import {stories} from "../data/stories"

function PublicStory({photo,currentStory}) {
    

    const [counter, setCounter] = React.useState(100);
   

  // Third Attempts
//   React.useEffect(() => {
//     const timer =
//       counter >0 && setInterval(() => setCounter(counter - 1), 100);
//     return () => clearInterval(timer);
//   }, [counter]);

//   console.log(counter)
    return (
        <div className="story-main">
                        <img src={photo} alt="main-story" className="story-image" />
                        <div className="story-gradient"></div>
                        <div className="story-header">
                            <div className="story-header-author-avatar">
                                <img src={currentStory.owner.avatar} alt="story-author-pic" />
                            </div>
                            <div className="story-meta">
                                <span className='story-username'>{currentStory.owner.name}</span>
                                <span className="story-timestamp">{currentStory.timestamp}</span>
                            </div>
                        </div>

                        {/* <div className="stories-slide-progress">
                            <div className="stories-slides-progress-value" style={{width:`${counter}%`}}></div>
                        </div> */}
                    </div>
    )
}

export default PublicStory
