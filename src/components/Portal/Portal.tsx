import React, { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const Portal: FC<{ children: ReactNode }> = ({ children }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};
