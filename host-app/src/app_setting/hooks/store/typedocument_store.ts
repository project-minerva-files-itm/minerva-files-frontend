import { useDispatch } from "react-redux";
import { fetchSuccess } from "../../reducers/typerequest_slice";
import { DocumentType } from "../../models/documentype";
import { ApiResponse } from "@response/index";

const useDocumentTypeStore = () => {
  const dispatch = useDispatch();

  const setStore = (data: ApiResponse<DocumentType>) => {
    dispatch(fetchSuccess(data));
  };

  return { setStore };
};

export default useDocumentTypeStore;
