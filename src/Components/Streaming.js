import React from "react";

const Streaming = ({code})=>(
  <div className="video-responsive">
    <iframe src={`https://sblongvu.com/e/${code}.html`} width="100%" height="80%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
  </div>
);

export default Streaming;