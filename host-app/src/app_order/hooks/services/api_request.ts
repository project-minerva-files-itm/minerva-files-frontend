import { useApiClient } from "@httpclient/index";
import { apiUrlorder } from "@config/index";
import { ApiResponse } from "@response/index";
import { Request } from "../../models/request";

const useApiRequest = () => {
  const endpoint = "Request";
  const apiClient = useApiClient();

  const get = async (page: number, record: number) => {
    const query = `paginated?Page=${page}&RecordsNumber=${record}`;
    return await apiClient.get<ApiResponse<Request>>(
      `${apiUrlorder}/${endpoint}/${query}`
    );
  };

  const save = async (data: Request) => {
    return await apiClient.post<ApiResponse<Request>>(
      `${apiUrlorder}/${endpoint}`,
      data
    );
  };

  const update = async (data: Request) => {
    return await apiClient.put<ApiResponse<Request>>(
      `${apiUrlorder}/${endpoint}`,
      data
    );
  };

  const deleted = async (id: number) => {
    return await apiClient.delete<ApiResponse<Request>>(
      `${apiUrlorder}/${endpoint}/${id}`
    );
  };

  const filtering = async (page: number, record: number, filter: string) => {
    const query = `paginated?Page=${page}&RecordsNumber=${record}&Filter=${filter}`;
    return await apiClient.get<ApiResponse<Request>>(
      `${apiUrlorder}/${endpoint}/${query}`
    );
  };

  return { get, save, update, deleted, filtering };
};

export default useApiRequest;
