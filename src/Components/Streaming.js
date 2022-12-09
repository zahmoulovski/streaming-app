import React from "react";

const Streaming = ({code})=>(
  <div className="video-responsive">
    <iframe src={`https://sblongvu.com/e/${code}.html`} width="100%" height="80%" allowFullScreen/>
  </div>
);

export default Streaming;