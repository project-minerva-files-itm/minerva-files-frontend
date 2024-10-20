import React from "react";

import useGetAuth from "@hooks/data/get_login";
import AuthSetting from "./view";
import { useNavigate } from "react-router";
import useLoginStore from "../../../../hooks/store/login_store";
import { useJwtDecode, useModal } from "@hooks/index";
import { UserJwtPayload } from "./types/user_jwt_payload";
import { ModalsEnum } from "../../../../enums/modals_enum";
import  useApiLogin  from "../../../../hooks/services/api_login";

type ButtonProps = unknown

const SettingAuthPage: React.FC<ButtonProps> = () => {

  const auth = useGetAuth();
  const navigate = useNavigate();
  const { setStore } = useLoginStore();
  const { openModal } = useModal();
  const { getUser } = useApiLogin();


  const { decodedToken } = useJwtDecode<UserJwtPayload>(auth.token);

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

  const edit = async () => {
    const response = await getUser(decodedToken?.Id ?? "");
    console.log("HHHHHH", response)
    openModal(ModalsEnum.UPDATE_USER, response);
  }

  return <AuthSetting logout={logout} user={decodedToken} edit={edit}></AuthSetting>
};

export default SettingAuthPage;