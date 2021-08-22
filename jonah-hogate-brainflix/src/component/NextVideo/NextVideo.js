import React from 'react'
import '../../assets/Data/videos.json'



export default function NextVideo({ video }) {
    return (
        <div>
            {video.map( video =>(
                <div key={video.id}>
                    <image src={video.image} alt=''/>
                    <p>{video.title}</p>
                    <p>{video.channel}</p>
                    <hr/>
                </div>
                )
                )}
        </div>
    )
}
