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
        .get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=4700a325-3285-437e-934a-f2d1334a37ec`
        )
        .then((response) => {
        this.setState({
            selectedVideo: response.data,
        });
        });
    };

    componentDidMount() {
    axios
        .get(
        "https://project-2-api.herokuapp.com/videos?api_key=4700a325-3285-437e-934a-f2d1334a37ec"
        )
        .then((response) => {
        this.setState({
            videos: response.data,
        });
        this.getSelectedVideo(response.data[0].id);
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
            <NextVideo video={this.state.selectedVideo} filteredVideos={this.filteredVideos()}
            />
        )
        </div>
    );
    }
}

export default HomePage;
