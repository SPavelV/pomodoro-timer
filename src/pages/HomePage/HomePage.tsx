import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Status, StatusTimer } from "../../components/Status/Status";
import { Time } from "../../components/Time/Time";

export const HomePage = () => {
  return (
    <Layout>
      <Status type={StatusTimer.Focus} />

      <Time />
    </Layout>
  );
};
