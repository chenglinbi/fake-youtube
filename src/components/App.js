import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/Youtube'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    componentDidMount() {
        this.onTermSubmit('Youtube News')
    }
    onTermSubmit = async (term) => {
         const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        console.log(JSON.stringify(response.data.items))
        this.setState({
            videos: response.data.items.filter((video) => video.id.videoId),
            selectedVideo: response.data.items.filter((video) => video.id.videoId)[0]
        })
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
        //console.log('current video: ', video)
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-5 d-flex flex-row">
                            <i style={{color:'red', fontSize:'30px'}} class="material-icons">smart_display</i>
                            <SearchBar onFormSubmit={this.onTermSubmit} />
                        </div>
                        <div className="col-5 d-flex flex-row-reverse">
                            <i style={{fontSize:'30px'}} class="material-icons">account_circle</i>
                            <i style={{fontSize:'30px'}} class="material-icons">notifications</i>
                            <i style={{fontSize:'30px'}} class="material-icons">chat_bubble</i>
                            <i style={{fontSize:'30px'}} class="material-icons">apps</i>
                            <i style={{fontSize:'30px'}} class="material-icons">videocam</i>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col'>
                            {this.state.videos.length} videos.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="col-3">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App