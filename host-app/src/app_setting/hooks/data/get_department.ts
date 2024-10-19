import { useAppSelector } from '../../../hooks/store'

const useGetDepartment = () => {
    const data = useAppSelector(state => state.Department);
    return data;
};

export default useGetDepartment;
