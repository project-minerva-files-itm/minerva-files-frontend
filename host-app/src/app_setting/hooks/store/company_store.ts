import { useDispatch } from "react-redux";
import { fetchCompanySuccess } from "../../reducers/company_slice";
import { Company } from "../../models/company";
import { ApiResponse } from "@response/index";

const useCompanyStore = () => {
  const dispatch = useDispatch();

  const setStore = (data: ApiResponse<Company>) => {
    dispatch(fetchCompanySuccess(data));
  };

  return { setStore };
};

export default useCompanyStore;
