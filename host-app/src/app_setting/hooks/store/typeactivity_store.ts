import { useDispatch } from "react-redux";
import { fetchSuccess } from "../../reducers/typeactivity_slice";
import { ActivityType } from "../../models/activitytype";
import { ApiResponse } from "@response/index";

const useActivityTypeStore = () => {
  const dispatch = useDispatch();

  const setStore = (data: ApiResponse<ActivityType>) => {
    dispatch(fetchSuccess(data));
  };

  return { setStore };
};

export default useActivityTypeStore;
