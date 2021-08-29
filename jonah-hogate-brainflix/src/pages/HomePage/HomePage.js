import './HomePage.scss'
import React from 'react'
import './component/Nav/Nav';
import NavRender from '../../component/Nav/Nav'
import VideoRender from '../../component/Video/Video';
import NextVideo from '../../component/NextVideo/NextVideo';
import Comments from '../../component/Comments/Comments';
import axios from 'axios';


class HomePage extends React.Component {
    state = {
    videos: [],
    selectedVideo: null,
    }

    getSelectedVideo = (videoId) => {
    axios
        .get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=123`)
        .then((response) => {
            this.setState({
                selectedVideo: response.data,
            });
        });
};

componentDidUpdate(prevProps) {
    if (
        prevProps.match.params.videoId !== this.props.match.params.videoId
    ) {
        this.getSelectedVideo(this.props.match.params.videoId);
    }
}

    componentDidMount() {
    axios
        .get(`https://project-2-api.herokuapp.com/videos?api_key=123`)
        .then((response) => {
            this.state({
            videos: response.data
            });
            const videoId = 
            this.props.match.params.videoId || response.data[0].id;

        this.getSelectedVideo(videoId);
    });
}

    render() {
        return (
            <div>
                <NavRender/>
                <VideoRender selectedVideo={this.state.selectedVideo}/>
                <Comments selectedVideo={this.state.selectedVideo}/>
                    {this.state.selectedVideo && (
                    <NextVideo video={this.state.selectedVideo} filteredVideos={this.handleSelectVideo}/>
                )}
            </div>
        );
    }
};

export default HomePage;