import React, { useEffect, useRef, useState } from "react";
import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
  SpeakerSimpleHigh,
} from "@phosphor-icons/react";
import styled from "@emotion/styled";

const musicList = [
  "/assets/musics/04 Constellations feat Softy.mp3",
  "/assets/musics/11 Leaving Home w Slowheal_MASTER.mp3",
  "/assets/musics/Abricot - Dear Child.mp3",
  "/assets/musics/Alto - Light Steps.mp3",
  "/assets/musics/Burning Sun.mp3",
  "/assets/musics/Endless - RdBeats x Gerardo Millan.mp3",
  "/assets/musics/gerardo millan + enoch - wherever i go (1).mp3",
  "/assets/musics/Late Night Tones - Warm December.mp3",
  "/assets/musics/let me know.mp3",
  "/assets/musics/Lucid Keys - Fountains (1).mp3",
  "/assets/musics/Neele Harder - Late Afternoon Clouds (master).mp3",
  "/assets/musics/Rain in July.mp3",
  "/assets/musics/Shimmer.mp3",
  "/assets/musics/Steve Nguyen - Astral Sea.mp3",
  "/assets/musics/View From The Hill - Sheath & KASE.mp3",
  "/assets/musics/Vortex.mp3",
];

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? musicList.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % musicList.length;
      return newIndex;
    });
  };

  const handleVolumeChange = (event) => {
    const volume = event.target.value;
    audioRef.current.volume = volume;
  };

  const handleSpeakerClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const selectedMusic = musicList[currentTrackIndex];
    audioRef.current.src = selectedMusic;
  }, [currentTrackIndex]);

  return (
    <div>
      <AudioWrapper showModal={showModal}>
        <SkipBack
          size={18}
          style={{ cursor: "pointer" }}
          weight="fill"
          color="white"
          onClick={handlePrev}
        >
          Prev
        </SkipBack>
        <PlayerButton
          size={18}
          style={{ cursor: "pointer" }}
          weight="fill"
          color="white"
          onClick={handlePlay}
        >
          {isPlaying ? (
            <Pause
              size={18}
              style={{ cursor: "pointer" }}
              weight="fill"
              color="white"
            />
          ) : (
            <Play
              weight="fill"
              color="white"
              size={18}
              style={{ cursor: "pointer" }}
            />
          )}
        </PlayerButton>
        <SkipForward
          size={18}
          style={{ cursor: "pointer" }}
          weight="fill"
          color="white"
          onClick={handleNext}
        >
          Next
        </SkipForward>
        <SpeakerSimpleHigh
          weight="fill"
          color="white"
          size={18}
          style={{ cursor: "pointer" }}
          onClick={showModal ? handleModalClose : handleSpeakerClick}
        />

        <audio ref={audioRef} autoPlay />
      </AudioWrapper>

      {showModal && (
        <Modal>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            onChange={handleVolumeChange}
          />
        </Modal>
      )}
    </div>
  );
};

export default AudioPlayer;

const AudioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
  gap: 12px;
  align-items: center;
  background: hsla(0, 0%, 7%, 0.75);
  padding: 4px 12px;
  border-radius: ${(props) => (props.showModal ? "8px 8px 0 0" : "8px")};
`;

const PlayerButton = styled.div`
  width: 18px;
  height: 18px;
  margin: 0;
  padding: 0;
`;

const Modal = styled.div`
  position: absolute;
  background: hsla(0, 0%, 7%, 0.75);
  border-radius: 0 0 8px 8px;
  align-items: center;
`;
