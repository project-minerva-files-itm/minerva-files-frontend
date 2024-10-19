import { Company } from "src/app_setting/models/company";
import useApiCompany from "../../../hooks/services/api_company";
import useCompanyStore from "../../../hooks/store/company_store";

export const useService = () => {
  const { get, save, update, deleted, filtering } = useApiCompany();
  const { setStore } = useCompanyStore();

  const getCompany = async (page: number, record: number) => {
    const response = await get(page, record);
    if (response) {
      setStore(response);
    }
  };

  const saveCompany = async (data: Company) => {
    const response = await save(data);
    console.log(response);
    return response;
  };

  const updateCompany = async (data: Company) => {
    const response = await update(data);
    console.log(response);
    return response;
  };

  const deleteCompany = async (data: Company) => {
    const response = await deleted(data.id);
    console.log(response);
    return response;
  };

  const onPaginate = async (page: string, record: number) => {
    getCompany(parseInt(page), record);
  };

  const onFilter = async (filter: string) => {
    const response = await filtering(1, 1000, filter);
    if (response) {
      setStore(response);
    }
  };

  return {
    getCompany,
    saveCompany,
    updateCompany,
    deleteCompany,
    onPaginate,
    onFilter,
  };
};
