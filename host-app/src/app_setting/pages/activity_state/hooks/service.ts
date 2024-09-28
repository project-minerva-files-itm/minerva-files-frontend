import { ActivityState } from "src/app_setting/models/activitystate";
import useApiActivitySatate from "../../../hooks/services/api_activitystate"
import useActivitySateStore from "../../../hooks/store/activitystate_store";

export const useService = () => {

    const { get, save, update, deleted } = useApiActivitySatate();
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
        console.log(filter)
        //const processes = await getProcessFilterApi(filter);
        //setProcessStore(processes.data);
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