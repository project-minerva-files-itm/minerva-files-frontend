import { Request } from "src/app_order/models/request";
import useApiRequest from "../../../hooks/services/api_request";
import useRequestStore from "../../../hooks/store/request_store";


export const useService = () => {
  const { get, save, update, deleted, filtering } = useApiRequest();
  const { setStore } = useRequestStore();

  const getRequest = async (page: number, record: number) => {
    const response = await get(page, record);
    if (response) {
      setStore(response);
    }
  }

  const saveRequest = async (data: Request) => {
    const response = await save(data);
    console.log(response)
    return response;
  }

  const updateRequest = async (data: Request) => {
    const response = await update(data);
    console.log(response)
    return response;
  }

  const deleteRequest = async (data: Request) => {
    const response = await deleted(data.id);
    console.log(response)
    return response;
  }

  const onPaginate = async (page: string, record: number) => {
    getRequest(parseInt(page), record)
  }

  const onFilter = async (filter: string) => {
    const response = await filtering(1, 1000, filter);
    if (response) {
      setStore(response);
    }
  }

  return {
    getRequest,
    saveRequest,
    updateRequest,
    deleteRequest,
    onPaginate,
    onFilter
  };

}