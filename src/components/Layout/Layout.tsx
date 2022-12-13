import React from "react";
import styled from "styled-components";
import { useStatusContext } from "../../context/StatusContext";
import { StatusTimer, Colors } from "../../types";

const StyledLayout = styled.div<{ status: StatusTimer }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row wrap;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    switch (props.status) {
      case StatusTimer.Focus:
        return Colors.Red50;
      case StatusTimer.LongBreak:
        return Colors.Blue50;
      case StatusTimer.ShortBreak:
        return Colors.Green50;
    }
  }}; ;
`;

const StyledInner = styled.div`
  flex: 0 1 auto;
  padding: 16px;
`;

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { status } = useStatusContext();

  return (
    <StyledLayout status={status}>
      <StyledInner>{children}</StyledInner>
    </StyledLayout>
  );
};
