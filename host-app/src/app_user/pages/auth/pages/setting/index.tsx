import React from "react";

import useGetAuth from "@hooks/data/get_login";
import AuthSetting from "./view";
import { useNavigate } from "react-router";
import useLoginStore from "../../../../hooks/store/login_store";
import { useJwtDecode, useModal } from "@hooks/index";
import { UserJwtPayload } from "../../../../../types/user_jwt_payload";
import { ModalsEnum } from "../../../../enums/modals_enum";
import useApiLogin from "../../../../hooks/services/api_login";

type ButtonProps = unknown

const SettingAuthPage: React.FC<ButtonProps> = () => {

  const auth = useGetAuth();
  const navigate = useNavigate();
  const { setStore } = useLoginStore();
  const { openModal, closeModal } = useModal();
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
    openModal(ModalsEnum.UPDATE_USER, response);
  }

  const onPassword = async () => {
    closeModal(ModalsEnum.SETTING_USER);
    navigate(`/update-account?userid=${decodedToken?.Id}&token=${auth.token}`);
  }



  return <AuthSetting logout={logout} user={decodedToken} edit={edit} onPassword={onPassword}></AuthSetting>
};

export default SettingAuthPage;