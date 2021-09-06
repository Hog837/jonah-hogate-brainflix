import React from 'react';
import NavRender from '../../component/Nav/Nav'
import UploadVideo from '../../component/UploadVideo/UploadVideo';


function UploadPage(props) {
        return(
            <div>
                <NavRender/>
                <UploadVideo history={props.history}/> 
            </div>
        )
    
}

export default UploadPage;