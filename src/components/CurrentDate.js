import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

const CurrentDate = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  useEffect(() => {
    // Function to get the current time in 12-hour format
    const getCurrentTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    const getCurrentDate = () => {
      const date = new Date();
      const options = { weekday: "long", month: "long", day: "numeric" };
      return date.toLocaleDateString(undefined, options);
    };

    setCurrentTime(getCurrentTime());
    setCurrentDate(getCurrentDate());
  }, []);

  const handleNavCurrentTimeClick = () => {
    setShowAdditionalContent((prevState) => !prevState);
  };

  return (
    <div>
      <NavCurrentTime onClick={handleNavCurrentTimeClick}>
        {currentTime}
      </NavCurrentTime>
      {showAdditionalContent && (
        <Draggable>
          <AdditionalContentContainer>
            <WidgetContainer>
              <InfoContainer>
                <CurrentTimeWrapper>
                  <CurrentTimeInfo>
                    <Title>
                      {currentTime === "AM"
                        ? "Доброй ночи 🌙️"
                        : "Доброго дня ☀️"}
                    </Title>
                    <Title>{currentTime}</Title>
                  </CurrentTimeInfo>
                  <Title2>Сегодня {currentDate}</Title2>
                </CurrentTimeWrapper>
                <Body>
                  "Ты силен, ты способен, ты важен. Поверь в себя и добейся
                  своих целей!"
                </Body>
              </InfoContainer>
              <LineWrapper onClick={() => setShowAdditionalContent(false)}>
                <InfoLine />
              </LineWrapper>
            </WidgetContainer>
          </AdditionalContentContainer>
        </Draggable>
      )}
    </div>
  );
};

export default CurrentDate;

const NavCurrentTime = styled.div`
  padding: 4px 12px;
  height: 28px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  align-items: center;
  background: hsla(0, 0%, 7%, 0.75);
  display: flex;
`;

const AdditionalContentContainer = styled.div`
  position: absolute;
  user-select: auto;
  width: 568px;
  height: 100%;
  display: inline-block;
  top: 486px;
  left: 209px;
  cursor: move;
  pointer-events: all;
  z-index: 1000;
  transform: translate(406px, 549px);
  max-width: 1136px;
  max-height: 306px;
  min-width: 568px;
  min-height: 153px;
  box-sizing: border-box;
  flex-shrink: 0;
  border-radius: 16px;
  background: rgb(33, 33, 33, 0.2);
  padding: 20px;
`;
const WidgetContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  font-weight: 500;
  gap: 20px;
  height: 100%;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
const CurrentTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 23px;
`;
const CurrentTimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  font-size: 26px;
  color: #fff;
  margin: 0;
`;
const Title2 = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 0;
`;
const Body = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 0;
`;
const LineWrapper = styled.div`
  height: 50px;
  width: auto;
  cursor: pointer;
`;
const InfoLine = styled.div`
  background: #fff;
  color: #fff;
  display: flex;
  height: 3px;
  justify-content: center;
  margin: 0;
  min-width: 20px;
  padding: 0;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
