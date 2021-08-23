import React from 'react'
import './NextVideo.scss'
import '../../assets/Data/videos.json'



export default function NextVideo({ video }) {
    return (
        <div className='next'>
            <p className='next__title'>NEXT VIDEO</p>
            {video.map( video =>(
                <div key={video.id}>
                    <div className='next__container' >
                        <div className='next__video-container'>
                        <img className='next__img' src={video.image} alt=''></img>
                        </div>
                        <div className='next__title-channel' >
                            <p className='next__video-title' >{video.title}</p>
                            <p className='next__video-channel'>{video.channel}</p>
                    </div>
                    </div>
                </div>
                )
                )}
        </div>
    )
}
