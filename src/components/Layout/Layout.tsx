import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row wrap;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

const StyledInner = styled.div`
  flex: 1 1 auto;
  padding: 16px;
  background-color: red;
`;

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <StyledInner>{children}</StyledInner>
    </StyledLayout>
  );
};
