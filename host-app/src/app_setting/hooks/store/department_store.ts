import { useDispatch } from "react-redux";
import { fetchDepartmentSuccess } from "../../reducers/department_slice";
import { Department } from "../../models/department";
import { ApiResponse } from "@response/index";

const useDepartmentStore = () => {
  const dispatch = useDispatch();

  const setStore = (data: ApiResponse<Department>) => {
    dispatch(fetchDepartmentSuccess(data));
  };

  return { setStore };
};

export default useDepartmentStore;
