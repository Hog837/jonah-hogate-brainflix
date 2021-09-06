import React from "react";
import NavRender from "../../component/Nav/Nav.js";
import VideoRender from "../../component/Video/Video.js";
import NextVideo from "../../component/NextVideo/NextVideo.js";
import Comments from "../../component/Comments/Comments.js";
import axios from "axios";

class HomePage extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    };
    getSelectedVideo = (videoId) => {
        axios
            .get(`http://localhost:8080/videos/${videoId}`)
            .then(videoData => {
                console.log('Video Data: ', videoData);
                this.setState({
                selectedVideo: videoData.data
            });
        });
    };
    componentDidMount() {
        axios
            .get("http://localhost:8080/videos")
            .then(videoData => {
                console.log('Video Data: ', videoData);
                this.setState({
                    videos: videoData.data,
                });
            this.getSelectedVideo(videoData.data[0].id);
        }); 
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getSelectedVideo(this.props.match.params.id);
        } 
    }
    filteredVideos = () => {
        return this.state.videos.filter(
            (video) => video.id !== this.state.selectedVideo.id
        );
    };
    render() {
        if (!this.state.selectedVideo) {
            return <div>loading...</div>;
    }
    return (
        <div>
            <NavRender />
            <VideoRender selectedVideo={this.state.selectedVideo} />
            <Comments selectedVideo={this.state.selectedVideo} />
            <NextVideo video={this.state.selectedVideo} filteredVideos={this.filteredVideos()}/>
        </div>
    );
    }
}

export default HomePage;
