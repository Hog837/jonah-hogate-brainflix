import './Video.scss';
import '../../App';

function VideoRender({ selectedVideo }) {
    return (
        <>
            <div className='video'>
                <div className="video__video-background">
                    <video className='video__video' controls={'default'} poster={selectedVideo.image}/>
                </div>
                <h1 className='video__title' >{selectedVideo.title}</h1>
                <div className='video__top-container'>
                    <div className='video__channel-timestamp' >
                        <h3 className='video__channel' >By {selectedVideo.channel}</h3>
                        <p className='video__timestamp' >{selectedVideo.timestamp}</p>
                    </div>
                    <div className='video__views-likes' >
                        <p className='video__views' >{selectedVideo.views}</p>
                        <p className='video__likes' >{selectedVideo.likes}</p>
                    </div>
                </div>
                <hr className='video__hr' />
            </div>
            <p className='video__description' >{selectedVideo.description}</p>
        </>
    );
}

export default VideoRender;