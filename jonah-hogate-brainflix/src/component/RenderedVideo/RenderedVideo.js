import './RenderedVideo.scss';
import RenderVideo from '../Video'


function RenderedVideo({videos, selectVideo}) {
    return (
        <div>
            {videos.map((video) => (
                <RenderVideo key={video.id} video={video} selectVideo={selectVideo}/>
        
            ))}
        </div>
    )
}

export default RenderedVideo;