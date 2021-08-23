import './Video.scss';
import '../../assets/Data/video-details.json';
import someDude from '../../assets/Images/Mohan-muruge.jpg';

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
                {/* comments start here */}
                <div className='comments'>
                <p className='comments__length'>{selectedVideo.comments.length} Comments</p>
                <div className='comments__add-comment' >
                    <img className='comments__avitar' src= {someDude} alt=''/>
                    <div className='comments__comment-container' >
                        <p className='comments__join' >JOIN THE CONVERSATION</p>
                        <textarea 
                        className='comments__textarea'
                        placeholder='Write comment here'/>
                        <button className='comments__button' >COMMENT</button>
                    </div>
                </div>
                <hr className='video__hr' />
                {selectedVideo.comments.map( comment =>(
                    <div key={selectedVideo.id}>
                    <div className='comments__comment-comments'>
                        <div className='comments__img'></div>
                    <div className='comments__comment-container'>
                        <div className='comments__name-timestamp' >
                            <p className='comments__name' >{comment.name}</p>
                            <p className='comments__timestamp' >{comment.timestamp}</p>
                        </div>
                        <p className='comments__comment' >{comment.comment}</p>
                    </div>
                    </div>
                    <hr className='video__hr' />
                </div>
                )
                )}
                </div>
        </section>
    );
}

export default VideoRender;