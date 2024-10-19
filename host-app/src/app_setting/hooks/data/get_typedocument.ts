import { useAppSelector } from "../../../hooks/store";

const useGetDocumentType = () => {
  const data = useAppSelector((state) => state.DocumentType);
  return data;
};

export default useGetDocumentType;
