import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
  focusLength: number;
  untilLongBreak: number;
  shortBreakLength: number;
  longBreakLength: number;
  autoResumeTimer: boolean;
  notification: boolean;
}

const initialState: SettingsState = {
  focusLength: 25,
  untilLongBreak: 25,
  shortBreakLength: 5,
  longBreakLength: 25,
  autoResumeTimer: true,
  notification: true,
};

export const settingsSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setFocusLength: (state, action: PayloadAction<number>) => {
      state.focusLength = action.payload;
    },
    setUntilLongBreak: (state, action: PayloadAction<number>) => {
      state.untilLongBreak = action.payload;
    },
    setShortBreakLength: (state, action: PayloadAction<number>) => {
      state.shortBreakLength = action.payload;
    },
    setLongBreakLength: (state, action: PayloadAction<number>) => {
      state.longBreakLength = action.payload;
    },
    setAutoResumeTimer: (state) => {
      state.autoResumeTimer = !state.autoResumeTimer;
    },
    notification: (state) => {
      state.notification = !state.notification;
    },
  },
});

export const { setFocusLength, setUntilLongBreak } = settingsSlice.actions;
