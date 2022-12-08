import React from "react";

const Streaming = ({code})=>(
  <div className="video-responsive">
    <iframe src={`https://sblongvu.com/e/${code}.html`}   WIDTH="100%" HEIGHT="100vh" allowFullScreen/>
  </div>
);

export default Streaming;