import React from 'react'

const VideoDetail = (props) => {
    if (props.video) {
        const videoSrc = `https://youtube.com/embed/${props.video.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                    <iframe title="videoPlayer" src={videoSrc} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{props.video.snippet.title}</h4>
                    <p>{props.video.snippet.description}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                No Video selected
            </div>
        )
    }
}

export default VideoDetail