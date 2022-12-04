import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Status } from "../../components/Status/Status";
import { Time } from "../../components/Time/Time";
import { Control } from "../../components/Control/Control";
import { useTimer } from "../../hooks/useTimer";

export const HomePage = () => {
  const { time, enabled, status, toggleEnabled } = useTimer();

  const onClickPlay: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    toggleEnabled();
  };

  return (
    <Layout status={status}>
      <Status status={status} />

      <Time status={status} time={time} />

      <Control status={status} enabled={enabled} onClickPlay={onClickPlay} />
    </Layout>
  );
};
