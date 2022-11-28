import React from "react";

const Streaming = ({code})=>(
  <div className="video-responsive">
    <iframe src={`https://sblongvu.com/e/${code}.html`} FRAMEBORDER="0" MARGINWIDTH="0" MARGINHEIGHT="0" SCROLLING="NO" WIDTH="640" HEIGHT="360" allowFullScreen/>
  </div>
);

export default Streaming;