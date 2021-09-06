import '../UploadVideo/UploadVideo.scss'
import uploadimg from '../../assets/Images/Upload-video-preview.jpg'
import axios from 'axios';

function UploadVideo (props) {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log(props.history);

        axios({
            method: 'POST',
            url: 'http://localhost:8080/videos',
            data: {
                title: event.target.title.value,
                description: event.target.description.value
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) =>{
                console.log(response);
                alert('Video published');
                props.history.push("/")
            }, (error) => {
                console.log(error);
            })
        
        

    }
    return (
        <form className='upload' onSubmit={(e) => {onSubmitHandler(e)}}> 
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
                    <textarea id='title' className='upload__title' placeholder='Add a title to your video'></textarea>
                    <p className='upload__title-video-description' >ADD A VIDEO DESCRIPTION</p>
                    <textarea id='description' className='upload__description' placeholder='Add a description of your video'></textarea>
                </div>
            </div>
            <hr/>
            <div className='upload__buttons'>
                <a href='/'>
                <button type='submit' className='upload__publish' >PUBLISH</button>
                </a>
                <a href='/'>
                <button className='upload__cancel' >CANCEL</button>
                </a>
                
            </div>
        </form>
    )
}

export default UploadVideo;