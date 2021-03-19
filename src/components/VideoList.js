import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props) => {
    return (
        <div className="list-group">
            {props.videos.map((video) => {
                /*if (video.id.channelId) {
                    return <VideoItem key={video.id.channelId} onVideoSelect={props.onVideoSelect}video={video} />
                }
                else*/ if (video.id.videoId) {
                    return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect}video={video} />

                }
            })}
        </div>
    )
}

export default VideoList