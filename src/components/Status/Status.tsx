import React from "react";
import styled from "styled-components";
import { ReactComponent as BrainIcon } from "../../assets/icons/brain-fill.svg";
import { ReactComponent as CoffeeIcon } from "../../assets/icons/coffee.svg";

const Inner = styled.div`
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
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
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
        <Inner>
          <BrainIcon /> Focus
        </Inner>
      );

    case StatusTimer.ShortBreak:
      return (
        <Inner>
          <CoffeeIcon />
          Short Break
        </Inner>
      );

    case StatusTimer.LongBreak:
      return (
        <Inner>
          <CoffeeIcon />
          Long Break
        </Inner>
      );

    default:
      return null;
  }
};
