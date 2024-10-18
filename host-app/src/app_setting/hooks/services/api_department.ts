
import { useApiClient } from "@httpclient/index";
import { apiUrl } from "@config/index";
import { ApiResponse } from "@response/index";
import { Department } from "../../models/department";


const useApiDepartment = () => {
    const endpoint = "Department";
    const apiClient = useApiClient();

    const get = async (page: number, record: number) => {
        const query = `paginated?Page=${page}&RecordsNumber=${record}`;
        return await apiClient.get<ApiResponse<Department>>(`${apiUrl}/${endpoint}/${query}`);
    };

    const save = async (data: Department) => {
        return await apiClient.post<ApiResponse<Department>>(`${apiUrl}/${endpoint}`, data);
    };

    const update = async (data: Department) => {
        return await apiClient.put<ApiResponse<Department>>(`${apiUrl}/${endpoint}`, data);
    };

    const deleted = async (id: number) => {
        return await apiClient.delete<ApiResponse<Department>>(`${apiUrl}/${endpoint}/${id}`);
    };

    const filtering = async (page: number, record: number, filter: string) => {
        const query = `paginated?Page=${page}&RecordsNumber=${record}&Filter=${filter}`;
        return await apiClient.get<ApiResponse<Department>>(`${apiUrl}/${endpoint}/${query}`);
    };


    return { get, save, update, deleted, filtering };
};

export default useApiDepartment;