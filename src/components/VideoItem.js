import React from 'react'
import '../styles/VideoItem.css'

const VideoItem = (props) => {
    return (
        <div onClick={() => {props.onVideoSelect(props.video)}} className="list-group-item">
            <img className="img-thumbnail" src={props.video.snippet.thumbnails.medium.url} alt="thumbnail medium" />
                <div className="">
                    <div className="">
                        {props.video.snippet.title}
                    </div>
                </div>
        </div>
    )
}

export default VideoItem