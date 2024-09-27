
import { useApiClient } from "@httpclient/index";
import { apiUrl } from "@config/index";
import { ApiResponse } from "@response/index";
import { Company } from "../../models/company";


const useApiCompany = () => {
    const apiClient = useApiClient();

    const get = async (page: number, record: number) => {
        const query = `paginated?Page=${page}&RecordsNumber=${record}`;
        return await apiClient.get<ApiResponse<Company>>(`${apiUrl}/Company/${query}`);
    };

    const save = async (data: Company) => {
        return await apiClient.post<ApiResponse<Company>>(`${apiUrl}/Company`, data);
    };

    return { get, save };
};

export default useApiCompany;