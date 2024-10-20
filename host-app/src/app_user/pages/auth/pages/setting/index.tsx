import React from "react";

import useGetAuth from "@hooks/data/get_login";
import AuthSetting from "./view";
import { useNavigate } from "react-router";
import useLoginStore from "../../../../hooks/store/login_store";
import { useJwtDecode } from "@hooks/index";
import { UserJwtPayload } from "./types/user_jwt_payload";


type ButtonProps = unknown

const SettingAuthPage: React.FC<ButtonProps> = () => {

  const auth = useGetAuth();
  const navigate = useNavigate();
  const { setStore } = useLoginStore();

  const isLogged = !!auth.token;

  const { decodedToken } = useJwtDecode<UserJwtPayload>(auth.token);

  console.log("xxxxx", isLogged);

  const logout = () => {
    const auth = {
      "wasSuccess": false,
      "message": "",
      "token": "",
      "expiration": ""
    };
    setStore(auth);
    navigate("/login");
  }

  return <AuthSetting logout={logout} user={decodedToken}></AuthSetting>
};

export default SettingAuthPage;