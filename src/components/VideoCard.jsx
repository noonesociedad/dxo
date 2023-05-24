import React from "react";
import { Col } from "react-bootstrap";

const VideoCard = ({ title, description, videoUrl }) => {
  // Extract the video ID from the YouTube URL
  const videoId = videoUrl.split("v=")[1];

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default VideoCard;
