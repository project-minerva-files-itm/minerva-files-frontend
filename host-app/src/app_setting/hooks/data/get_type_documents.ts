import type_documents from "../../../assets/data/type_documents.json";
import { SelectDto } from 'bm-react-lib';

const useGetTypeDocumentsState = () => {
  const documentData: SelectDto[] = type_documents;
  return { documentData, type_documents };
};

export default useGetTypeDocumentsState;
