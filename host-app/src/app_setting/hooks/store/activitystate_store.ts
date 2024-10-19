import { useDispatch } from "react-redux";
import { fetchSuccess } from "../../reducers/activitystate_slice";
import { ActivityState } from "../../models/activitystate";
import { ApiResponse } from "@response/index";

const useActivitySateStore = () => {
  const dispatch = useDispatch();

  const setStore = (data: ApiResponse<ActivityState>) => {
    dispatch(fetchSuccess(data));
  };

  return { setStore };
};

export default useActivitySateStore;
