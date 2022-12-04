import { useEffect, useState, useReducer, useRef } from "react";
import { StatusTimer } from "../types";

const FOCUS_TIME = 0.3 * 60 * 1000;
const SHORT_BREAK_TIME = 0.1 * 60 * 1000;
const LONG_BREAK_TIME = 15 * 60 * 1000;

export const useTimer = () => {
  const [status, setStatus] = useState<StatusTimer>(StatusTimer.Focus);
  const [time, setTime] = useState(FOCUS_TIME);
  const [enabled, toggleEnabled] = useReducer((prev) => !prev, false);
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
    if (time <= 0 && intervalRef.current && status === StatusTimer.Focus) {
      setTime(SHORT_BREAK_TIME);
      setStatus(StatusTimer.ShortBreak);
    }
  }, [time, status]);

  useEffect(() => {
    if (time <= 0 && intervalRef.current && status === StatusTimer.ShortBreak) {
      setTime(FOCUS_TIME);
      setStatus(StatusTimer.Focus);
    }
  }, [time, status]);

  return { time, enabled, status, toggleEnabled } as const;
};
