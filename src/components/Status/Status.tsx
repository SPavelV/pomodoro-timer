import React, { useMemo } from "react";
import styled from "styled-components";
import { ReactComponent as BrainIcon } from "../../assets/icons/brain-fill.svg";
import { ReactComponent as CoffeeIcon } from "../../assets/icons/coffee.svg";
import { StatusTimer } from "../../types";
import { getBgColor, getColor } from "../../utils";
import { useTranslation } from "react-i18next";
import { useStatusContext } from "../../context/StatusContext";

const Inner = styled.div<{ status: StatusTimer }>`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 32px;
  font-size: 24px;
  line-height: 28px;
  border: 1px solid transparent;
  gap: 8px;
  margin-bottom: 16px;
  color: ${({ status }) => getColor(status)};
  border-color: ${({ status }) => getColor(status)};
  background-color: ${({ status }) => getBgColor(status)};

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Status: React.FC = () => {
  const { status } = useStatusContext();
  const { t } = useTranslation();
  const getIcon = (status: StatusTimer) => {
    switch (status) {
      case StatusTimer.Focus:
        return <BrainIcon />;

      case StatusTimer.ShortBreak:
        return <CoffeeIcon />;

      case StatusTimer.LongBreak:
        return <CoffeeIcon />;

      default:
        return null;
    }
  };

  const statusLocale = useMemo(
    () => <span>{t(`${status}`)}</span>,
    [status, t]
  );

  return (
    <Inner status={status}>
      {getIcon(status)} {statusLocale}
    </Inner>
  );
};
