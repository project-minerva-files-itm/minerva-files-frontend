import { useAppSelector } from "../../../hooks/store";

const useGetActvityType = () => {
  const data = useAppSelector((state) => state.ActivityType);
  return data;
};

export default useGetActvityType;
