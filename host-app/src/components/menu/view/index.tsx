import { AppBrand, AppNav, AppUl, AppNavLi, AppNavButton } from "bm-react-lib";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import { useTheme } from "../../../hooks/utils/theme";


type ButtonProps = unknown

const Menu: React.FC<ButtonProps> = () => {

    const history = useNavigate();
    const theme = useTheme();

    return (
        <AppNav brand={<AppBrand label="Minerva" />}>
            <AppUl>
                <AppNavLi label="settings">
                    <a onClick={() => history('/company')} className="a">Company</a>
                    <a onClick={() => history('/terceros')} className="a">Terceros</a>
                    <a onClick={() => history('/setting')} className="a">Settings</a>
                </AppNavLi>
                <li className="a option-setting">
                    <AppNavButton className="switch-2">
                        <Cog6ToothIcon style={{ width: 24, color: theme.isDark ? "white" : "black" }} />
                    </AppNavButton>
                    <AppNavButton className="switch-2">
                        {theme.isDark ? <MoonIcon onClick={() => theme.light()} style={{ width: 24, color: "white" }} /> : <SunIcon onClick={() => theme.dark()} style={{ width: 24, color: "black" }} />}
                    </AppNavButton>
                </li>
            </AppUl>
        </AppNav>
    );
};

export default Menu;