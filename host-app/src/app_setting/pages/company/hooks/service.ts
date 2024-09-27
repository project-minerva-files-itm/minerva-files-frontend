import useApiCompany from "../../../hooks/services/api_company";
//import useCompanyStore from "../../../hooks/store/company_store";

export const useService = () => {

    const { get } = useApiCompany();
    //const { setStore } = useCompanyStore();

    const getCompany = async (page: number, record: number) => {
        const response = await get(page, record);
        if (response) {
           // setStore(response.data);
        }
    }

    return {
        getCompany
    };

}