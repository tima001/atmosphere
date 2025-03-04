import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button, Popover } from "antd";
import InputRange from "react-input-range";
import { RadioButton, Circle } from "@phosphor-icons/react";
import SoundPlayer from "./SoundPlayer";

const BackGroundRoundCrc = ({ handleButtonClickRain, sounds, setSounds }) => {
  // const [isTraffic, setIsTraffic] = useState(false);
  // const [volume, setVolume] = useState(0.5);

  const handleButtonClickPlay = (index) => {
    let copyOfSounds = [...sounds];
    let oldSound = {...sounds[index]};
    oldSound.isPlaying = !oldSound.isPlaying;
    copyOfSounds[index] = oldSound;
    setSounds(copyOfSounds);

    if (index === 0)
      handleButtonClickRain();

    console.log(sounds)

  };
  const handleVolumeChange = (index, newVolume) => {
    let copyOfSounds = [...sounds];
    let oldSound = {...sounds[index]};
    oldSound.volume = newVolume;
    copyOfSounds[index] = oldSound;
    setSounds(copyOfSounds);
  };

  const getContent = (index) => {
    return (
      <div>
        <div>
          <h6>{sounds[index].title}</h6>
        </div>
        <input
          type="range"
          onChange={(e) => handleVolumeChange(index, e.target.value)}
          min={0}
          value={sounds[index].volume}
          max={1}
          step={0.1}
        >

        </input>
      </div>
    );
  };

  return (
    <BackGroundRoundCircle>
      {
        sounds.map((sound, index) => {
          return sound.isSeen ? (
              <PopoverAction key={index} style={{ left: sound.left, top: sound.top }}>
                <CustomPopover placement="bottom" content={getContent(index)}>
                  {sound.isPlaying ? (
                      <StyledRadioButton
                          size={42}
                          weight="fill"
                          color="#f3a952"
                          onClick={() => handleButtonClickPlay(index)}
                      />
                  ) : (
                      <StyledCircleButton size={42} onClick={() => handleButtonClickPlay(index)} />
                  )}
                </CustomPopover>
                <SoundPlayer
                    soundSrc={sound.src}
                    isPlaying={sound.isPlaying}
                    volume={sound.volume}
                />
              </PopoverAction>
          ) : <SoundPlayer
              soundSrc={sound.src}
              isPlaying={sound.isPlaying}
              volume={sound.volume}
          />
        })
      }
    </BackGroundRoundCircle>
  );
};

export default BackGroundRoundCrc;

const BackGroundRoundCircle = styled.div`
  height: 100vh !important;
  position: absolute !important;
  width: 100%;
  z-index: 1 !important;
  position: absolute;
  left: 0% !important;
  top: 0% !important;
`;

const PopoverAction = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  width: 200px;
  z-index: 1;
  align-items: center;
  cursor: pointer;
  display: flex;
  position: absolute;
`;

const CustomPopover = styled(Popover)``;
const StyledRadioButton = styled(RadioButton)`
  transition: all 0.3s ease-in-out;
`;

const StyledCircleButton = styled(Circle)`
  transition: all 0.3s ease-in-out;
  color: #fff;

  &:hover {
    color: #f3a952;
  }
`;
