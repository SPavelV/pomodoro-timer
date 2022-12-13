import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";
import { StatusTimer } from "../types";

type StatusContextType = {
  status: StatusTimer;
  setStatus: (status: StatusTimer) => void;
};

export const StatusContext = createContext<StatusContextType>({
  status: StatusTimer.Focus,
  setStatus: () => {},
});

export const useStatusContext = () => useContext(StatusContext);

export const StatusProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState(StatusTimer.Focus);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};
