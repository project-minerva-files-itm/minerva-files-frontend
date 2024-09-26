import useApiCompany from "../../../hooks/services/api_company";
import useCompanyStore from "../../../hooks/store/company_store";

export const useService = () => {

    const { get } = useApiCompany();
    const { setStore } = useCompanyStore();

    const getCompany = async (page: number, record: number) => {
        const processes = await get(page, record);
        setStore(processes.data);
    }

    return {
        getCompany,
    };

}