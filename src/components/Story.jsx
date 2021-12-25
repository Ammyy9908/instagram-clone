import { Link } from "react-router-dom";

export default function Story({image,title,titleHidden,active_story,id}){
    return (
        <Link to={`/story/${id}`}><div className={`story ${active_story && "active_story"}`}>
            <img src={image} alt="story-image" />
            {!titleHidden && <h4>{title}</h4>}
        </div></Link>
    )

}