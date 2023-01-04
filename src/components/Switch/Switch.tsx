import React, { FC } from "react";
import styled from "styled-components";
import { useStatusContext } from "../../context/StatusContext";
import { Colors, StatusTimer } from "../../types";
import { getColor } from "../../utils";

export const Inner = styled.div`
  position: relative;
  width: 34px;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
`;

const Checkbox = styled.input`
  display: none;
`;

const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid ${Colors.BlackAlpha200};
  border-radius: 10px;
  margin: 0;

  ${Checkbox}:disabled + & {
    margin-left: 0;
    cursor: not-allowed;
  }
`;

const LabelInner = styled.span<{ status: StatusTimer }>`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  &:before,
  &:after {
    display: block;
    float: left;
    width: 50%;
    height: 20px;
    padding: 0;
    color: ${Colors.White};
    font-weight: bold;
    box-sizing: border-box;
  }
  &:before {
    content: "";
    text-transform: uppercase;
    padding-left: 2px;
    background-color: ${({ status }) => getColor(status)};
    color: ${Colors.White};
  }

  &:after {
    content: "";
    padding-right: 2px;
    background-color: ${Colors.BlackAlpha200};
    color: ${Colors.White};
    text-align: right;
  }

  ${Checkbox}:checked + ${Label} & {
    margin-left: 0;
  }

  ${Checkbox}:disabled + ${Label} &:after {
    background-color: ${Colors.BlackAlpha100};
  }

  ${Checkbox}:disabled + ${Label} &:before {
    opacity: 0.5;
  }
`;

const LabelSwitch = styled.span`
  display: block;
  width: 16px;
  margin: 2px;
  background: ${Colors.White};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 13px;
  border: 0 solid ${Colors.BlackAlpha200};
  border-radius: 10px;
  transition: all 0.3s ease-in 0s;

  ${Checkbox}:checked + ${Label} & {
    right: 1px;
  }
`;

type SwitchProps = {
  onChange: (checked: boolean) => void;
  name: string;
  checked?: boolean;
  disabled?: boolean;
};

export const Switch: FC<SwitchProps> = ({
  onChange = (_) => {},
  name = "switch",
  checked = false,
  disabled = false,
}) => {
  const { status } = useStatusContext();

  return (
    <Inner>
      <Checkbox
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        name={name}
        id={name}
        checked={checked}
        disabled={disabled}
      />
      <Label htmlFor={name}>
        <LabelInner status={status} />
        <LabelSwitch />
      </Label>
    </Inner>
  );
};
