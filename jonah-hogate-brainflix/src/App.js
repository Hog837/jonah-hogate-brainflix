import './App.css';
import './App.scss';
// import { Component } from 'react'
import './component/Nav/Nav';
import NavRender from '../src/component/Nav/Nav'
import { Component } from 'react';
import VideoRender from './component/Video/Video';
import videoDetailsData from '../src/assets/Data/video-details.json';
import videoData from '../src/assets/Data/videos.json';
import NextVideo from './component/NextVideo/NextVideo';


class App extends Component {
  state = {
    video: videoData,
    selectedVideo: videoDetailsData[0]
  }

  handleSelectVideo = (clickedId) => {

    const foundVideo = videoData.find((video) => clickedId === video.id);
    
    this.setState({
      selectedVideo: foundVideo,
    })
  }
  
  render() {
    const filteredVideos = this.state.video.filter((video) => video.id !== this.state.selectedVideo.id);

    return (
      <div>
      <NavRender/>
      <VideoRender selectedVideo={this.state.selectedVideo}/>
      <NextVideo video={this.state.video} filteredVideos={this.state.filteredVideos}/>
      </div>
    );
  }
};

export default App;
