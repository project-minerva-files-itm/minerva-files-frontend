import { useDispatch } from 'react-redux';
import { fetchSuccess } from "../../reducers/typerequest_slice";
import { RequestType } from "../../models/requestype";
import { ApiResponse } from '@response/index';

const useRequestTypeStore = () => {
    const dispatch = useDispatch();

    const setStore = (data: ApiResponse<RequestType>) => {
        dispatch(fetchSuccess(data));
    };

    return { setStore };
};

export default useRequestTypeStore;
