import React from 'react'
import './NextVideo.scss'
import '../../App'



function NextVideo(props) {
    return (
        <div className='next'>
            <p className='next__title'>NEXT VIDEO</p>
            <div className='next__container' >
                <div className='next__video-container'>
                        <img className='next__img' src={props.image} alt=''></img>
                </div>
                    <div className='next__title-channel' >
                        <p className='next__video-title' >{props.title}</p>
                        <p className='next__video-channel'>{props.channel}</p>
                    </div>
                </div>
            </div>
    )
}

export default NextVideo
