import { useApiClient } from "@httpclient/index";
import { apiUrl } from "@config/index";
import { ApiResponse } from "@response/index";
import { DocumentType } from "../../models/documentype";

const useApiDocumentType = () => {
  const endpoint = "DocumentType";
  const apiClient = useApiClient();

  const get = async (page: number, record: number) => {
    const query = `paginated?Page=${page}&RecordsNumber=${record}`;
    return await apiClient.get<ApiResponse<DocumentType>>(
      `${apiUrl}/${endpoint}/${query}`
    );
  };

  const save = async (data: DocumentType) => {
    return await apiClient.post<ApiResponse<DocumentType>>(
      `${apiUrl}/${endpoint}`,
      data
    );
  };

  const update = async (data: DocumentType) => {
    return await apiClient.put<ApiResponse<DocumentType>>(
      `${apiUrl}/${endpoint}`,
      data
    );
  };

  const deleted = async (id: number) => {
    return await apiClient.delete<ApiResponse<DocumentType>>(
      `${apiUrl}/${endpoint}/${id}`
    );
  };

  const filtering = async (page: number, record: number, filter: string) => {
    const query = `paginated?Page=${page}&RecordsNumber=${record}&Filter=${filter}`;
    return await apiClient.get<ApiResponse<DocumentType>>(
      `${apiUrl}/${endpoint}/${query}`
    );
  };

  return { get, save, update, deleted, filtering };
};

export default useApiDocumentType;
