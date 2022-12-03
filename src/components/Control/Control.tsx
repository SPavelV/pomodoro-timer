import React, { FC } from "react";
import styled from "styled-components";
import { StatusTimer, Colors } from "../../types";
import { ReactComponent as DotsIcon } from "../../assets/icons/dots-three-outline-fill.svg";
import { ReactComponent as PauseIcon } from "../../assets/icons/pause-fill.svg";
import { ReactComponent as PlayIcon } from "../../assets/icons/play-fill.svg";
import { ReactComponent as ForwardIcon } from "../../assets/icons/fast-forward-fill.svg";
import { getBgColor, getColor } from "../../utils";

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button<{ status: StatusTimer }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  color: ${({ status }) => getColor(status)};
`;

const ButtonSettingsOrForward = styled(Button)`
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background-color: ${({ status }) => getBgColor(status)};
`;

const ButtonPlayOrPause = styled(Button)`
  width: 128px;
  height: 96px;
  border-radius: 32px;
  background-color: ${(props) => {
    switch (props.status) {
      case StatusTimer.Focus:
        return Colors.RedAlpha700;
      case StatusTimer.LongBreak:
        return Colors.BlueAlpha600;
      case StatusTimer.ShortBreak:
        return Colors.GreenAlpha600;
    }
  }};
`;

type ControlProps = {
  isPlay: boolean;
  status: StatusTimer;
};

export const Control: FC<ControlProps> = ({ status, isPlay }) => {
  return (
    <Inner>
      <ButtonSettingsOrForward status={status}>
        <DotsIcon />
      </ButtonSettingsOrForward>

      <ButtonPlayOrPause status={status}>
        {isPlay ? <PlayIcon /> : <PauseIcon />}
      </ButtonPlayOrPause>

      <ButtonSettingsOrForward status={status}>
        <ForwardIcon />
      </ButtonSettingsOrForward>
    </Inner>
  );
};
