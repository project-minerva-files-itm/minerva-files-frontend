import { DocumentType } from "src/app_setting/models/documentype";
import useApiDocumentType from "../../../hooks/services/api_typedocument";
import useDocumentTypeStore from "../../../hooks/store/typedocument_store";

export const useService = () => {
  const { get, save, update, deleted, filtering } = useApiDocumentType();
  const { setStore } = useDocumentTypeStore();

  const getDocumentType = async (page: number, record: number) => {
    const response = await get(page, record);
    if (response) {
      setStore(response);
    }
  };

  const saveDocumentType = async (data: DocumentType) => {
    const response = await save(data);
    console.log(response);
    return response;
  };

  const updateDocumentType = async (data: DocumentType) => {
    const response = await update(data);
    console.log(response);
    return response;
  };

  const deleteDocumentType = async (data: DocumentType) => {
    const response = await deleted(data.id);
    console.log(response);
    return response;
  };

  const onPaginate = async (page: string, record: number) => {
    getDocumentType(parseInt(page), record);
  };

  const onFilter = async (filter: string) => {
    const response = await filtering(1, 1000, filter);
    if (response) {
      setStore(response);
    }
  };

  return {
    getDocumentType,
    saveDocumentType,
    updateDocumentType,
    deleteDocumentType,
    onPaginate,
    onFilter,
  };
};
