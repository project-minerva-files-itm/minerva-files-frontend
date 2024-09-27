import { useAppSelector } from '../../../hooks/store'

const useGetCompany = () => {

    const data = useAppSelector(state => state.Company);
    console.log("XXXX ", data)
    return data;
};

export default useGetCompany;