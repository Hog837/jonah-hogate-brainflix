import './Comments.scss';
import '../../assets/Data/video-details.json';
import someDude from "../../assets/Images/Mohan-muruge.jpg";

function Comments({ selectedVideo }) {
    return (
    /* comments start here */
    <div className="comments">
    <p className="comments__length"> {selectedVideo.comments.length} Comments </p>
    <div className="comments__add-comment">
        <img className="comments__avitar" src={someDude} alt="" />
        <div className="comments__comment-container">
        
        <p className="comments__join">JOIN THE CONVERSATION</p>
        <div className='comments__textarea-button'>
        <textarea
            className="comments__textarea"
            placeholder="Write comment here"
        />
        
        <button className="comments__button">COMMENT</button>
        </div>
        </div>
    </div>
    <hr className="video__hr" />
    {selectedVideo.comments.map((comment) => (
        <div key={selectedVideo.id}>
        <div className="comments__comment-comments">
            <div className="comments__img"></div>
                <div className="comments__comment-container">
            <div className="comments__name-timestamp">
                <p className="comments__name">{comment.name}</p>
                <p className="comments__timestamp">{comment.timestamp}</p>
            </div>
            <p className="comments__comment">{comment.comment}</p>
        </div>
        </div>
            <hr className="video__hr" />
        </div>
    ))}
    </div>
    )
}
export default Comments;
