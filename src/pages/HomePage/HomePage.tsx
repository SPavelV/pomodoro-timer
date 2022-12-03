import React, { useCallback, useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Status } from "../../components/Status/Status";
import { StatusTimer } from "../../types";
import { Time } from "../../components/Time/Time";
import { Control } from "../../components/Control/Control";
import { getTimeRemaining } from "../../utils/functions";

type Timer = {
  minutes: number;
  seconds: number;
};

export const HomePage = () => {
  const [time, setTime] = useState<Timer>({ minutes: 0, seconds: 0 });
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [timeOff, setTimeOff] = useState(true);
  const status = StatusTimer.Focus;

  useEffect(() => {
    let idInterval: ReturnType<typeof setInterval>;
    if (!timeOff && endTime) {
      idInterval = setInterval(() => {
        const currentTime = getTimeRemaining(String(endTime));

        if (currentTime.total <= 0) {
          clearInterval(idInterval);
          setTimeOff(true);
        }

        setTime({
          minutes: currentTime.minutes,
          seconds: currentTime.seconds,
        });
      }, 0);
    }
    return () => idInterval && clearInterval(idInterval);
  }, [timeOff, endTime]);

  const onClickPlay: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      setTimeOff((timeOff) => !timeOff);
    },
    []
  );

  useEffect(() => {
    if (!timeOff) {
      setEndTime(new Date(Date.now() + 1000 * 60 * 0.2));
    }
  }, [timeOff]);

  return (
    <Layout status={status}>
      <Status status={status} />

      <Time status={status} minutes={time.minutes} seconds={time.seconds} />

      <Control status={status} showPlay={timeOff} onClickPlay={onClickPlay} />
    </Layout>
  );
};
