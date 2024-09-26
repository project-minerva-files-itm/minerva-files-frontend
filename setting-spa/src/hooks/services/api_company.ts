
import { useApiClient } from "../../services/api_client";
import { apiUrl } from "../../config/env_config";
import { Company } from "../../models/company";
import { ApiResponse } from "../../services/types/api_response";

const useApiCompany = () => {
    const apiClient = useApiClient();

    const get = async (page: number, record: number) => {
        const query = `paginated?Page=${page}&RecordsNumber=${record}`;
        const response = await apiClient.get<ApiResponse<Company>>(`${apiUrl}/Company/${query}`);
        return response;
    };


    return { get };
};

export default useApiCompany;