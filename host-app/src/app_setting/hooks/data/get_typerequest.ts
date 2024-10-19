import { useAppSelector } from '../../../hooks/store'

const useGetRequestType = () => {
    const data = useAppSelector(state => state.RequestType);
    return data;
};

export default useGetRequestType;
