import { useAppSelector } from '../../store/hooks'

const useGetCompany = () => {
    console.log("HOLAAAAAA")
    const data = useAppSelector(state => state.Company);
    return data;
};

export default useGetCompany;