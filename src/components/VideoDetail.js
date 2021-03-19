import React from 'react'

const VideoDetail = (props) => {
    if (props.video) {
        const videoSrc = `https://youtube.com/embed/${props.video.id.videoId}`
        return (
            <div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" title="videoPlayer" src={videoSrc} />
                </div>
                <div className="">
                    <h4 className="">{props.video.snippet.title}</h4>
                    <p>{props.video.snippet.description}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                No Video selected, Google's Youtube Data API v3 could be down.
            </div>
        )
    }
}

export default VideoDetail