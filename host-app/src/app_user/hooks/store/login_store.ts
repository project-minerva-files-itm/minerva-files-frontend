import { useDispatch } from "react-redux";
import { fetchSuccess } from "../../reducers/login_slice";
import { Auth } from "../../models/auth";

const useLoginStore = () => {
  const dispatch = useDispatch();

  const setStore = (data: Auth) => {
    dispatch(fetchSuccess(data));
  };

  return { setStore };
};

export default useLoginStore;