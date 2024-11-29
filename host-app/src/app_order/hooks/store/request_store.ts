import { useDispatch } from "react-redux";
import { fetchRequestSuccess } from "../../reducers/request_slice";
import { Request } from "../../models/request";
import { ApiResponse } from "@response/index";

const useRequestStore = () => {
  const dispatch = useDispatch();

  const setStore = (data: ApiResponse<Request>) => {
    dispatch(fetchRequestSuccess(data));
  };

  return { setStore };
};

export default useRequestStore;
