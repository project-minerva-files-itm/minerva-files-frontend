import type_orrespondence from "../../../assets/data/type_orrespondence.json";
import { SelectDto } from 'bm-react-lib';

const useGetTypeCorrespondenceState = () => {
  const data: SelectDto[] = type_orrespondence;
  return data;
};

export default useGetTypeCorrespondenceState;
