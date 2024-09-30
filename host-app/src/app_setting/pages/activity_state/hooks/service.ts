import { ActivityState } from "src/app_setting/models/activitystate";
import useApiActivitySatate from "../../../hooks/services/api_activitystate"
import useActivitySateStore from "../../../hooks/store/activitystate_store";

export const useService = () => {

    const { get, save, update, deleted, filtering } = useApiActivitySatate();
    const { setStore } = useActivitySateStore();

    const getActivityState = async (page: number, record: number) => {
        const response = await get(page, record);
        if (response) {
            setStore(response);
        }
    }

    const saveActivityState = async (data: ActivityState) => {
        const response = await save(data);
        console.log(response)
        return response;
    }

    const updateActivityState = async (data: ActivityState) => {
        const response = await update(data);
        console.log(response)
        return response;
    }

    const deleteActivityState = async (data: ActivityState) => {
        const response = await deleted(data.id);
        console.log(response)
        return response;
    }

    const onPaginate = async (page: string, record: number) => {
        getActivityState(parseInt(page), record)
    }

    const onFilter = async (filter: string) => {
        const response = await filtering(1, 1000, filter);
        if (response) {
            setStore(response);
        }
    }

    return {
        getActivityState,
        saveActivityState,
        updateActivityState,
        deleteActivityState,
        onPaginate,
        onFilter
    };

}