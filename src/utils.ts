import { StatusTimer, Colors } from "./types";

export const getColor = (status: StatusTimer) => {
  switch (status) {
    case StatusTimer.Focus:
      return Colors.Red900;
    case StatusTimer.LongBreak:
      return Colors.Blue900;
    case StatusTimer.ShortBreak:
      return Colors.Green900;
  }
};

export const getBgColor = (status: StatusTimer) => {
  switch (status) {
    case StatusTimer.Focus:
      return Colors.RedAlpha100;
    case StatusTimer.LongBreak:
      return Colors.BlueAlpha100;
    case StatusTimer.ShortBreak:
      return Colors.GreenAlpha100;
  }
};
