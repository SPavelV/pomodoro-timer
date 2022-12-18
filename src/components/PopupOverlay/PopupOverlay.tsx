import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Portal } from "../Portal/Portal";

const Inner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 24px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.02);
  cursor: pointer;
`;

const Child = styled.div<{ maxWidth?: number }>`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.maxWidth || "440px"};
`;

type PopupOverlayProps = {
  children: ReactNode;
  onClose: () => void;
  isOpened: boolean;
};

export const PopupOverlay: FC<PopupOverlayProps> = ({
  children,
  onClose,
  isOpened,
}) => {
  if (!isOpened) return null;

  return (
    <Portal>
      <Inner>
        <Overlay role="button" tabIndex={0} onClick={onClose} />

        <Child>{children}</Child>
      </Inner>
    </Portal>
  );
};
