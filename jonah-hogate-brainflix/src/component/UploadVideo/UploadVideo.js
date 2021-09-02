import '../UploadVideo/UploadVideo.scss'
import uploadimg from '../../assets/Images/Upload-video-preview.jpg'
function UploadVideo () {
    return (
        <div className='upload'> 
            <h1 className='upload__upload'>Upload Video</h1>
            <hr/> 
            <div className='upload__video-all'>
                <div className='upload__thumbnail-all'>
                    <p className='upload__thumbnail'>VIDEO THUMBNAIL</p>
                    <div className='upload__img-container'>
                        <img className='upload__img' src={uploadimg} alt=''/>
                    </div>
                </div>
                <div className='upload__title-description' >
                    <p className='upload__title-video'>TITLE YOUR VIDEO</p>
                    <textarea className='upload__title' placeholder='Add a title to your video'></textarea>
                    <p className='upload__title-video-description' >ADD A VIDEO DESCRIPTION</p>
                    <textarea className='upload__description' placeholder='Add a description of your video'></textarea>
                </div>
            </div>
            <hr/>
            <div className='upload__buttons'>
                <button className='upload__publish' >PUBLISH</button>
                <a href='/'>
                <button className='upload__cancel' >CANCEL</button>
                </a>
            </div>
        </div>
    )
}

export default UploadVideo;