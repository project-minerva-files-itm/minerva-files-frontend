

import { ResetPasswordType } from "../../../../models/auth_reset_password";
import useApiLogin from "../../../../hooks/services/api_login";
import { useLoader, useToastNotification } from "@hooks/index";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import UpdatePasswordView from "./view";


const UpdatePasswordPage: React.FC = () => {

  const { t } = useTranslation();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { updatePassword } = useApiLogin();
  const navigate = useNavigate();

  // Crear una instancia de URLSearchParams con la query string
  const queryParams = new URLSearchParams(location.search);
  // Obtener valores de la query string
  const userId = queryParams.get('userid') ?? "";
  const token = queryParams.get('token') ?? "";


  const handlerSave = async (authUser: ResetPasswordType) => {

    authUser.token = token;
    authUser.UserId = userId;

    console.log(authUser);

    loader.showLoader();
    const response = await updatePassword(authUser, token);
    loader.hideLoader();

    if (response.succeeded) {
      response.message = t("updatePassword");
    }

    showToast(response);

    if (response.succeeded) {
      navigate('/home');
    }

  }

  return <UpdatePasswordView name="login" handlerSave={handlerSave}></UpdatePasswordView>;
}

export default UpdatePasswordPage;