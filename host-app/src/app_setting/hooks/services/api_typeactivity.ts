import { useApiClient } from "@httpclient/index";
import { apiUrl } from "@config/index";
import { ApiResponse } from "@response/index";
import { ActivityType } from "../../models/activitytype";

const useApiActivityType = () => {
  const endpoint = "ActivityType";
  const apiClient = useApiClient();

  const get = async (page: number, record: number) => {
    const query = `paginated?Page=${page}&RecordsNumber=${record}`;
    return await apiClient.get<ApiResponse<ActivityType>>(
      `${apiUrl}/${endpoint}/${query}`
    );
  };

  const save = async (data: ActivityType) => {
    return await apiClient.post<ApiResponse<ActivityType>>(
      `${apiUrl}/${endpoint}`,
      data
    );
  };

  const update = async (data: ActivityType) => {
    return await apiClient.put<ApiResponse<ActivityType>>(
      `${apiUrl}/${endpoint}`,
      data
    );
  };

  const deleted = async (id: number) => {
    return await apiClient.delete<ApiResponse<ActivityType>>(
      `${apiUrl}/${endpoint}/${id}`
    );
  };

  const filtering = async (page: number, record: number, filter: string) => {
    const query = `paginated?Page=${page}&RecordsNumber=${record}&Filter=${filter}`;
    return await apiClient.get<ApiResponse<ActivityType>>(
      `${apiUrl}/${endpoint}/${query}`
    );
  };

  return { get, save, update, deleted, filtering };
};

export default useApiActivityType;
