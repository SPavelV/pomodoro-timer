import React, { FC } from "react";
import styled from "styled-components";
import { StatusTimer } from "../../types";
import { getColor } from "../../utils";

const Inner = styled.div<{ status: StatusTimer }>`
  margin-bottom: 32px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  color: ${({ status }) => getColor(status)};
`;

const Value = styled.div`
  font-family: "Roboto Flex";
  font-style: normal;
  font-weight: 200;
  font-size: 256px;
  line-height: 85%;
  display: flex;
  align-items: center;
  text-align: center;
`;

type TimeProps = {
  minutes?: number;
  seconds?: number;
  status: StatusTimer;
};

export const Time: FC<TimeProps> = ({ minutes = 0, seconds = 0, status }) => {
  return (
    <Inner status={status}>
      <Value>{minutes}</Value>
      <Value>{seconds}</Value>
    </Inner>
  );
};
