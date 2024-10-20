import { useDispatch } from "react-redux";
import { fetchSuccess } from "../../reducers/login_slice";
import { AuthType } from "../../models/auth";

const useLoginStore = () => {
  const dispatch = useDispatch();

  const setStore = (data: AuthType) => {
    dispatch(fetchSuccess(data));
  };

  return { setStore };
};

export default useLoginStore;