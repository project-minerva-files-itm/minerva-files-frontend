import React from "react";
import Menu from "./view";
import useGetAuth from "@hooks/data/get_login";

type ButtonProps = unknown

const MenuComponent: React.FC<ButtonProps> = () => {

    const auth = useGetAuth();

    const isLogged = !!auth.token;

    console.log("xxxxx", isLogged);

    return <Menu isLogged={isLogged}></Menu>
};

export default MenuComponent;