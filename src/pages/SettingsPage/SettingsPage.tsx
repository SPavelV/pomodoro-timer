import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Popup } from "../../components/Popup/Popup";
import { Switch } from "../../components/Switch/Switch";
import { ReactComponent as CloseIcon } from "../../assets/icons/x.svg";
import styled from "styled-components";
import { Colors, StatusTimer } from "../../types";
import { getColor } from "../../utils";
import { useStatusContext } from "../../context/StatusContext";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../context/ThemeContext";

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
`;

const SettingProp = styled.div`
  font-size: 16px;
  line-height: 19px;
`;

export const SettingsPage = () => {
  const { status } = useStatusContext();
  const { setDarkTheme } = useThemeContext();
  const { t } = useTranslation();

  const onChangeTheme = (checked: boolean) => {
    setDarkTheme(checked);
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
            <SettingProp>Dark mode</SettingProp>
            <Switch onChange={onChangeTheme} name="theme" />
          </SettingItem>

          <SettingItem>
            <SettingProp>Focus length</SettingProp>
          </SettingItem>
        </PopupContent>
      </Popup>
    </Layout>
  );
};
