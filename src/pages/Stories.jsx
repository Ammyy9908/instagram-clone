import React from 'react'
import "./Stories.css"
import {MdArrowLeft, MdArrowRight,MdClear} from "react-icons/md"
import PublicStory from '../components/PublicStory'
import {stories} from "../data/stories"
import { useHistory } from 'react-router-dom'
function Stories({id}) {
    const history = useHistory();
    const [index,setIndex] = React.useState(id-1)
    const [currentStory, setCurrentStory] = React.useState(stories[index]);

    const handleNext = ()=>{
        if(index<stories.length-1){
            setIndex(index+1)
            setCurrentStory(stories[index+1])

        }
        else{
            history.push('/');
        }
    }

    const handlePrev = ()=>{
        if(index>0){
            setIndex(index-1)
            setCurrentStory(stories[index-1])

        }
    }


    const handleClose = ()=>{
        history.push('/');
    }
    return (
        <div className='story_page'>

            <button className="story_close_btn" onClick={handleClose}><MdClear/></button>
            <div className="main-story-wrapper">
                <div className="story-box">
                    {index>0 && <button className='story-left-btn' onClick={handlePrev}><MdArrowLeft/></button>}
                    <PublicStory photo={currentStory.slides[0]} currentStory={currentStory}/>
                    <button className='story-right-btn' onClick={handleNext}><MdArrowRight/></button>
                </div>
            </div>
        </div>
    )
}

export default Stories
