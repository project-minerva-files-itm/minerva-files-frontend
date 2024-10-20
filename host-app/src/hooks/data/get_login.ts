import { useAppSelector } from '../../hooks/store'

const useGetAuth = () => {
  const data = useAppSelector(state => state.Auth);
  return data;
};

export default useGetAuth;