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
  background-color: transparent;
  outline: ${({ isFocus }) =>
    isFocus ? `3px solid ${Colors.BlueAlpha100}` : 0};
`;

const InputInner = styled.div`
  overflow: hidden;
  width: 60px;
`;

const Input = styled.input`
  width: 60px;
  height: 40px;
  font-size: 16px;
  line-height: 19px;
  border: 0;
  text-align: center;
  color: inherit;
  background-color: transparent;

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

const Button = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 20px;
  border: 0;
  background-color: transparent;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "initial")};
  color: inherit;

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
  onChange?: (value: number) => void;
  step?: number;
  upperLimit?: number;
  lowerLimit?: number;
};

export const InputNumber: FC<InputNumberProps> = ({
  value = 0,
  onChange = (f) => f,
  step = 5,
  upperLimit = 60,
  lowerLimit = 0,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);

  const increase = () => {
    const currentValue =
      value === upperLimit || value + step >= upperLimit
        ? upperLimit
        : value + step;
    onChange(currentValue);
  };

  const decrease = () => {
    const currentValue =
      value === lowerLimit || value - step <= lowerLimit
        ? lowerLimit
        : value - step;
    onChange(currentValue);
  };

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const currentValue = Number(e.currentTarget.value.replace(/[^0-9]/g, ""));
    if (currentValue > upperLimit || currentValue < lowerLimit) {
      onChange(Number(value));
      return Number(value);
    }
    onChange(currentValue);
  };

  return (
    <Inner isFocus={isFocus}>
      <InputInner>
        <Input
          value={value}
          ref={inputRef}
          onFocus={(_) => setIsFocus(true)}
          onBlur={(_) => setIsFocus(false)}
          onChange={changeHandler}
        />
      </InputInner>

      <Controls>
        <Button onClick={increase} disabled={value >= upperLimit}>
          <AngleIcon />
        </Button>

        <Button onClick={decrease} disabled={value <= lowerLimit}>
          <AngleIcon />
        </Button>
      </Controls>
    </Inner>
  );
};
