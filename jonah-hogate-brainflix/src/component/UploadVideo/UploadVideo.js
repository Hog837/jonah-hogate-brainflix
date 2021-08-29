import '../UploadVideo/UploadVideo.scss'
import uploadimg from '../../assets/Images/Upload-video-preview.jpg'
function UploadVideo () {
    return (
        <div className='upload'>
            <h1>Upload Video</h1>
            <hr/>
                <div className='upload__img-container'>
                        <img className='upload__img' src={uploadimg} alt=''></img>
                </div>
                <div className='upload__title-description' >
                    <textarea className='upload__title'>Add a title to your video</textarea>
                    <textarea className='upload__description'>Add a description of your video</textarea>
                </div>
                <hr/>
            </div>
    )
}

export default UploadVideo;