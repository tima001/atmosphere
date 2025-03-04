import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { SunDim, MoonStars } from "@phosphor-icons/react";
import { Switch, Space } from "antd";

const DayNightSwitch = ({ dayNightShuffle, isDay }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.load();
  }, []);

  return (
    <Space direction="vertical">
      <CustomSwitch
        checked={isDay}
        onChange={dayNightShuffle}
        checkedChildren={<SunDim size={14} weight="bold" />}
        unCheckedChildren={<MoonStars size={14} weight="bold" />}
      />
    </Space>
  );
};

export default DayNightSwitch;

const CustomSwitch = styled(Switch)`
  &.ant-switch-checked {
    background-color: #f3a952;
  }
  &.ant-switch-checked:hover {
    background-color: #f3a952 !important;
  }

  &.ant-switch {
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
    padding-top: 2px;
  }

  & .ant-switch-handle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    transition: all 0.2s ease-in-out;
  }

  & .ant-switch-checked .ant-switch-handle {
    left: auto;
    right: 2px;
  }

  & .ant-switch-handle::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 9px;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    transition: all 0.2s ease-in-out;
    content: "";
  }
`;
