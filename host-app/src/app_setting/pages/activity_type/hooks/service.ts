import { ActivityType } from "src/app_setting/models/activitytype";
import useApiActivityType from "../../../hooks/services/api_typeactivity";
import useActivityTypeStore from "../../../hooks/store/typeactivity_store";

export const useService = () => {
  const { get, save, update, deleted, filtering } = useApiActivityType();
  const { setStore } = useActivityTypeStore();

  const getActivityType = async (page: number, record: number) => {
    const response = await get(page, record);
    if (response) {
      setStore(response);
    }
  };

  const saveActivityType = async (data: ActivityType) => {
    const response = await save(data);
    console.log(response);
    return response;
  };

  const updateActivityType = async (data: ActivityType) => {
    const response = await update(data);
    console.log(response);
    return response;
  };

  const deleteActivityType = async (data: ActivityType) => {
    const response = await deleted(data.id);
    console.log(response);
    return response;
  };

  const onPaginate = async (page: string, record: number) => {
    getActivityType(parseInt(page), record);
  };

  const onFilter = async (filter: string) => {
    const response = await filtering(1, 1000, filter);
    if (response) {
      setStore(response);
    }
  };

  return {
    getActivityType,
    saveActivityType,
    updateActivityType,
    deleteActivityType,
    onPaginate,
    onFilter,
  };
};
