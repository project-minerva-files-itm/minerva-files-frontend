import useApiCompany from "../../../hooks/services/api_company";
import useCompanyStore from "../../../hooks/store/company_store";

export const useService = () => {

    const { get } = useApiCompany();
    const { setStore } = useCompanyStore();

    const getCompany = async (page: number, record: number) => {
        const response = await get(page, record);
        if (response) {
            setStore(response);
        }
    }

    const onPaginate = async (page: string, record: number) => {
        getCompany(parseInt(page), record)
    }

    const onFilter = async (filter: string) => {
        console.log(filter)
        //const processes = await getProcessFilterApi(filter);
        //setProcessStore(processes.data);
    }

    return {
        getCompany,
        onPaginate,
        onFilter
    };

}