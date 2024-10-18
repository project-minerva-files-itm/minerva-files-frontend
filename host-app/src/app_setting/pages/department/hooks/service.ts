import { Department } from "src/app_setting/models/department";
import useApiDepartment from "../../../hooks/services/api_department";
import useDepartmentStore from "../../../hooks/store/department_store";


export const useService = () => {
    const { get, save, update, deleted, filtering } = useApiDepartment();
    const { setStore } = useDepartmentStore();

    const getDepartment = async (page: number, record: number) => {
        const response = await get(page, record);
        if (response) {
            setStore(response);
        }
    }

    const saveDepartment = async (data: Department) => {
        const response = await save(data);
        console.log(response)
        return response;
    }

    const updateDepartment = async (data: Department) => {
        const response = await update(data);
        console.log(response)
        return response;
    }

    const deleteDepartment = async (data: Department) => {
        const response = await deleted(data.id);
        console.log(response)
        return response;
    }

    const onPaginate = async (page: string, record: number) => {
        getDepartment(parseInt(page), record)
    }

    const onFilter = async (filter: string) => {
        const response = await filtering(1, 1000, filter);
        if (response) {
            setStore(response);
        }
    }

    return {
        getDepartment,
        saveDepartment,
        updateDepartment,
        deleteDepartment,
        onPaginate,
        onFilter
    };

}