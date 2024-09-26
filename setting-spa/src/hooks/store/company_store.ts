import { useDispatch } from 'react-redux';
import { fetchCompanySuccess } from "../../reducers/company_slice";
import { Company } from "../../models/company";

const useCompanyStore = () => {
    const dispatch = useDispatch();

    const setStore = (processes: Company) => {
        dispatch(fetchCompanySuccess(processes));
    };

    return { setStore };
};

export default useCompanyStore;
