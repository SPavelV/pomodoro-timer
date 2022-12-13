import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Status } from "../../components/Status/Status";
import { Time } from "../../components/Time/Time";
import { Control } from "../../components/Control/Control";
import { useTimer } from "../../hooks/useTimer";

export const HomePage = () => {
  const { time, enabled, toggleEnabled } = useTimer();

  const onClickPlay: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    toggleEnabled();
  };

  return (
    <Layout>
      <Status />

      <Time time={time} />

      <Control enabled={enabled} onClickPlay={onClickPlay} />
    </Layout>
  );
};
