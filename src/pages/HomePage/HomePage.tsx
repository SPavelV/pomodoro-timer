import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Status } from "../../components/Status/Status";
import { StatusTimer } from "../../types";
import { Time } from "../../components/Time/Time";
import { Control } from "../../components/Control/Control";

export const HomePage = () => {
  const status = StatusTimer.ShortBreak;
  return (
    <Layout status={status}>
      <Status status={status} />

      <Time status={status} />

      <Control status={status} isPlay={true} />
    </Layout>
  );
};
