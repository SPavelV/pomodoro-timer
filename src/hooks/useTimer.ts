import { useEffect, useState, useReducer, useRef } from "react";
import { useStatusContext } from "../context/StatusContext";
import { StatusTimer } from "../types";

const FOCUS_TIME = 0.2 * 60 * 1000;
const SHORT_BREAK_TIME = 0.1 * 60 * 1000;
const LONG_BREAK_TIME = 0.2 * 60 * 1000;
const WORKING_PERIODS = 2;

export const useTimer = () => {
  const { status, setStatus } = useStatusContext();
  const [time, setTime] = useState(FOCUS_TIME);
  const [enabled, toggleEnabled] = useReducer((prev) => !prev, false);
  const [workingPeriodCounter, setWorkingPeriodCounter] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (enabled) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else {
      intervalRef.current && clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [enabled]);

  useEffect(() => {
    if (time <= 0 && intervalRef.current) {
      if (status === StatusTimer.Focus) {
        if (workingPeriodCounter === WORKING_PERIODS) {
          setTime(LONG_BREAK_TIME);
          setStatus(StatusTimer.LongBreak);
          setWorkingPeriodCounter(1);
        } else {
          setTime(SHORT_BREAK_TIME);
          setStatus(StatusTimer.ShortBreak);
          setWorkingPeriodCounter(
            (workingPeriodCounter) => workingPeriodCounter + 1
          );
        }
      } else {
        setTime(FOCUS_TIME);
        setStatus(StatusTimer.Focus);
      }
    }
  }, [time, status, setStatus, workingPeriodCounter]);

  return { time, enabled, toggleEnabled } as const;
};
