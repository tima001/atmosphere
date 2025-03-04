import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Faders,
  IntersectThree,
  FinnTheHuman,
  BoundingBox,
} from "@phosphor-icons/react";
import DraggableVoicesWidget from "./DraggableVoicesWidget";

const LeftInterface = ({sounds, setSounds, handleButtonClickRain}) => {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const handleLeftInterfaceClick = () => {
    setShowAdditionalContent((prevState) => !prevState);
  };
  return (
    <InterfaceWrapper>
      <LeftBarWrapper>
        <IconsWrapper>
          <Faders
            onClick={handleLeftInterfaceClick}
            size={24}
            style={{ cursor: "pointer" }}
            weight="light"
            color="white"
          />
          <IntersectThree
            size={24}
            style={{ cursor: "pointer" }}
            weight="light"
            color="white"
          />
          <FinnTheHuman
            size={24}
            style={{ cursor: "pointer" }}
            weight="light"
            color="white"
          />
          <BoundingBox
            size={24}
            style={{ cursor: "pointer" }}
            weight="light"
            color="white"
          />
        </IconsWrapper>
      </LeftBarWrapper>
      <DraggableVoicesWidget
        showAdditionalContent={showAdditionalContent}
        handleLeftInterfaceClick={handleLeftInterfaceClick}
        handleButtonClickRain={handleButtonClickRain}
        sounds={sounds}
        setSounds={setSounds}
      />
    </InterfaceWrapper>
  );
};

export default LeftInterface;
const InterfaceWrapper = styled.div`
  z-index: 15;
  position: absolute;
  width: auto;
  right: 0;
  top: calc(100% / 2.7);
`;

const LeftBarWrapper = styled.div`
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  background-color: hsla(0, 0%, 7%, 0.75);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 10px;
  margin-right: 48px;
  padding: 24px 8px;
  z-index: 9999999;
  width: 24px;

`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
