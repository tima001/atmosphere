import React, { createRef, useRef, useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import Interface from "./components/Interface.js";
import Clip from "./components/Clip";
import BackGroundRoundCrc from "./components/BackgroundRoundCircle";
import LeftInterface from "./components/LeftInterface";
import {
  Airplane,
  Bird,
  Campfire,
  Car, CloudRain,
  Drop,
  Fan,
  Fire,
  Keyboard,
  Laptop,
  Planet,
  UsersThree,
  Waves,
  Tree
} from "@phosphor-icons/react";

function App() {
  const [isDay, setIsDay] = useState(false);
  const [isRainy, setIsRainy] = useState(false);

  const [sounds, setSounds] = useState([
    {
      id: 0,
      title: "City Rain",
      src: "/assets/voices/rain_city.mp3",
      isPlaying: isRainy,
      volume: 0.5,
      left: "35%",
      top: "35%",
      isSeen: true,
      icon:  <CloudRain size={32} />
    },
    {
      id: 1,
      title: "Traffic City",
      src: "/assets/voices/city_traffic.mp3",
      isPlaying: false,
      volume: 0.5,
      left: "75%",
      top: "80%",
      isSeen: true,
      icon: <Car size={32} />
    },
    {
      id: 2,
      title: "Aeroport",
      src: "/assets/voices/airplane.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <Airplane size={32} />
    },
    {
      id: 3,
      title: "Birds",
      src: "/assets/voices/birds.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <Bird size={32} />
    },
    {
      id: 4,
      title: "Brown noise",
      src: "/assets/voices/brown-noise.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
    },
    {
      id: 5,
      title: "Campfire",
      src: "/assets/voices/campfire.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <Campfire size={32} />
    },
    {
      id: 6,
      title: "Deep space",
      src: "/assets/voices/deepspace.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <Planet size={32} />
    },
    {
      id: 7,
      title: "Digital",
      src: "/assets/voices/digital.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <Laptop size={32} />
    },
    {
      id: 8,
      title: "Fan",
      src: "/assets/voices/fan.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <Fan size={32} />
    },
    {
      id: 9,
      title: "Fire place",
      src: "/assets/voices/fireplace.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <Fire size={32} />
    },
    {
      id: 10,
      title: "Forest night",
      src: "/assets/voices/forest_night.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <Tree size={32} />

    },
    {
      id: 11,
      title: "Keyboard",
      src: "/assets/voices/keyboard.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <Keyboard size={32} />
    },
    {
      id: 12,
      title: "Ocean",
      src: "/assets/voices/ocean.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <Drop size={32} />
    },
    {
      id: 13,
      title: "People talk inside",
      src: "/assets/voices/people_talk_inside.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      icon: <UsersThree size={32} />
    },
    {
      id: 14,
      title: "Pink noise",
      src: "/assets/voices/pink-noise.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false
    },
    {
      id: 15,
      title: "Rain forest",
      src: "/assets/voices/rain_forest.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false
    },
    {
      id: 16,
      title: "River.mp3",
      src: "/assets/voices/river.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false
    },
    {
      id: 17,
      title: "Snow",
      src: "/assets/voices/snow.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false
    },
    {
      id: 18,
      title: "Summer Storm",
      src: "/assets/voices/summer_storm.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false
    },
    {
      id: 19,
      title: "Thunders",
      src: "/assets/voices/thunders.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false
    },
    {
      id: 20,
      title: "Train",
      src: "/assets/voices/train.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false
    },
    {
      id: 21,
      title: "Waves",
      src: "/assets/voices/waves.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false,
      // icon: <Waves size={32} />
    },
    {
      id: 22,
      title: "White Noise",
      src: "/assets/voices/white-noise.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false
    },
    {
      id: 23,
      title: "Wind",
      src: "/assets/voices/wind.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false
    },
    {
      id: 24,
      title: "Window rain",
      src: "/assets/voices/window_rain.mp3",
      isPlaying: false,
      volume: 0,
      left: "",
      top: "",
      isSeen: false
    },

  ]);

  const dayNightShuffle = () => {
    setIsDay(!isDay);
  };

  const rainShuffle = () => {
    setIsRainy(!isRainy);
    console.log("clicked rain")
  };

  return (
    <div>
      <Interface dayNightShuffle={dayNightShuffle} isDay={isDay}></Interface>
      <LeftInterface sounds={sounds} setSounds={setSounds} handleButtonClickRain={rainShuffle} />
      <Content>
        <Clip
          visible={isDay && !isRainy}
          url={"/assets/videos/outside-sunny.mp4"}
        ></Clip>
        <Clip
          visible={!isDay && !isRainy}
          url={"/assets/videos/outside-night.mp4"}
        ></Clip>
        <Clip
          visible={isDay && isRainy}
          url={"/assets/videos/outside-rain.mp4"}
        ></Clip>
        <Clip
          visible={!isDay && isRainy}
          url={"/assets/videos/outside-night-rain.mp4"}
        ></Clip>
        <BackGroundRoundCrc
          handleButtonClickRain={rainShuffle}
          sounds={sounds}
          setSounds={setSounds}
        />
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  overflow: hidden;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
