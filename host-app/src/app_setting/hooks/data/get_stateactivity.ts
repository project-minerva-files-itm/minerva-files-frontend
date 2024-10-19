import { useAppSelector } from '../../../hooks/store'

const useGetActivityState = () => {
	const data = useAppSelector(state => state.ActivityState);
	return data;
};

export default useGetActivityState;
