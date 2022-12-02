import React, { FC } from "react";
import styled from "styled-components";

const Inner = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
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
};

export const Time: FC<TimeProps> = ({ minutes = 0, seconds = 0 }) => {
  return (
    <Inner>
      <Value>{minutes}</Value>
      <Value>{seconds}</Value>
    </Inner>
  );
};
