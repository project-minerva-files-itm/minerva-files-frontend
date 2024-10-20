import { apiLoginUrl } from "@config/index";
import { useApiClient } from "@httpclient/index";
import { AuthUser } from "../../models/auth_user";
import { Auth } from "../../models/auth";
import { AuthRegisterType } from "../../models/auth_register";

const useApiLogin = () => {
  const endpoint = "User";
  const apiClient = useApiClient();

  const login = async (data: AuthUser) => {
    return await apiClient.post<Auth>(
      `${apiLoginUrl}/${endpoint}/Login`,
      data
    );
  };

  const register = async (data: AuthRegisterType) => {
    return await apiClient.post<Auth>(
      `${apiLoginUrl}/${endpoint}/CreateUser`,
      data
    );
  };

  return { login, register };

}

export default useApiLogin;