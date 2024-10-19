import { useAppSelector } from '../../../hooks/store'

const useGetCompany = () => {
    const data = useAppSelector(state => state.Company);
    return data;
};

export default useGetCompany;
