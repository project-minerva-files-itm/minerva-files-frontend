
import { useApiClient } from "@httpclient/index";
import { apiUrl } from "@config/index";
import { ApiResponse } from "@response/index";
import { RequestType } from "../../models/requestype";


const useApiRequestType = () => {
    const endpoint = "RequestType";
    const apiClient = useApiClient();

    const get = async (page: number, record: number) => {
        const query = `paginated?Page=${page}&RecordsNumber=${record}`;
        return await apiClient.get<ApiResponse<RequestType>>(`${apiUrl}/${endpoint}/${query}`);
    };

    const save = async (data: RequestType) => {
        return await apiClient.post<ApiResponse<RequestType>>(`${apiUrl}/${endpoint}`, data);
    };

    const update = async (data: RequestType) => {
        return await apiClient.put<ApiResponse<RequestType>>(`${apiUrl}/${endpoint}`, data);
    };

    const deleted = async (id: number) => {
        return await apiClient.delete<ApiResponse<RequestType>>(`${apiUrl}/${endpoint}/${id}`);
    };


    return { get, save, update, deleted };
};

export default useApiRequestType;