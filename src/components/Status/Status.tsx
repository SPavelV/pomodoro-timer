import React from "react";
import styled from "styled-components";
import { ReactComponent as BrainIcon } from "../../assets/icons/brain-fill.svg";
import { ReactComponent as CoffeeIcon } from "../../assets/icons/coffee.svg";
import { StatusTimer } from "../../types";
import { getBgColor, getColor } from "../../utils";

const Inner = styled.div<StatusProps>`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 32px;
  font-size: 24px;
  line-height: 28px;
  border: 1px solid transparent;
  gap: 8px;
  margin-bottom: 16px;
  color: ${({ status }) => getColor(status)};
  border-color: ${({ status }) => getColor(status)};
  background-color: ${({ status }) => getBgColor(status)};

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

type StatusProps = {
  status: StatusTimer;
};

export const Status: React.FC<StatusProps> = ({ status }) => {
  switch (status) {
    case StatusTimer.Focus:
      return (
        <Inner status={status}>
          <BrainIcon /> Focus
        </Inner>
      );

    case StatusTimer.ShortBreak:
      return (
        <Inner status={status}>
          <CoffeeIcon />
          Short Break
        </Inner>
      );

    case StatusTimer.LongBreak:
      return (
        <Inner status={status}>
          <CoffeeIcon />
          Long Break
        </Inner>
      );

    default:
      return null;
  }
};
