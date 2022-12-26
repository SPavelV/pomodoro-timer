import { RootState } from "../store";

export const selectSettings = (state: RootState) => state.settings;

export const selectFocusLength = (state: RootState) =>
  selectSettings(state).focusLength;
