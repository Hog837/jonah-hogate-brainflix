import './Video.scss';
import '../../assets/Data/video-details.json';


function VideoRender({ selectedVideo }) {
    return (
        <section className='video-section'>
            <div className='video'>
            <video className='video__video' poster={selectedVideo.image}></video>
                <h1 className='video__title' >{selectedVideo.title}</h1>
                <div className='video__channel-timestamp' >
                    <h3 className='video__channel' >By {selectedVideo.channel}</h3>
                    <p className='video__timestamp' >{selectedVideo.timestamp}</p>
                </div>
                <div className='video__views-likes' >
                    <p className='video__views' >{selectedVideo.views}</p>
                    <p className='video__likes' >{selectedVideo.likes}</p>
                </div>
                <hr className='video__hr' />
            </div>
            <p className='video__description' >{selectedVideo.description}</p>
        </section>
    );
}

export default VideoRender;