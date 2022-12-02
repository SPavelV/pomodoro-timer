import React from "react";

export enum StatusEnum {
  Focus = "Focus",
  ShortBreak = "Short Break",
  LongBreak = "Long Break",
}

type StatusProps = {
  type?: StatusEnum;
};

export const Status: React.FC<StatusProps> = ({ type }) => {
  return <div>Status</div>;
};
