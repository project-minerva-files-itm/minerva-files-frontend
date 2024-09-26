import { useAppSelector } from '../../store/hooks'

const useGetCompany = () => {
    const data = useAppSelector(state => state.Company);
    return data;
};

export default useGetCompany;