import { RootState } from "../store";

export const selectSettings = (state: RootState) => state.settings;

export const selectFocusLength = (state: RootState) =>
  selectSettings(state).focusLength;

export const selectUntilLongBreak = (state: RootState) =>
  selectSettings(state).untilLongBreak;

export const selectShortBreakLength = (state: RootState) =>
  selectSettings(state).shortBreakLength;

export const selectLongBreakLength = (state: RootState) =>
  selectSettings(state).longBreakLength;

export const selectHasAutoResumeTimer = (state: RootState) =>
  selectSettings(state).hasAutoResumeTimer;

export const selectHasNotification = (state: RootState) =>
  selectSettings(state).hasNotification;
