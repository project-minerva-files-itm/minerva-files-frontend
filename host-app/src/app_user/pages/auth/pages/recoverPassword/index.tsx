
import RecoverPasswordView from "./view";
import { AuthRecover } from "../../../../models/auth_recover";
import useApiLogin from "../../../../hooks/services/api_login";
import { useLoader, useToastNotification } from "@hooks/index";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const RecoverPasswordPage: React.FC = () => {

  const { t, i18n } = useTranslation();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { recover } = useApiLogin();
  const navigate = useNavigate();

  const handlerSave = async (authUser: AuthRecover) => {
    authUser.language = i18n.language;
    loader.showLoader();
    const response = await recover(authUser);
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

export default RecoverPasswordPage;