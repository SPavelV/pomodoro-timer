import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Popup } from "../../components/Popup/Popup";
import { Switch, Inner as InnerSwitch } from "../../components/Switch/Switch";
import { ReactComponent as CloseIcon } from "../../assets/icons/x.svg";
import styled from "styled-components";
import { ColorTheme, StatusTimer } from "../../types";
import { getColor } from "../../utils";
import { useStatusContext } from "../../context/StatusContext";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../context/ThemeContext";
import { InputNumber } from "../../components/InputNumber/InputNumber";
import {
  selectFocusLength,
  selectHasAutoResumeTimer,
  selectHasNotification,
  selectLongBreakLength,
  selectShortBreakLength,
  selectUntilLongBreak,
} from "../../store/settings/selectors";
import {
  setFocusLength,
  setUntilLongBreak,
  setShortBreakLength,
  setLongBreakLength,
  toggleAutoResumeTimer,
  toggleHasNotification,
} from "../../store/settings";
import { useAppDispatch, useAppSelector } from "../../hooks/store";

const InnerWithStatus = styled.span<{ status: StatusTimer }>`
  color: ${({ status }) => getColor(status)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled.div<{ status: StatusTimer }>`
  color: ${({ status }) => getColor(status)};
`;

const SettingItem = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${InnerSwitch} {
    margin: 8px 0;
  }
`;

const SettingProp = styled.div`
  font-size: 16px;
  line-height: 19px;
`;

export const SettingsPage = () => {
  const { status } = useStatusContext();
  const { theme, setDarkTheme } = useThemeContext();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const focusLength = useAppSelector(selectFocusLength);
  const untilLongBreak = useAppSelector(selectUntilLongBreak);
  const shortBreakLength = useAppSelector(selectShortBreakLength);
  const longBreakLength = useAppSelector(selectLongBreakLength);
  const hasAutoResumeTimer = useAppSelector(selectHasAutoResumeTimer);
  const hasNotification = useAppSelector(selectHasNotification);

  return (
    <Layout>
      <Popup
        isOpened={true}
        onClose={() => console.log("onClose")}
        title={
          <InnerWithStatus status={status}>{t("Settings")}</InnerWithStatus>
        }
        closeIcon={
          <InnerWithStatus status={status}>
            <CloseIcon />
          </InnerWithStatus>
        }
      >
        <PopupContent status={status}>
          <SettingItem>
            <SettingProp>
              {theme === ColorTheme.Dark ? t("DarkMode") : t("LightMode")}
            </SettingProp>
            <Switch
              onChange={setDarkTheme}
              checked={theme === ColorTheme.Dark}
              name="theme"
            />
          </SettingItem>

          <SettingItem>
            <SettingProp>{t("FocusLength")}</SettingProp>
            <InputNumber
              value={focusLength}
              onChange={(value) => dispatch(setFocusLength(value))}
            />
          </SettingItem>

          <SettingItem>
            <SettingProp>{t("UntilLongBreak")}</SettingProp>
            <InputNumber
              value={untilLongBreak}
              onChange={(value) => dispatch(setUntilLongBreak(value))}
            />
          </SettingItem>

          <SettingItem>
            <SettingProp>{t("ShortBreakLength")}</SettingProp>
            <InputNumber
              value={shortBreakLength}
              onChange={(value) => dispatch(setShortBreakLength(value))}
            />
          </SettingItem>

          <SettingItem>
            <SettingProp>{t("LongBreakLength")}</SettingProp>
            <InputNumber
              value={longBreakLength}
              onChange={(value) => dispatch(setLongBreakLength(value))}
            />
          </SettingItem>

          <SettingItem>
            <SettingProp>{t("AutoResumeTimer")}</SettingProp>
            <Switch
              name="auto-resume-timer"
              checked={hasAutoResumeTimer}
              onChange={(_) => dispatch(toggleAutoResumeTimer())}
            />
          </SettingItem>

          <SettingItem>
            <SettingProp>{t("Notifications")}</SettingProp>
            <Switch
              name="notifications"
              checked={hasNotification}
              onChange={(_) => dispatch(toggleHasNotification())}
            />
          </SettingItem>
        </PopupContent>
      </Popup>
    </Layout>
  );
};
