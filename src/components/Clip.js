import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";

const Clip = ({ url, visible }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [url]);

  return (
    <VideoWrapper style={{
      transition: 'opacity .5s ease-in-out',
      opacity: visible ? 1 : 0,
    }}>
      <video ref={videoRef} preload="auto" autoPlay loop playsInline muted>
        <source src={url} />
      </video>
    </VideoWrapper>
  );
};

export default Clip;

const VideoWrapper = styled.div`
  position: absolute;
`;
