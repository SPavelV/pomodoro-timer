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
  time?: number;
  status: StatusTimer;
};

export const Time: FC<TimeProps> = ({ time = 0, status }) => {
  const min = Math.floor((time / 1000 / 60) % 60);
  const sec = Math.floor((time / 1000) % 60);

  return (
    <Inner status={status}>
      <Value>{("0" + min).slice(-2)}</Value>
      <Value>{("0" + sec).slice(-2)}</Value>
    </Inner>
  );
};
