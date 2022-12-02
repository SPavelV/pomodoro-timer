import React from "react";
import styled from "styled-components";
import { ReactComponent as BrainIcon } from "../../assets/icons/brain-fill.svg";
import { ReactComponent as CoffeeIcon } from "../../assets/icons/coffee.svg";

const StatusStyled = styled.div`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  color: black;
  border-radius: 32px;
  font-size: 24px;
  line-height: 28px;
  border: 1px solid black;
  gap: 8px;
`;

export enum StatusTimer {
  Focus = "Focus",
  ShortBreak = "Short Break",
  LongBreak = "Long Break",
}

type StatusProps = {
  type?: StatusTimer;
};

export const Status: React.FC<StatusProps> = ({ type }) => {
  switch (type) {
    case StatusTimer.Focus:
      return (
        <StatusStyled>
          <BrainIcon /> Focus
        </StatusStyled>
      );

    case StatusTimer.ShortBreak:
      return (
        <StatusStyled>
          <CoffeeIcon />
          Short Break
        </StatusStyled>
      );

    case StatusTimer.LongBreak:
      return (
        <StatusStyled>
          <CoffeeIcon />
          Long Break
        </StatusStyled>
      );

    default:
      return null;
  }
};
