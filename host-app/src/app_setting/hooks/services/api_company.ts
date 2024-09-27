
import { useApiClient } from "@httpclient";
import { apiUrl } from "@config";
import { ApiResponse } from "@response";
import { Company } from "../../models/company";

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