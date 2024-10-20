import { apiLoginUrl } from "@config/index";
import { useApiClient } from "@httpclient/index";
import { AuthUser } from "../../models/auth_user";
import { AuthType } from "../../models/auth";
import { AuthRecover } from "../../models/auth_recover";
import { AuthRegisterType } from "../../models/auth_register";
import { ResetPasswordType } from "../../models/auth_reset_password";

const useApiLogin = () => {
  const endpoint = "User";
  const apiClient = useApiClient();

  const login = async (data: AuthUser) => {
    return await apiClient.post<AuthType>(
      `${apiLoginUrl}/${endpoint}/Login`,
      data
    );
  };

  const register = async (data: AuthRegisterType) => {
    return await apiClient.post<AuthType>(
      `${apiLoginUrl}/${endpoint}/CreateUser`,
      data
    );
  };

  const recover = async (data: AuthRecover) => {
    return await apiClient.post<AuthType>(
      `${apiLoginUrl}/${endpoint}/RecoverPassword`,
      data
    );
  };

  const resetPassword = async (data: ResetPasswordType) => {
    return await apiClient.post<AuthType>(
      `${apiLoginUrl}/${endpoint}/ResetPassword`,
      data
    );
  };

  return { login, register, recover, resetPassword };

}

export default useApiLogin;