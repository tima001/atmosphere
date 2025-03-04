import React from "react";
import styled from "@emotion/styled";
import DayNightSwitch from "./DayNightSwitch";
import CurrentDate from "./CurrentDate";
import AudioPlayer from "./AudioPlayer";

const Interface = ({ dayNightShuffle, isDay }) => {
  return (
    <InterfaceWrapper>
      <NavbarWrapper>
        <Logo src="/assets/videos/logo.gif" alt="LOGO" />
        <NavbarElementContainer>
          <CurrentDate />
          <DayNightSwitch dayNightShuffle={dayNightShuffle} isDay={isDay} />
          <AudioPlayer />
        </NavbarElementContainer>
      </NavbarWrapper>
    </InterfaceWrapper>
  );
};

export default Interface;

const Logo = styled.img`
  height: 100px;
  width: auto;
`;
const InterfaceWrapper = styled.div`
  z-index: 15;
  position: absolute;
  width: 95%;
`;
const NavbarElementContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavbarWrapper = styled.div`
  height: 80px;
  align-items: center;
  width: 100%;
  padding: 0 48px;
  position: absolute;
  z-index: 1;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
