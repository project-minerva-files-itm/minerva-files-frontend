import { RequestType } from "src/app_setting/models/requestype";
import useApiRequestType from "../../../hooks/services/api_typerequest"
import useRequestTypeStore from "../../../hooks/store/typerequest_store";

export const useService = () => {

    const { get, save, update, deleted, filtering } = useApiRequestType();
    const { setStore } = useRequestTypeStore();

    const getRequestType = async (page: number, record: number) => {
        const response = await get(page, record);
        if (response) {
            setStore(response);
        }
    }

    const saveRequestType = async (data: RequestType) => {
        const response = await save(data);
        console.log(response)
        return response;
    }

    const updateRequestType = async (data: RequestType) => {
        const response = await update(data);
        console.log(response)
        return response;
    }

    const deleteRequestType = async (data: RequestType) => {
        const response = await deleted(data.id);
        console.log(response)
        return response;
    }

    const onPaginate = async (page: string, record: number) => {
        getRequestType(parseInt(page), record)
    }

    const onFilter = async (filter: string) => {
        const response = await filtering(1, 1000, filter);
        if (response) {
            setStore(response);
        }
    }

    return {
        getRequestType,
        saveRequestType,
        updateRequestType,
        deleteRequestType,
        onPaginate,
        onFilter
    };

}