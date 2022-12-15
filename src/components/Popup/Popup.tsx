import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../../types";
import { PopupOverlay } from "../PopupOverlay/PopupOverlay";
import { ReactComponent as CloseIcon } from "../../assets/icons/x.svg";

const Inner = styled.div`
  max-width: 440px;
  width: 100%;
  max-height: 750px;
  padding: 16px;
  background: ${Colors.Red50};
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.039),
    0px 5.5px 16px rgba(0, 0, 0, 0.19);
  border-radius: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.15px;
`;

const Close = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
`;

type PopupProps = {
  isOpened: boolean;
  title: ReactNode;
  onClose: () => void;
  children: ReactNode;
  closeIcon?: ReactNode;
};

export const Popup: FC<PopupProps> = ({
  children,
  isOpened,
  onClose,
  title,
  closeIcon,
}) => {
  return (
    <PopupOverlay isOpened={isOpened} onClose={onClose}>
      <Inner>
        <Header>
          <Title>{title}</Title>
          <Close onClick={onClose}>{closeIcon || <CloseIcon />}</Close>
        </Header>
        {children}
      </Inner>
    </PopupOverlay>
  );
};
