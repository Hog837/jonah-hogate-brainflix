import './Video.scss';
import '../../assets/Data/video-details.json'


function VideoRender({ selectedVideo }) {
    return (
        <section className='video-rendered'>
            <>
            <video poster={selectedVideo.image}></video>
                <h1>{selectedVideo.title}</h1>
                <h3>{selectedVideo.channel}</h3>
                <p>{selectedVideo.timestamp}</p>
                <p>{selectedVideo.views}</p>
                <p>{selectedVideo.likes}</p>
                <hr/>
                <p>{selectedVideo.description}</p>

                <p>{selectedVideo.comments.length} Comments</p>
                <p>JOIN THE CONVERSATION</p>
                <img src='../../assets/Images/Mohan-muruge.jpg' alt=''/>
                <textarea placeholder='Write comment here'/>
                <button>Comments</button>
                <hr/>
                <div>
                    <p>{selectedVideo.comments.name}</p>
                    <p>{selectedVideo.comments.timestamp}</p>
                    <p>{selectedVideo.comments.comment}</p>
                </div>
            </>
        </section>
    );
}

export default VideoRender;