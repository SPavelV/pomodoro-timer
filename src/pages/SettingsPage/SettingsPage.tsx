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
import { selectFocusLength } from "../../store/settings/selectors";
import { setFocusLength } from "../../store/settings";
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
  const dispatch = useAppDispatch;
  const focusLength = useAppSelector(selectFocusLength);

  const onChangeTheme = (checked: boolean) => {
    console.log("checked :>> ", checked);
    setDarkTheme(checked);
  };

  const focusLengthHandler = (value: number) => {
    console.log("value", value);
  };

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
            <Switch onChange={onChangeTheme} name="theme" />
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
            <InputNumber value={25} onChange={focusLengthHandler} />
          </SettingItem>

          <SettingItem>
            <SettingProp>{t("ShortBreakLength")}</SettingProp>
            <InputNumber value={5} onChange={focusLengthHandler} />
          </SettingItem>

          <SettingItem>
            <SettingProp>{t("LongBreakLength")}</SettingProp>
            <InputNumber value={25} onChange={focusLengthHandler} />
          </SettingItem>

          <SettingItem>
            <SettingProp>{t("AutoResumeTimer")}</SettingProp>
            <Switch name="auto-resume-timer" onChange={(f) => f} />
          </SettingItem>

          <SettingItem>
            <SettingProp>{t("Notifications")}</SettingProp>
            <Switch name="notifications" onChange={(f) => f} />
          </SettingItem>
        </PopupContent>
      </Popup>
    </Layout>
  );
};
