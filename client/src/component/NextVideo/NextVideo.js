import React from "react";
import "./NextVideo.scss";
import "../../App";
import { Link } from "react-router-dom";

function NextVideo(props) {
  return (
    <div className="next">
      <p className="next__title">NEXT VIDEO</p>
      {props.filteredVideos.map((video) => (
        <Link key={video.id} className="next__link" to={`/video/${video.id}`}>
          <div className="next__container">
            <div className="next__video-container">
              <img className="next__img" src={video.image} alt="" />
            </div>
            <div className="next__title-channel">
              <p className="next__video-title">{video.title}</p>
              <p className="next__video-channel">{video.channel}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default NextVideo;