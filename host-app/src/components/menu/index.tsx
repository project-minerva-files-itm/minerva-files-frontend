import React from "react";
import Menu from "./view";
import useGetAuth from "@hooks/data/get_login";
import { UserJwtPayload } from "@apptypes/user_jwt_payload";
import { useJwtDecode } from "@hooks/index";

type ButtonProps = unknown

const MenuComponent: React.FC<ButtonProps> = () => {

    const auth = useGetAuth();

    const isLogged = !!auth.token;

    const { decodedToken } = useJwtDecode<UserJwtPayload>(auth.token);

    return <Menu isLogged={isLogged} data={decodedToken}></Menu>
};

export default MenuComponent;