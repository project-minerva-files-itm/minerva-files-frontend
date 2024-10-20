import { PageProps } from "@apptypes/page_type";
import LoginView from "./view";
import { AuthUser } from "../../../../models/auth_user";
import useApiLogin from "../../../../hooks/services/api_login";
import { useLoader, useToastNotification } from "@hooks/index";
import { useTranslation } from "react-i18next";
import useLoginStore from "../../../../hooks/store/login_store";
import { useNavigate } from "react-router";

const LoginPage: React.FC<PageProps> = () => {

  const { t } = useTranslation();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { login } = useApiLogin();
  const { setStore } = useLoginStore();
  const navigate = useNavigate();

  const handlerSave = async (authUser: AuthUser) => {

    loader.showLoader();
    const response = await login(authUser);
    loader.hideLoader();

    if (response.status === 400) {
      response.message = t("loginError");
      response.wasSuccess = false;
      showToast(response);
      return;
    }

    if (!response.token) {
      response.message = t("loginError");
      response.wasSuccess = false;
      showToast(response);
      return;
    }

    setStore(response);
    navigate('/home')

  }

  return <LoginView name="login" handlerSave={handlerSave}></LoginView>;
}

export default LoginPage;