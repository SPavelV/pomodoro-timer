import React, { FC, useRef, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../types";
import { ReactComponent as AngleIcon } from "../../assets/icons/angle.svg";

const Inner = styled.div<{ isFocus: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  border: 1px solid ${Colors.BlackAlpha100};
  border-radius: 8px;
  overflow: hidden;
  background-color: ${Colors.White};
  outline: ${({ isFocus }) =>
    isFocus ? `3px solid ${Colors.BlueAlpha100}` : 0};
`;

const InputInner = styled.div`
  overflow: hidden;
  width: 60px;
`;

const Input = styled.input`
  width: 80px;
  height: 40px;
  font-size: 16px;
  line-height: 19px;
  border: 0;
  padding-left: 10px;
  text-align: center;

  &:focus-visible,
  &:focus {
    border: 0;
    outline: 0;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-left: 1px solid ${Colors.BlackAlpha100};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 20px;
  border: 0;
  background-color: ${Colors.White};
  cursor: pointer;

  & + & {
    border-top: 1px solid ${Colors.BlackAlpha100};
    position: relative;

    svg {
      transform: rotate(180deg);
    }
  }
`;

type InputNumberProps = {
  value?: number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const InputNumber: FC<InputNumberProps> = ({ value }) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);

  return (
    <Inner isFocus={isFocus}>
      <InputInner>
        <Input
          value={value}
          type="number"
          ref={inputRef}
          onFocus={(_) => setIsFocus(true)}
          onBlur={(_) => setIsFocus(false)}
        />
      </InputInner>

      <Controls>
        <Button>
          <AngleIcon />
        </Button>

        <Button>
          <AngleIcon />
        </Button>
      </Controls>
    </Inner>
  );
};
