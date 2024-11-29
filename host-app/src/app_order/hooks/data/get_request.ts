import { useAppSelector } from '../../../hooks/store'

const useGetRequest = () => {
  const data = useAppSelector(state => state.Request);
  return data;
};

export default useGetRequest;
