
import { useApiClient } from "@httpclient/index";
import { apiUrl } from "@config/index";
import { ApiResponse } from "@response/index";
import { ActivityState } from "../../models/activitystate";

const useApiActivitySatate = () => {
	const endpoint = "ActivityStates";
	const apiClient = useApiClient();

	const get = async (page: number, record: number) => {
		const query = `paginated?Page=${page}&RecordsNumber=${record}`;
		return await apiClient.get<ApiResponse<ActivityState>>(`${apiUrl}/${endpoint}/${query}`);
	};

	const save = async (data: ActivityState) => {
		return await apiClient.post<ApiResponse<ActivityState>>(`${apiUrl}/${endpoint}`, data);
	};

	const update = async (data: ActivityState) => {
		return await apiClient.put<ApiResponse<ActivityState>>(`${apiUrl}/${endpoint}`, data);
	};

	const deleted = async (id: number) => {
		return await apiClient.delete<ApiResponse<ActivityState>>(`${apiUrl}/${endpoint}/${id}`);
	};

	const filtering = async (page: number, record: number, filter: string) => {
		const query = `paginated?Page=${page}&RecordsNumber=${record}&Filter=${filter}`;
		return await apiClient.get<ApiResponse<ActivityState>>(`${apiUrl}/${endpoint}/${query}`);
	};

	return { get, save, update, deleted, filtering };
};

export default useApiActivitySatate;
