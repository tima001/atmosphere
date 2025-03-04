
import React, {useState} from "react";
import Draggable from "react-draggable";
import styled from "@emotion/styled";
import SoundPlayer from "./SoundPlayer";
import {Car, Minus} from "@phosphor-icons/react";

const DraggableVoicesWidget = ({
                                   showAdditionalContent,
                                   handleLeftInterfaceClick,
                                   sounds,
                                   setSounds,
                                   handleButtonClickRain
                               }) => {

    const handleVolumeChange = (index, newVolume) => {
        let copyOfSounds = [...sounds];
        let oldSound = {...sounds[index]};
        oldSound.volume = newVolume;
        oldSound.isPlaying = true;
        copyOfSounds[index] = oldSound;
        setSounds(copyOfSounds);

        if (index === 0 && !sounds[0].isPlaying) handleButtonClickRain();
    };

    return (<div>
            {showAdditionalContent && (<DraggableContent>
                    <Draggable handle=".handle">
                        <DraggableContentWrapper className="no-cursor">
                            <div className="cursor handle"
                                 style={{width: " 100%", height: '12px', display: 'flex', justifyContent: 'flex-end'}}>
                                <Minus size={24}
                                       color='white'
                                       onClick={handleLeftInterfaceClick}
                                       style={{
                                           cursor: 'pointer', margin: '6px 12px ', position: 'absolute', top: '-4px'
                                       }}/></div>
                            <MusicWrapper className="container">
                                <DraggableContentTitle> Все звуки</DraggableContentTitle>
                                <SoundWrapper>
                                    {
                                        sounds.map((sound, index) => {
                                            return (
                                                <>

                                                    <SoundText>{sound.title}</SoundText>
                                                    <div>
                                                        <SoundInput
                                                            type="range"
                                                            // onClick={handleButtonClickTraffic}
                                                            onChange={(e) => handleVolumeChange(index, parseFloat(e.target.value))}
                                                            min={0}
                                                            value={sound.volume}
                                                            max={1}
                                                            step={0.1}
                                                        ></SoundInput>

                                                        <SoundPlayer
                                                            soundSrc={sound.src}
                                                            isPlaying={sound.isPlaying}
                                                            volume={sound.volume}
                                                        />
                                                    </div>
                                                </>)
                                        })}
                                </SoundWrapper>
                            </MusicWrapper>

                        </DraggableContentWrapper>
                    </Draggable>
                </DraggableContent>

            )}
        </div>


    )
};

export default DraggableVoicesWidget;

const DraggableContentWrapper = styled.div`
  backdrop-filter: blur(30px);
  background-color: hsla(0, 0%, 7%, 0.75);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 16px;
  height: 100%;
  overflow: hidden;
  padding-bottom: 11px;
  z-index: 10;
`;

const MusicWrapper = styled.div`
  position: relative;
  background-color: hsla(0, 0%, 100%, .05);
  border-radius: 8px;
  margin: 0;
  overflow: hidden;
  height: 285px;
  margin: 13px 13px 0;
  padding: 0 3px 0 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

`;

const DraggableContent = styled.div`
  z-index: 15;
  position: absolute;
  width: auto;
  right: 600px;
  top: 0px;
`;


const DraggableContentTitle = styled.div`
  color: hsla(0, 0%, 100%, .7);
  font-size: 14px;
  margin: 8px 12px
`
const SoundWrapper = styled.div`
  padding-bottom: 5px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 0 12px;
  width: max-content;
  cursor: auto;
  pointer-events: all;
`
const SoundText = styled.p`
  align-items: flex-start;
  display: flex;
  line-height: 16px;
  opacity: .4;
  margin: 0;
  font-size: 14px;
  color: #fff;
  width: max-content;
`


const SoundInput = styled.input`
  display: flex;
  align-items: center;
  width: 130px;
  height: 24px;
`
