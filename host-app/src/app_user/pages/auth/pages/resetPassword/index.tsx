
import RecoverPasswordView from "./view";
import { ResetPasswordType } from "../../../../models/auth_reset_password";
import useApiLogin from "../../../../hooks/services/api_login";
import { useLoader, useToastNotification } from "@hooks/index";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";


const ResetPasswordPage: React.FC = () => {

  const { t } = useTranslation();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { resetPassword } = useApiLogin();
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
    const response = await resetPassword(authUser);
    loader.hideLoader();

    if (!response.wasSuccess) {
      response.message = response.message ?? "";
    }

    if (response.wasSuccess) {
      response.message = t("sendRecoveryPassword");

    }

    showToast(response);

    if (response.wasSuccess) {
      navigate('/login');
    }

  }

  return <RecoverPasswordView name="login" handlerSave={handlerSave}></RecoverPasswordView>;
}

export default ResetPasswordPage;