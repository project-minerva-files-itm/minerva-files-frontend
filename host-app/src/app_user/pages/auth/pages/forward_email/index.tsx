import { AuthRecover } from "../../../../models/auth_recover";
import useApiLogin from "../../../../hooks/services/api_login";
import { useLoader, useToastNotification } from "@hooks/index";
import { useTranslation } from "react-i18next";
import ForwardEmailView from "./view";

const ForwardEmailPage: React.FC = () => {

  const { t, i18n } = useTranslation();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { resendConfirmationEmail } = useApiLogin();

  const handlerSave = async (authUser: AuthRecover) => {
    authUser.language = i18n.language;
    loader.showLoader();
    const response = await resendConfirmationEmail(authUser);
    loader.hideLoader();

    if (!response.wasSuccess) {
      response.message = response.message ?? "";
    }

    if (response.wasSuccess) {
      response.message = t("registerUser");
    }

    showToast(response);

  }

  return <ForwardEmailView name="login" handlerSave={handlerSave}></ForwardEmailView>;
}

export default ForwardEmailPage;