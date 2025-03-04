import React, { useRef, useEffect } from "react";

const SoundPlayer = ({ soundSrc, isPlaying, volume }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.src = soundSrc;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  return <audio ref={audioRef} loop />;
};

export default SoundPlayer;
