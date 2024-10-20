import { AppBrand, AppNav, AppUl, AppNavLi, AppNavButton } from "bm-react-lib";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../../hooks/utils/theme";
import { useTranslation } from "react-i18next";
import { AuthRegisterModal, AuthSettingModal } from "../../../app_user"

type ButtonProps = {
  isLogged: boolean
};

const Menu: React.FC<ButtonProps> = ({ isLogged }) => {
  const { t } = useTranslation();
  const history = useNavigate();
  const theme = useTheme();

  return (
    <>
      <AppNav brand={<AppBrand label="Minerva" />}>
        <AppUl>
          {isLogged ?
            <><AppNavLi label={t("settings")}>
              <a onClick={() => history("/activities")} className="a">
                {t("activities")}
              </a>
              <a onClick={() => history("/company")} className="a">
                {t("company")}
              </a>
              <a onClick={() => history("/department")} className="a">
                {t("department")}
              </a>
              <a onClick={() => history("/requestType")} className="a">
                {t("typeRequests")}
              </a>
              <a onClick={() => history("/documentType")} className="a">
                {t("typeDocuments")}
              </a>
              <a onClick={() => history("/activityType")} className="a">
                {t("typeActivities")}
              </a>
            </AppNavLi></> :
            <>
              <a onClick={() => history("/login")} className="a">
                {t("login")}
              </a>
              <AuthRegisterModal />
            </>
          }
          <li className="a option-setting">
            {isLogged ?
              <AuthSettingModal />
              : null
            }
            <AppNavButton className="switch-2">
              {theme.isDark ? (
                <MoonIcon
                  onClick={() => theme.light()}
                  style={{ width: 24, color: "white" }} />
              ) : (
                <SunIcon
                  onClick={() => theme.dark()}
                  style={{ width: 24, color: "black" }} />
              )}
            </AppNavButton>
          </li>
        </AppUl>
      </AppNav>

    </>
  );
};

export default Menu;
