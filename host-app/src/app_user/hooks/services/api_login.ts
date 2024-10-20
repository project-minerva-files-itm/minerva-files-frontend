import { apiLoginUrl } from "@config/index";
import { useApiClient } from "@httpclient/index";
import { AuthUser } from "../../models/auth_user";
import { Auth } from "../../models/auth";

const useApiLogin = () => {
  const endpoint = "User/Login";
  const apiClient = useApiClient();

  const login = async (data: AuthUser) => {
    return await apiClient.post<Auth>(
      `${apiLoginUrl}/${endpoint}`,
      data
    );
  };

  return { login };

}

export default useApiLogin;